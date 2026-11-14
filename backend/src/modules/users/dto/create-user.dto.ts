import { Role } from '../../../generated/prisma/client.js';

export class CreateUserDto {
  email: string;
  password: string;
  name: string;
  role?: Role;
}
