import { IMapper } from '@common/interfaces';
import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';

import { BudgetDto } from '../dto';
import { BudgetEntity } from '../entity';

@Injectable()
export class BudgetMapper implements IMapper<BudgetEntity, BudgetDto> {
    toDto(entity: BudgetEntity): BudgetDto {
        return plainToInstance(
            BudgetDto,
            {
                userId: entity.userId,
                name: entity.name,
                amount: entity.amount,
                createdAt: entity.createdAt.toISOString(),
                updatedAt: entity.updatedAt.toISOString(),
                deletedAt: entity.deletedAt?.toISOString(),
            },
        );
    }
}
