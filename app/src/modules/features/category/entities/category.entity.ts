import { BaseEntity } from '@common/entities';
import { TransactionEntity } from '@features/transactions/entities';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'categories' })
export class CategoryEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column({ nullable: true })
    userId?: string;

    @OneToMany(
        () => TransactionEntity,
        (transaction) => transaction.category
    )
    transactions!: TransactionEntity[];
}
