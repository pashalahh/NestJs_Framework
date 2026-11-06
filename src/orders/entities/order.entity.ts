import { Check, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn,type Relation, UpdateDateColumn } from "typeorm";
import { Customer } from "../../customers/entities/customer.entity.js";
import { OrderItem } from "../../order_items/entities/order_item.entity.js";
import { Payment } from "../../payments/entities/payment.entity.js";
import { Shipment } from "../../shipments/entities/shipment.entity.js";

@Entity({ name: 'orders' })
@Check('CHK_orders_total_amount_non_negative', '"total_amount" >= 0')
export class Order {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    // customers (1) -> (N) orders
    @ManyToOne(() => Customer, (customer) => customer.orders, {
    nullable: false,
    onDelete: 'RESTRICT',
    })
    @JoinColumn({ name: 'customer_id' })
    customer: Relation<Customer>; // Perbaikan: Gunakan Relation<Customer>

    @Column({ name: 'customer_id', type: 'uuid' })
    customerId: string;
    
    @Column({ name: 'order_number', type: 'varchar', length: 50, unique: true })
    orderNumber: string;
    
    @Column({type:'varchar', length: 30})
    status: string;
    
    @Column({
    name: 'total_amount',
    type: 'decimal',
    precision: 12,
    scale: 2,
    default: 0,
    })
    totalAmount: number;
    
    // orders (1) -> (N) order_items
    @OneToMany(() => OrderItem, (item) => item.order, { cascade: true })
    items: Relation<OrderItem>[]; // Perbaikan: Gunakan Relation<OrderItem>[]

    // orders (1) -> (1) payments (rancangan sederhana)
    @OneToOne(() => Payment, (payment) => payment.order, { cascade: true })
    payment: Relation<Payment> | null; // Perbaikan: Gunakan Relation<Payment> | null

    // orders (1) -> (1) shipments (rancangan sederhana)
    @OneToOne(() => Shipment, (shipment) => shipment.order, { cascade: true })
    shipment: Relation<Shipment> | null; // Perbaikan: Gunakan Relation<Shipment> | null
    
    @CreateDateColumn({name:'created_at'})
    createdAt: Date;
    
    @UpdateDateColumn({name:'updated_at'})
    updatedAt: Date;
}