import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';

import { CategoryEntity } from './entities';

@Injectable()
export class CategoryRepository {
    constructor(
        @InjectEntityManager()
        private readonly em: EntityManager,
    ) { }

    findAll(): Promise<CategoryEntity[]> {
        return this.em.find(CategoryEntity);
    }

    findOneById(id: number): Promise<CategoryEntity | null> {
        return this.em.findOne(CategoryEntity, { where: { id } });
    }
}
