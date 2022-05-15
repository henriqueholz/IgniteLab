"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const microservices_1 = require("@nestjs/microservices");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.connectMicroservice({
        transport: microservices_1.Transport.KAFKA,
        options: {
            client: {
                clientId: 'classroom',
                brokers: ['localhost:29092'],
            },
        },
    });
    app.startAllMicroservices().then(() => {
        console.log('[Classroom] microservice server running');
    });
    await app.listen(3334).then(() => {
        console.log('[Classroom] HTTP server running');
    });
}
bootstrap();
//# sourceMappingURL=main.js.map