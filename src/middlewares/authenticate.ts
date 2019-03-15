import express from 'express';
import HttpStatus from 'http-status-codes';
// import jwt from 'jsonwebtoken';
import User from '../services/models/user.model';

/**
 * Route authentication middleware to verify a token
 *
 * @param {object} req
 * @param {object} res
 * @param {function} next
 *
 */

export default (req: express.Request, res: express.Response, next: express.NextFunction) => {
  // const authorizationHeader = req.headers.authorization;
  // let token;
  // if (authorizationHeader) {
  //   token = authorizationHeader;
  // }
  //
  // if (token) {
  //   jwt.verify(token, process.env.TOKEN_SECRET_KEY, (err, decoded) => {
  //     if (err) {
  //       res.status(HttpStatus.UNAUTHORIZED).json({ error: 'You are not authorized to perform this operation!' });
  //     } else {
  //       User.where( 'id', decoded.id ).fetch().then((user) => {
  //         if (!user) {
  //           res.status(HttpStatus.NOT_FOUND).json({ error: 'No such user' });
  //         } else {
  //           req.currentUser = user;
  //           next();
  //         }
  //       });
  //     }
  //   });
  // } else {
  //   res.status(HttpStatus.FORBIDDEN).json({
  //     error: 'No token provided',
  //   });
  // }
};
