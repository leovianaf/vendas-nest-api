import { userEntityMock } from '../../user/__mocks__/user.mock';
import { cityMock } from '../../city/__mocks__/city.mock';
import { AddressEntity } from '../entities/address.entity';

export const addressMock: AddressEntity = {
  id: 1,
  complement: 'hahahatromdle',
  numberAddress: 321,
  cep: '52178345',
  cityId: cityMock.id,
  userId: userEntityMock.id,
  createdAt: new Date(),
  updatedAt: new Date(),
};
