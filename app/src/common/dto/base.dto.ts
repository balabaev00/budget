import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class BaseDto {
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
