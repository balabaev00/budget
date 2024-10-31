import { BaseEntity } from '@common/entities';
import { CategoryEntity } from '@features/category/entities';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'transactions' })
export class TransactionEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ nullable: true })
    description?: string;

    @Column()
    amount!: number;

    @Column()
    userId!: string;

    @Column()
    categoryId!: number;

    @ManyToOne(
        () => CategoryEntity,
        (category) => category.transactions,
    )
    category!: CategoryEntity;
}
