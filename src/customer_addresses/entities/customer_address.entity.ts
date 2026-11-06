import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, type Relation, UpdateDateColumn } from "typeorm";
import { Customer } from '../../customers/entities/customer.entity.js';

@Entity({ name: 'customer_addresses' })
export class CustomerAddress {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    // customers (1) -> (N) customer_addresses
    @ManyToOne(() => Customer, (customer) => customer.addresses, {
    nullable: false,
    onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'customer_id' })
    customer: Relation<Customer>; // Tambahkan Relation di sini

    @Column({ name: 'customer_id', type: 'uuid' })
    customer_id: string;

    @Column({ name: 'recipient_name', type: 'varchar', length: 150 })
    recipientName: string;

    @Column({ type: 'varchar', length: 20 })
    phone: string;
        
    @Column({type:'text'})
    address: string;
        
    @Column({type:'varchar', length: 100})
    city: string;

    @Column({ name: 'postal_code', type: 'varchar', length: 10 })
    postalCode: string;    
        
    @CreateDateColumn({name:'created_at'})
    createdAt: Date;
        
    @UpdateDateColumn({name:'updated_at'})
    updatedAt: Date;
}