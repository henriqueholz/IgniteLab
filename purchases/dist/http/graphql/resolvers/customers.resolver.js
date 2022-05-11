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
exports.CustomersResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const customers_service_1 = require("../../../services/customers.service");
const authorization_guard_1 = require("../../auth/authorization.guard");
const current_user_1 = require("../../auth/current-user");
const customer_1 = require("../models/customer");
let CustomersResolver = class CustomersResolver {
    constructor(customerService) {
        this.customerService = customerService;
    }
    me(user) {
        return this.customerService.getCustomerByAuthUserId(user.sub);
    }
};
__decorate([
    (0, common_1.UseGuards)(authorization_guard_1.AuthorizationGuard),
    (0, graphql_1.Query)(() => customer_1.Customer),
    __param(0, (0, current_user_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CustomersResolver.prototype, "me", null);
CustomersResolver = __decorate([
    (0, graphql_1.Resolver)(() => customer_1.Customer),
    __metadata("design:paramtypes", [customers_service_1.CustomersService])
], CustomersResolver);
exports.CustomersResolver = CustomersResolver;
//# sourceMappingURL=customers.resolver.js.map