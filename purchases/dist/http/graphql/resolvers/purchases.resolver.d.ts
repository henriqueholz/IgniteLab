import { ProductsService } from '../../../services/product.service';
import { PurchasesService } from '../../../services/purchases.service';
import { Purchase } from '../models/purchase';
export declare class PurchasesResolver {
    private purchasesService;
    private productsService;
    constructor(purchasesService: PurchasesService, productsService: ProductsService);
    purchases(): import(".prisma/client").PrismaPromise<import(".prisma/client").Purchase[]>;
    product(purchase: Purchase): import(".prisma/client").Prisma.Prisma__ProductClient<import(".prisma/client").Product>;
}
