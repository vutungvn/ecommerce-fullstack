import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service.js';

@Injectable()
export class AppService {
  constructor(private readonly prismaService: PrismaService) {}

  async getHello() {
    return 'Hello World!';
  }
}
