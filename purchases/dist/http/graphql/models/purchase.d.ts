import { Product } from './product';
declare enum PurchaseStatus {
    PENDING = "PENDING",
    APPROVED = "APPROVED",
    FAILED = "FAILED"
}
export declare class Purchase {
    id: string;
    status: PurchaseStatus;
    createdAt: Date;
    product: Product;
    productId: string;
}
export {};
