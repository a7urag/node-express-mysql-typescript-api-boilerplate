// @ts-ignore
import * as typeorm from 'typeorm';

export const mockQueryBuilder = (returnValue: any) => {
  // @ts-ignore
  typeorm.createQueryBuilder = jest.fn().mockReturnValue({
    select: jest.fn().mockReturnThis(),
    from: jest.fn().mockReturnThis(),
    leftJoinAndSelect: jest.fn().mockReturnThis(),
    where: jest.fn().mockReturnThis(),
    orderBy: jest.fn().mockReturnThis(),
    getOne: jest.fn().mockResolvedValue(returnValue),
  });

  return typeorm.createQueryBuilder;
};

export const mockRepository = (returnValue: any) => {
  // @ts-ignore
  typeorm.getRepository = jest.fn().mockReturnValue({
    findOne: jest.fn().mockReturnValue(returnValue),
    save: jest.fn().mockReturnValue(returnValue),
  });

  return typeorm.getRepository;
};
