import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BudgetController } from './budget.controller';
import { BudgetRepository } from './budget.repository';
import { BudgetService } from './budget.service';
import { BudgetEntity } from './entities';
import { BudgetMapper } from './mappers';

@Module({
    imports: [
        TypeOrmModule.forFeature([BudgetEntity]),
    ],
    controllers: [BudgetController],
    providers: [
        BudgetService,
        BudgetRepository,
        BudgetMapper,
    ],
})
export class BudgetModule { }
