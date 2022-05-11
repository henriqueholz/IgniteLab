"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchasesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const product_service_1 = require("../../../services/product.service");
const purchases_service_1 = require("../../../services/purchases.service");
const purchase_1 = require("../models/purchase");
let PurchasesResolver = class PurchasesResolver {
    constructor(purchasesService, productsService) {
        this.purchasesService = purchasesService;
        this.productsService = productsService;
    }
    purchases() {
        return this.purchasesService.listAllPurchases();
    }
    product(purchase) {
        return this.productsService.getProductById(purchase.productId);
    }
};
__decorate([
    (0, graphql_1.Query)(() => [purchase_1.Purchase]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PurchasesResolver.prototype, "purchases", null);
__decorate([
    (0, graphql_1.ResolveField)(),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [purchase_1.Purchase]),
    __metadata("design:returntype", void 0)
], PurchasesResolver.prototype, "product", null);
PurchasesResolver = __decorate([
    (0, graphql_1.Resolver)(() => purchase_1.Purchase),
    __metadata("design:paramtypes", [purchases_service_1.PurchasesService,
        product_service_1.ProductsService])
], PurchasesResolver);
exports.PurchasesResolver = PurchasesResolver;
//# sourceMappingURL=purchases.resolver.js.map