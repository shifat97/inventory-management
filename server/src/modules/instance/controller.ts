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

export const getInstancesById = async (req: Request, res: Response) => {
  const instance = await instanceService.getInstancesById(req.params.id);
  res.status(200).json(instance);
};

export const updateInstanceById = async (req: Request, res: Response) => {
  const updatedInstance = await instanceService.updateInstanceById(
    req.params.id,
    req.body,
  );
  res.status(200).json({
    instance: updatedInstance,
    message: 'Instance updated successfully',
  });
};

export const deleteInstanceById = async (req: Request, res: Response) => {
  await instanceService.deleteInstanceById(req.params.id);
  res.status(200).json({ message: 'Instance deleted successful' });
};
