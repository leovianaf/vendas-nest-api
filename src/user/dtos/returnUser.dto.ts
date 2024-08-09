import { ReturnAddressDto } from 'src/address/dtos/returnAddress.dto';
import { UserEntity } from '../entities/user.entity';

export class ReturnUserDto {
  id: number;
  name: string;
  email: string;
  phone: string;
  cpf: string;
  addresses?: ReturnAddressDto[];

  constructor(userEntitiy: UserEntity) {
    this.id = userEntitiy.id;
    this.name = userEntitiy.name;
    this.email = userEntitiy.email;
    this.phone = userEntitiy.phone;
    this.cpf = userEntitiy.cpf;

    this.addresses = userEntitiy.addresses
      ? userEntitiy.addresses.map((address) => new ReturnAddressDto(address))
      : undefined;
  }
}
