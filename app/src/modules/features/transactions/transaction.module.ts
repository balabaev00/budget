import { CategoryModule } from '@features/category/category.module';
import { Module } from '@nestjs/common';

import { TransactionMapper } from './mappers';
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';
import { TransactionRepository } from './transcation.repository';

@Module({
    imports: [CategoryModule],
    controllers: [TransactionController],
    providers: [
        TransactionService,
        TransactionRepository,
        TransactionMapper,
    ],
})
export class TransactionModule { }
