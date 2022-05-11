import { CustomersService } from '../../../services/customers.service';
import { ProductsService } from '../../../services/product.service';
import { PurchasesService } from '../../../services/purchases.service';
import { AuthUser } from '../../auth/current-user';
import { CreatePurchaseInput } from '../inputs/create-purchase-input';
import { Purchase } from '../models/purchase';
export declare class PurchasesResolver {
    private purchasesService;
    private productsService;
    private customersService;
    constructor(purchasesService: PurchasesService, productsService: ProductsService, customersService: CustomersService);
    purchases(): import(".prisma/client").PrismaPromise<import(".prisma/client").Purchase[]>;
    product(purchase: Purchase): import(".prisma/client").Prisma.Prisma__ProductClient<import(".prisma/client").Product>;
    createPurchase(data: CreatePurchaseInput, user: AuthUser): Promise<import(".prisma/client").Purchase>;
}
