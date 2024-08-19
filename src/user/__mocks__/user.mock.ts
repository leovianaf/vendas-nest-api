import { UserEntity } from '../entities/user.entity';
import { UserType } from '../enum/user-type.enum';

export const userEntityMock: UserEntity = {
  id: 1,
  name: 'User Mock',
  email: 'emailmock@email.com',
  phone: '123456789',
  cpf: '12345678910',
  password: 'passwordMock',
  typeUser: UserType.User,
  createdAt: new Date(),
  updatedAt: new Date(),
};
