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
  const user = await InstanceModel.findById(_id);

  if (!user) return false;

  return user;
};

export const updateInstanceById = async (
  _id: string,
  updateInstancePayload: UpdateInstance,
) => {
  const updatedUser = await InstanceModel.findByIdAndUpdate(
    _id,
    updateInstancePayload,
    {
      new: true,
    },
  );

  if (!updatedUser) return false;

  return updatedUser;
};

export const deleteInstanceById = async (_id: string) => {
  const deletedUser = await InstanceModel.findByIdAndUpdate(_id, {
    deleted: true,
    deletedAt: new Date().toISOString(),
  });

  if (!deletedUser || deletedUser.deleted) return false;

  return deletedUser;
};
