import { HealthCheckService, MemoryHealthIndicator, DiskHealthIndicator, HttpHealthIndicator } from '@nestjs/terminus';
import { HealthService } from './health.service';
export declare class HealthController {
    private health;
    private memory;
    private disk;
    private http;
    private healthService;
    constructor(health: HealthCheckService, memory: MemoryHealthIndicator, disk: DiskHealthIndicator, http: HttpHealthIndicator, healthService: HealthService);
    check(): Promise<import("@nestjs/terminus").HealthCheckResult>;
    readiness(): Promise<import("@nestjs/terminus").HealthCheckResult>;
    liveness(): Promise<import("@nestjs/terminus").HealthCheckResult>;
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
