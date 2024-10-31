import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CategoryService } from './category.service';
import { CategoryDto } from './dto';

@ApiTags('Категории транзакции')
@Controller({
    path: 'categories',
    version: '1',
})
export class CategoryController {
    constructor(private readonly service: CategoryService) { }

    @Get()
    findAll(): Promise<CategoryDto[]> {
        return this.service.findAll();
    }
}
