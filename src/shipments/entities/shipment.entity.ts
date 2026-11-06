import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, type Relation, UpdateDateColumn } from "typeorm";
import { Order } from "../../orders/entities/order.entity.js";

@Entity({ name: 'shipments' })
export class Shipment {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    // orders (1) -> (1) shipments. OneToOne otomatis membuat constraint UNIQUE pada order_id.
    @OneToOne(() => Order, (order) => order.shipment, {
    nullable: false,
    onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'order_id' })
    order: Relation<Order>; // Perbaikan: Gunakan Relation<Order>

    @Column({ name: 'order_id', type: 'uuid' })
    orderId: string;

    @Column({ type: 'varchar', length: 100 })
    courier: string;

    @Column({ name: 'tracking_number', type: 'varchar', length: 100, nullable: true })
    trackingNumber: string | null;

    @Column({ type: 'varchar', length: 30})
    status: string;

    @Column({ name: 'shipped_at', type: 'timestamp', nullable: true })
    shippedAt: Date | null;

    @Column({ name: 'delivered_at', type: 'timestamp', nullable: true })
    deliveredAt: Date | null;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
}