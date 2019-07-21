import { Response } from 'express';
import IRequest from './IRequest';

export default interface IController {
  (req: IRequest, res: Response): void;
}
