import { BaseDto } from '@common/dto';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class BudgetDto extends BaseDto {
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
}
