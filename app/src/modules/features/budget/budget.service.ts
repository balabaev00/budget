import { Injectable } from '@nestjs/common';

import { BudgetRepository } from './budget.repository';
import { BudgetDto, CreateBudgetDto } from './dto';
import { BudgetMapper } from './mappers';

@Injectable()
export class BudgetService {
    constructor(
        private readonly budgetRepository: BudgetRepository,
        private readonly mapper: BudgetMapper,
    ) { }

    async create(budget: CreateBudgetDto): Promise<BudgetDto> {
        const entity = await this.budgetRepository.create(budget);

        return this.mapper.toDto(entity);
    }
}