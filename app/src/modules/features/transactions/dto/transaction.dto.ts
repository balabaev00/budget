import { BaseDto } from '@common/dto';
import { CategoryDto } from '@features/category/dto';
import { Expose } from 'class-transformer';

export class TransactionDto extends BaseDto {
    @Expose()
    id!: number;

    @Expose()
    description?: string;

    @Expose()
    amount!: number;

    @Expose()
    userId!: string;

    @Expose()
    categoryId!: number;

    @Expose()
    category?: CategoryDto;
}
