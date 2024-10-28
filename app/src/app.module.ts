import { createLoggerConfig } from '@configs/logger.config';
import { createPostgresConfig } from '@configs/postgres.config';
import { BudgetModule } from '@features/budget/budget.module';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HealthModule } from '@system/health/health.module';
import { MetricModule } from '@system/metric/metric.module';
import { Logger, LoggerModule } from 'nestjs-pino';

@Module({
    imports: [
        ConfigModule.forRoot(
            {
                ignoreEnvFile: process.env.STAGE !== 'local',
                expandVariables: true,
                isGlobal: true,
            }
        ),
        LoggerModule.forRootAsync({
            useFactory: createLoggerConfig,
            inject: [ConfigService],
        }),
        TypeOrmModule.forRootAsync({
            inject: [ConfigService, Logger],
            useFactory: createPostgresConfig,
        }),
        HealthModule,
        MetricModule,
        BudgetModule,
    ],
})
export class AppModule { }
