import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BudgetRepository } from './budget.repository';
import { BudgetService } from './budget.service';
import { BudgetEntity } from './entity';
import { BudgetMapper } from './mappers';

@Module({
    imports: [
        TypeOrmModule.forFeature([BudgetEntity]),
    ],
    providers: [
        BudgetService,
        BudgetRepository,
        BudgetMapper,
    ],
})
export class BudgetModule { }
