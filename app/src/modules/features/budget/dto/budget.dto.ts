import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class BudgetDto {
    @ApiProperty({
        description: 'Идентификатор пользователя в базе',
        example: 1_001,
        type: Number,
    })
    @Expose()
    id!: number;

    @ApiProperty({
        description: 'Глобальный идентификатор пользователя',
        example: '6513f5ad8c1c3b76396f68bb',
        type: String,
    })
    @Expose()
    userId!: string;

    @ApiPropertyOptional({
        description: 'Название бюджета',
        example: 'Бюджет на продукты',
        type: String,
    })
    @Expose()
    name?: string;

    @ApiProperty({
        description: 'Сумма бюджета',
        example: 100_000,
        type: Number,
    })
    @Expose()
    amount!: number;

    @ApiProperty({
        description: 'Время создания бюджета в формате ISO 8601',
        example: '2024-10-28T12:49:56.198Z',
        type: String,
    })
    @Expose()
    createdAt!: string;

    @ApiProperty({
        description: 'Время последнего изменения в формате ISO 8601',
        example: '2024-10-28T12:49:56.198Z',
        type: String,
    })
    @Expose()
    updatedAt!: string;

    @ApiPropertyOptional({
        description: 'Время удаления в формате ISO 8601',
        example: '2024-10-28T12:49:56.198Z',
        type: String,
    })
    @Expose()
    deletedAt?: string;
}
