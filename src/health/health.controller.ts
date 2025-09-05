import { Controller, Get } from '@nestjs/common';
import {
  HealthCheckService,
  HealthCheck,
  MemoryHealthIndicator,
  DiskHealthIndicator,
  HttpHealthIndicator,
} from '@nestjs/terminus';
import { HealthService } from './health.service';

@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private memory: MemoryHealthIndicator,
    private disk: DiskHealthIndicator,
    private http: HttpHealthIndicator,
    private healthService: HealthService,
  ) {}

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      // Basic application health
      () => this.healthService.getBasicHealth(),
      
      // Memory health check
      () => this.memory.checkHeap('memory_heap', 150 * 1024 * 1024),
      () => this.memory.checkRSS('memory_rss', 150 * 1024 * 1024),
      
      // Disk health check
      () => this.disk.checkStorage('storage', { 
        path: '/', 
        thresholdPercent: 0.9 
      }),
      
      // Database health check (if applicable)
      // () => this.http.pingCheck('database', 'http://localhost:5432'),
      
      // External service health check (if applicable)
      // () => this.http.pingCheck('external_api', 'https://api.example.com/health'),
      // We will use above code when implement DB
    ]);
  }

  @Get('ready')
  @HealthCheck()
  readiness() {
    return this.health.check([
      () => this.healthService.getReadinessCheck(),
    ]);
  }

  @Get('live')
  @HealthCheck()
  liveness() {
    return this.health.check([
      () => this.healthService.getLivenessCheck(),
    ]);
  }

  @Get('detailed')
  getDetailedHealth() {
    return this.healthService.getDetailedHealth();
  }
}
