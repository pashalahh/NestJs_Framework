import { Check, Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, type Relation } from "typeorm";
import { Order } from "../../orders/entities/order.entity.js";

@Entity({ name: 'payments' })
@Check('CHK_payments_amount_non_negative', '"amount" >= 0')
export class Payment {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    // orders (1) -> (1) payments.
    @OneToOne(() => Order, (order) => order.payment, {
    nullable: false,
    onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'order_id' })
    order: Relation<Order>; // Perbaikan: Gunakan Relation<Order>

    @Column({ name: 'order_id', type: 'uuid' })
    orderId: string;

    @Column({ name: 'payment_method', type: 'varchar', length: 50 })
    paymentMethod: string;

    @Column({
    type: 'decimal',
    precision: 12,
    scale: 2
    })
    amount: number;

    @Column({ type: 'varchar', length: 30 })
    status: string; // Perbaikan typo: sebelumnya "staus"

    @Column({ name: 'paid_at', type: 'timestamp', nullable: true })
    paidAt: Date | null;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;
}