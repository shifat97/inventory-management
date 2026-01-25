import { Request, Response } from 'express';

import * as instanceService from './service';

export const createInstance = async (req: Request, res: Response) => {
  const newInstance = await instanceService.createInstance(req.body);
  res.status(201).json(newInstance);
};

export const getInstances = async (_req: Request, res: Response) => {
  const instances = await instanceService.getInstances();
  res.status(200).json(instances);
};
