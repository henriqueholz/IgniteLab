import { PrismaService } from '../database/prisma/prisma.service';
interface CreatePurchaseParams {
    customerId: string;
    productId: string;
}
export declare class PurchasesService {
    private prisma;
    constructor(prisma: PrismaService);
    listAllPurchases(): import(".prisma/client").PrismaPromise<import(".prisma/client").Purchase[]>;
    createPurchase({ customerId, productId }: CreatePurchaseParams): Promise<import(".prisma/client").Purchase>;
}
export {};
