import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';
import { TerminusModule } from '@nestjs/terminus';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthController } from './health/health.controller';
import { HealthService } from './health/health.service';
import { HomeController } from './home/home.controller';
import { HomeService } from './home/home.service';

@Module({
  imports: [
    // Rate limiting configuration
    ThrottlerModule.forRoot([
      {
        ttl: 60000, // 1 minute
        limit: 100, // 100 requests per minute
      },
    ]),
    // Health check module
    TerminusModule,
  ],
  controllers: [
    AppController,
    HealthController,
    HomeController,
  ],
  providers: [
    AppService,
    HealthService,
    HomeService,
  ],
})
export class AppModule {}
