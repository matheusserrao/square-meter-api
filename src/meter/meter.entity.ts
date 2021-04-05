import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('meter')
export class MeterEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'real', nullable: false })
    value: number;

    @Column({ nullable: false, default: true})
    isActive: boolean;

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date;

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;
}