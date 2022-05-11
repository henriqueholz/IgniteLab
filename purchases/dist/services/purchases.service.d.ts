import { PrismaService } from '../database/prisma/prisma.service';
export declare class PurchasesService {
    private prisma;
    constructor(prisma: PrismaService);
    listAllPurchases(): import(".prisma/client").PrismaPromise<import(".prisma/client").Purchase[]>;
}
