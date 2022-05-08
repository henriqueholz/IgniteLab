import { PrismaService } from '../database/prisma/prisma.service';
export declare class TestResolver {
    private prisma;
    constructor(prisma: PrismaService);
    hello(): string;
}
