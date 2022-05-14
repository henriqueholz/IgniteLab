"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const database_module_1 = require("../database/database.module");
const graphql_1 = require("@nestjs/graphql");
const path_1 = __importDefault(require("path"));
const apollo_1 = require("@nestjs/apollo");
const courses_resolver_1 = require("./graphql/resolvers/courses.resolver");
const students_resolver_1 = require("./graphql/resolvers/students.resolver");
const courses_service_1 = require("./graphql/services/courses.service");
const enrollments_service_1 = require("./graphql/services/enrollments.service");
const students_service_1 = require("./graphql/services/students.service");
const enrollments_resolver_1 = require("./graphql/resolvers/enrollments.resolver");
let HttpModule = class HttpModule {
};
HttpModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            database_module_1.DatabaseModule,
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                autoSchemaFile: path_1.default.resolve(process.cwd(), 'src/schema.gql'),
            }),
        ],
        providers: [
            courses_resolver_1.CoursesResolver,
            enrollments_resolver_1.EnrollmentsResolver,
            students_resolver_1.StudentsResolver,
            courses_service_1.CoursesService,
            enrollments_service_1.EnrollmentsService,
            students_service_1.StudentsService,
        ],
    })
], HttpModule);
exports.HttpModule = HttpModule;
//# sourceMappingURL=http.module.js.map