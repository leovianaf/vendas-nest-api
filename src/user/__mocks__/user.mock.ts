import { UserEntity } from '../entities/user.entity';
import { UserType } from '../enum/user-type.enum';

export const userEntityMock: UserEntity = {
  id: 1,
  name: 'User Mock',
  email: 'emailmock@email.com',
  phone: '123456789',
  cpf: '12345678910',
  password: '$2b$10$IZFsElnbI26oCl0F8ngyAuV9Qd7Nvhhk/5SeYPtdUa/2MbJjDpbb6',
  typeUser: UserType.User,
  createdAt: new Date(),
  updatedAt: new Date(),
};
