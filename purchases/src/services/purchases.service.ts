import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma/prisma.service';
import slugify from 'slugify';

@Injectable()
export class PurchasesService {
  constructor(private prisma: PrismaService) {}

  listAllPurchases() {
    return this.prisma.purchase.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}
