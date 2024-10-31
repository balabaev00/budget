import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

import { CreateTransactionDto } from './dto/create-transaction.dto';
import { TransactionDto } from './dto';
import { TransactionService } from './transaction.service';

@ApiTags('Транзакции')
@Controller({
    path: 'transactions',
    version: '1',
})
export class TransactionController {
    constructor(private readonly transactionService: TransactionService) { }

    @Post()
    create(@Body() body: CreateTransactionDto): Promise<TransactionDto> {
        return this.transactionService.create(body);
    }

    @Get()
    @ApiQuery({
        name: 'userId',
        required: false,
        type: String,
    })
    findAll(
        @Query('userId') userId?: string,
    ): Promise<TransactionDto[]> {
        return this.transactionService.findAll({ userId });
    }
}
