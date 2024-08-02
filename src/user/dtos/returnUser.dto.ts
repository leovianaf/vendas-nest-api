import { UserEntity } from '../entities/user.entity';

export class ReturnUserDto {
  id: number;
  name: string;
  email: string;
  phone: string;
  cpf: string;

  constructor(userEntitiy: UserEntity) {
    this.id = userEntitiy.id;
    this.name = userEntitiy.name;
    this.email = userEntitiy.email;
    this.phone = userEntitiy.phone;
    this.cpf = userEntitiy.cpf;
  }
}
