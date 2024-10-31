import { Injectable, NotFoundException } from '@nestjs/common';

import { CategoryRepository } from './category.repository';
import { CategoryDto } from './dto';
import { CategoryMapper } from './mappers';

@Injectable()
export class CategoryService {
    constructor(
        private readonly repository: CategoryRepository,
        private readonly mapper: CategoryMapper,
    ) { }

    findAll(): Promise<CategoryDto[]> {
        return this.repository
            .findAll()
            .then((entities => entities.map(entity => this.mapper.toDto(entity))));
    }

    async findOne(id: number): Promise<CategoryDto> {
        const category = await this.repository.findOneById(id);

        if (!category) {
            throw new NotFoundException(`Категория с идентификатором ${id} не найдена`);
        }

        return this.mapper.toDto(category);
    }

}
