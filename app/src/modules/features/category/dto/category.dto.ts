import { BaseDto } from '@common/dto';
import { Expose } from 'class-transformer';

export class CategoryDto extends BaseDto {
    @Expose()
    id!: number;

    @Expose()
    name!: string;

    @Expose()
    userId?: string;
}
