import { CustomersService } from '../../../services/customers.service';
import { AuthUser } from '../../auth/current-user';
export declare class CustomersResolver {
    private customerService;
    constructor(customerService: CustomersService);
    me(user: AuthUser): import(".prisma/client").Prisma.Prisma__CustomerClient<import(".prisma/client").Customer>;
}
