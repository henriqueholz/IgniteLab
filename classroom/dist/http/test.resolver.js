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
exports.TestResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const prisma_service_1 = require("../database/prisma/prisma.service");
const authorization_guard_1 = require("./auth/authorization.guard");
let TestResolver = class TestResolver {
    constructor(prisma) {
        this.prisma = prisma;
    }
    hello() {
        return 'hello world';
    }
};
__decorate([
    (0, graphql_1.Query)(() => String),
    (0, common_1.UseGuards)(authorization_guard_1.AuthorizationGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TestResolver.prototype, "hello", null);
TestResolver = __decorate([
    (0, graphql_1.Resolver)('test'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TestResolver);
exports.TestResolver = TestResolver;
//# sourceMappingURL=test.resolver.js.map