import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma/prisma.service';
import slugify from 'slugify';

interface CreateProductParams {
  title: string;
}

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  listAllProducts() {
    return this.prisma.product.findMany();
  }

  getProductById(id: string) {
    return this.prisma.product.findUnique({
      where: {
        id,
      },
    });
  }

  async createProduct({ title }: CreateProductParams) {
    const slug = slugify(title, {
      lower: true,
    });
    const productWithSameSlugh = await this.prisma.product.findUnique({
      where: {
        slug,
      },
    });

    if (productWithSameSlugh) {
      throw new Error('Another product with same slug already exists.');
    }

    return await this.prisma.product.create({
      data: {
        title,
        slug,
      },
    });

    return this.prisma.product.findMany();
  }
}
