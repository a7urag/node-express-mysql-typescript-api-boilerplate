import express from 'express';
import * as HttpStatus from 'http-status-codes';
import { CelebrateError, isCelebrateError } from 'celebrate';
import { ValidationError } from 'joi';

/**
 * Joi error handler middleware
 *
 * @param {object} err
 * @param {object} req
 * @param {object} res
 * @param {function} next
 *
 */
export default (
  err: CelebrateError,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  if (isCelebrateError(err)) {
    const details: string[] = [];
    err.details.forEach((error1: ValidationError) =>
      error1.details.forEach((value) => details.push(value.message)),
    );
    const error = {
      details: details.join(','),
      code: HttpStatus.BAD_REQUEST,
      message: HttpStatus.getStatusText(HttpStatus.BAD_REQUEST),
    };
    return res.status(HttpStatus.BAD_REQUEST).json(error);
  }
  // If this isn't a Joi error, send it to the next error handler
  return next(err);
};
