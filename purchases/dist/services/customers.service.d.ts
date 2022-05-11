import { PrismaService } from '../database/prisma/prisma.service';
interface CreateCustomerParams {
    authUserId: string;
}
export declare class CustomersService {
    private prisma;
    constructor(prisma: PrismaService);
    getCustomerByAuthUserId(authUserId: string): import(".prisma/client").Prisma.Prisma__CustomerClient<import(".prisma/client").Customer>;
    createCustomer({ authUserId }: CreateCustomerParams): Promise<import(".prisma/client").Customer>;
}
export {};
