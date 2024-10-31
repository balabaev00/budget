import { IMapper } from '@common/interfaces';
import { CategoryMapper } from '@features/category/mappers';
import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';

import { TransactionDto } from '../dto';
import { TransactionEntity } from '../entities';

@Injectable()
export class TransactionMapper implements IMapper<TransactionEntity, TransactionDto> {
    constructor(
        private readonly categoryMapper: CategoryMapper
    ) { }

    toDto(entity: TransactionEntity): TransactionDto {
        return plainToInstance(
            TransactionDto,
            {
                id: entity.id,
                description: entity.description,
                amount: entity.amount,
                userId: entity.userId,
                categoryId: entity.categoryId,
                category: entity.category
                    ? this.categoryMapper.toDto(entity.category)
                    : undefined,
                createdAt: entity.createdAt.toISOString(),
                updatedAt: entity.updatedAt.toISOString(),
                deletedAt: entity.deletedAt?.toISOString(),
            },
        );
    }
}
