import { Check, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, type Relation, Unique } from "typeorm";
import { Order } from "../../orders/entities/order.entity.js";
import { Book } from "../../books/entities/book-entity.js";

@Entity({ name: 'order_items' })
@Unique('UQ_order_items_order_book', ['orderId', 'bookId'])
@Check('CHK_order_items_quantity_positive', '"quantity" > 0')
@Check('CHK_order_items_subtotal', '"subtotal" = "quantity" * "price"')
export class OrderItem {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    // FK -> orders.id
    @ManyToOne(() => Order, (order) => order.items, {
    nullable: false,
    onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'order_id' })
    order: Relation<Order>; // Perbaikan: Gunakan Relation<Order>

    @Column({ name: 'order_id', type: 'uuid' })
    orderId: string;

    // FK -> books.id
    @ManyToOne(() => Book, (book) => book.orderItems, {
    nullable: false,
    onDelete: 'RESTRICT',
    })
    @JoinColumn({ name: 'book_id' })
    book: Relation<Book>; // Perbaikan: Gunakan Relation<Book>

    @Column({ name: 'book_id', type: 'uuid' })
    bookId: string;

    // Jumlah buku
    @Column({ type: 'int' })
    quantity: number;

    @Column({
    type: 'decimal',
    precision: 12,
    scale: 2
    })
    price: number;

    @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    })
    subtotal: number;
}