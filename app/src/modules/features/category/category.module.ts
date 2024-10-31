import { Module } from '@nestjs/common';

import { CategoryController } from './category.controller';
import { CategoryRepository } from './category.repository';
import { CategoryService } from './category.service';
import { CategoryMapper } from './mappers';

@Module({
    controllers: [CategoryController],
    providers: [
        CategoryService,
        CategoryRepository,
        CategoryMapper,
    ],
    exports: [
        CategoryService,
        CategoryMapper,
    ],
})
export class CategoryModule { }
