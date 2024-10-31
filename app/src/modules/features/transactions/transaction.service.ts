import { CategoryService } from '@features/category/category.service';
import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';

import { CreateTransactionDto, TransactionDto } from './dto';
import { TransactionMapper } from './mappers';
import { TransactionRepository } from './transcation.repository';
import { FindTransactionParams } from './types';

@Injectable()
export class TransactionService {
    constructor(
        private readonly repository: TransactionRepository,
        private readonly mapper: TransactionMapper,
        private readonly categoryService: CategoryService,
    ) { }

    async create(dto: CreateTransactionDto): Promise<TransactionDto> {
        try {
            await this.categoryService.findOne(dto.categoryId);

            return this.repository.save(dto)
                .then((entity => this.mapper.toDto(entity)));
        } catch (e) {
            if (e instanceof NotFoundException) {
                throw e;
            }

            throw new InternalServerErrorException('Не удалось создать транзакцию. Попробуйте позже');
        }
    }

    findAll(params: FindTransactionParams): Promise<TransactionDto[]> {
        return this.repository
            .findAll(params)
            .then((entities => entities.map(entity => this.mapper.toDto(entity))));
    }
}
