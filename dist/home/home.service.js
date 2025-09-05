"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeService = void 0;
const common_1 = require("@nestjs/common");
let HomeService = class HomeService {
    getHomeData() {
        return {
            title: 'Welcome to NestJS on DigitalOcean!',
            message: 'Your secure and scalable NestJS application is running successfully.',
            features: [
                'TypeScript Support',
                'NestJS Framework',
                'Health Monitoring',
                'Rate Limiting',
                'Security Headers',
                'Auto-scaling Ready',
                'Docker Support',
            ],
            timestamp: new Date().toISOString(),
            environment: process.env.NODE_ENV || 'development',
        };
    }
    getRandomData() {
        const randomId = Math.random().toString(36).substring(7);
        const randomNumber = Math.floor(Math.random() * 1000);
        return {
            title: 'Random Data Generator',
            randomId,
            randomNumber,
            timestamp: new Date().toISOString(),
            message: 'This is a random data endpoint for testing purposes.',
        };
    }
};
exports.HomeService = HomeService;
exports.HomeService = HomeService = __decorate([
    (0, common_1.Injectable)()
], HomeService);
//# sourceMappingURL=home.service.js.map