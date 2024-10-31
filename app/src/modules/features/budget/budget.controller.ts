import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

import { BudgetService } from './budget.service';
import { BudgetDto, CreateBudgetDto } from './dto';

@ApiTags('Бюджет')
@Controller({
    path: 'budgets',
    version: '1',
})
export class BudgetController {
    constructor(
        private readonly service: BudgetService,
    ) { }

    @Post()
    create(@Body() dto: CreateBudgetDto): Promise<BudgetDto> {
        return this.service.create(dto);
    }

    @Get()
    @ApiQuery({
        name: 'userId',
        required: true,
        type: String,
    })
    findAll(
        @Query('userId') userId: string,
    ): Promise<BudgetDto[]> {
        return this.service.findAll(userId);
    }
}
