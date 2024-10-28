import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsDefined, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateBudgetDto {
    @ApiProperty({
        description: 'Глобальный идентификатор пользователя',
        example: '6513f5ad8c1c3b76396f68bb',
        type: String,
    })
    @IsDefined()
    @IsString()
    @Expose()
    userId!: string;

    @ApiPropertyOptional({
        description: 'Название бюджета',
        example: 'Бюджет на продукты',
        type: String,
    })
    @IsOptional()
    @IsString()
    @Expose()
    name?: string;

    @ApiProperty({
        description: 'Сумма бюджета',
        example: 100_000,
        type: Number,
    })
    @IsDefined()
    @IsNumber()
    @Expose()
    amount!: number;
}
