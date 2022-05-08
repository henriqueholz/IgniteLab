import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from '../database/prisma/prisma.service';
import { AuthorizationGuard } from './auth/authorization.guard';

@Resolver('test')
export class TestResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => String)
  @UseGuards(AuthorizationGuard)
  hello() {
    return 'hello world';
  }
}
