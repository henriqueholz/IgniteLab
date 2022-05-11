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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Purchase = void 0;
const graphql_1 = require("@nestjs/graphql");
const product_1 = require("./product");
var PurchaseStatus;
(function (PurchaseStatus) {
    PurchaseStatus["PENDING"] = "PENDING";
    PurchaseStatus["APPROVED"] = "APPROVED";
    PurchaseStatus["FAILED"] = "FAILED";
})(PurchaseStatus || (PurchaseStatus = {}));
(0, graphql_1.registerEnumType)(PurchaseStatus, {
    name: 'PurchaseStatus',
    description: 'Available purchase statuses',
});
let Purchase = class Purchase {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", String)
], Purchase.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => PurchaseStatus),
    __metadata("design:type", String)
], Purchase.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date),
    __metadata("design:type", Date)
], Purchase.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => product_1.Product),
    __metadata("design:type", product_1.Product)
], Purchase.prototype, "product", void 0);
Purchase = __decorate([
    (0, graphql_1.ObjectType)()
], Purchase);
exports.Purchase = Purchase;
//# sourceMappingURL=purchase.js.map