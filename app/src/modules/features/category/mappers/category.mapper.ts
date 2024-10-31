import { IMapper } from '@common/interfaces';
import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';

import { CategoryDto } from '../dto';
import { CategoryEntity } from '../entities';

@Injectable()
export class CategoryMapper implements IMapper<CategoryEntity, CategoryDto> {
    toDto(entity: CategoryEntity): CategoryDto {
        return plainToInstance(
            CategoryDto,
            {
                id: entity.id,
                name: entity.name,
                userId: entity.userId,
                createdAt: entity.createdAt.toISOString(),
                updatedAt: entity.updatedAt.toISOString(),
                deletedAt: entity.deletedAt?.toISOString(),
            }
        );
    }
}
