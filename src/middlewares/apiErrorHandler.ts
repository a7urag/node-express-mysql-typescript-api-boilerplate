import HttpStatus from 'http-status-codes';
import express from 'express'

export interface IError {
    status?: number;
    code?: number;
    message?: string;
}
/**
 * NOT_FOUND(404) middleware to catch error response
 *
 * @param  {object}   req
 * @param  {object}   res
 * @param  {function} next
 */
export function notFoundErrorHandler(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.status(HttpStatus.NOT_FOUND)
        .json({
            success: false,
            error: {
                code: HttpStatus.NOT_FOUND,
                message: HttpStatus.getStatusText(HttpStatus.NOT_FOUND),
            },
        });
}

/**
 * Generic error response middleware
 *
 * @param  {object}   err
 * @param  {object}   req
 * @param  {object}   res
 * @param  {function} next
 */
export function errorHandler(err: IError, req: express.Request, res: express.Response, next: express.NextFunction) {
    res.status(err.status || HttpStatus.INTERNAL_SERVER_ERROR)
        .json({
            success: false,
            error: {
                code: err.code || HttpStatus.INTERNAL_SERVER_ERROR,
                message: err.message || HttpStatus.getStatusText(HttpStatus.INTERNAL_SERVER_ERROR),
            },
        });
}
