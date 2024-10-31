import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';

import { CreateTransactionDto } from './dto';
import { TransactionEntity } from './entities';
import { FindTransactionParams } from './types';

@Injectable()
export class TransactionRepository {
    constructor(
        @InjectEntityManager()
        private readonly em: EntityManager,
    ) { }

    save(dto: CreateTransactionDto): Promise<TransactionEntity> {
        const entity = this.em.create(
            TransactionEntity,
            dto,
        );

        return this.em.save(entity);
    }

    findAll({ userId }: FindTransactionParams = {}): Promise<TransactionEntity[]> {
        return this.em.find(TransactionEntity, { where: { userId: userId } });
    }
}
