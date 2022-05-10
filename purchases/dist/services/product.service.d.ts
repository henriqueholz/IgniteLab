import { PrismaService } from '../database/prisma/prisma.service';
interface CreateProductParams {
    title: string;
}
export declare class ProductsService {
    private prisma;
    constructor(prisma: PrismaService);
    listAllProducts(): import(".prisma/client").PrismaPromise<import(".prisma/client").Product[]>;
    createProduct({ title }: CreateProductParams): Promise<import(".prisma/client").Product | import(".prisma/client").Product[]>;
}
export {};
