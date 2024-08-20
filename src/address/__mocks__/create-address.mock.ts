import { CreateAddressDto } from '../dtos/createAddress.dto';
import { addressMock } from './address.mock';

export const createAddressMock: CreateAddressDto = {
  complement: addressMock.complement,
  numberAddress: addressMock.numberAddress,
  cep: addressMock.cep,
  cityId: addressMock.cityId,
};
