import { CreateInstance, UpdateInstance } from '@/types';
import { InstanceModel } from '@/modules/instance';

export const createInstance = async (instancePayload: CreateInstance) => {
  const newInstance = await InstanceModel.create(instancePayload);
  return newInstance;
};

export const getInstances = async () => {
  return await InstanceModel.find();
};

export const getInstancesById = async (_id: string) => {
  const instance = await InstanceModel.findById(_id);

  if (!instance) return false;

  return instance;
};

export const updateInstanceById = async (
  _id: string,
  updateInstancePayload: UpdateInstance,
) => {
  const updatedInstance = await InstanceModel.findByIdAndUpdate(
    _id,
    updateInstancePayload,
    {
      new: true,
    },
  );

  if (!updatedInstance) return false;

  return updatedInstance;
};

export const deleteInstanceById = async (_id: string) => {
  const deletedInstance = await InstanceModel.findByIdAndUpdate(_id, {
    deleted: true,
    deletedAt: new Date().toISOString(),
  });

  if (!deletedInstance || deletedInstance.deleted) return false;

  return deletedInstance;
};

export const restoreInstance = async (_id: string) => {
  const restoredInstance = await InstanceModel.findById(_id);

  if (!restoredInstance) return false;

  return await InstanceModel.findByIdAndUpdate(
    _id,
    {
      deleted: false,
      deletedAt: null,
    },
    { new: true },
  );
};
