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
exports.AuthorizationGuard = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const express_jwt_1 = require("express-jwt");
const jwks_rsa_1 = require("jwks-rsa");
const node_util_1 = require("node:util");
let AuthorizationGuard = class AuthorizationGuard {
    constructor(configService) {
        var _a, _b;
        this.configService = configService;
        this.AUTH0_AUDIENCE = (_a = this.configService.get('AUTH0_AUDIENCE')) !== null && _a !== void 0 ? _a : '';
        this.AUTH0_DOMAIN = (_b = this.configService.get('AUTH0_DOMAIN')) !== null && _b !== void 0 ? _b : '';
    }
    async canActivate(context) {
        const httpContext = context.switchToHttp();
        const req = httpContext.getRequest();
        const res = httpContext.getResponse();
        const checkJWT = (0, node_util_1.promisify)((0, express_jwt_1.default)({
            secret: (0, jwks_rsa_1.expressJwtSecret)({
                cache: true,
                rateLimit: true,
                jwksRequestsPerMinute: 5,
                jwksUri: `${this.AUTH0_DOMAIN}.well-known/jwks.json`,
            }),
            audience: this.AUTH0_AUDIENCE,
            issuer: this.AUTH0_DOMAIN,
            algorithms: ['RS256'],
        }));
        try {
            await checkJWT(req, res);
            return true;
        }
        catch (err) {
            throw new common_1.UnauthorizedException(err);
        }
        return true;
    }
};
AuthorizationGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], AuthorizationGuard);
exports.AuthorizationGuard = AuthorizationGuard;
//# sourceMappingURL=authorization.guard.js.map