import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';

import { CreateBudgetDto } from './dto';
import { BudgetEntity } from './entities';

@Injectable()
export class BudgetRepository {
    constructor(
        @InjectEntityManager() private readonly em: EntityManager,
    ) { }

    create(budget: CreateBudgetDto): Promise<BudgetEntity> {
        const entity = this.em.create(BudgetEntity, {
            amount: budget.amount,
            userId: budget.userId,
            name: budget.name,
        });

        return this.em.save(entity);
    }

    findAll(userId: string): Promise<BudgetEntity[]> {
        return this.em.find(BudgetEntity, { where: { userId } });
    }
}
