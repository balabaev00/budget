import { BaseEntity } from '@common/entities';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'budgets' })
export class BudgetEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    userId!: string;

    @Column({ nullable: true })
    name?: string;

    @Column()
    amount!: number;
}
