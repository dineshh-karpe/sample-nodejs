import { HealthIndicatorResult } from '@nestjs/terminus';
export declare class HealthService {
    getBasicHealth(): HealthIndicatorResult;
    getReadinessCheck(): HealthIndicatorResult;
    getLivenessCheck(): HealthIndicatorResult;
    getDetailedHealth(): {
        status: string;
        timestamp: string;
        uptime: number;
        environment: string;
        version: string;
        memory: {
            rss: string;
            heapTotal: string;
            heapUsed: string;
            external: string;
        };
        cpu: {
            user: number;
            system: number;
        };
        platform: {
            node: string;
            platform: NodeJS.Platform;
            arch: NodeJS.Architecture;
        };
        pid: number;
    };
}
