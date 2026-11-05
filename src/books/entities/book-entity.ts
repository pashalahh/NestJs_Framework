import { Check, Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, Relation, UpdateDateColumn } from "typeorm";
import { Category } from "../../categories/entities/category.entity.js";
import { Publisher } from "../../publishers/entities/publisher.entity.js";
import { BookAuthor } from "../../book_authors/entities/book_author.entity.js";
import { OrderItem } from "../../order_items/entities/order_item.entity.js";


@Entity({name:'books'})
@Check('CHK_books_price_non_negative', '"price" >= 0')
@Check('CHK_books_stock_non_negative', '"stock" >= 0')
export class Book{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type:'varchar', length: 255})
    title: string;
    
    @Column({type:'varchar'})
    isbn: string;
    
    @Column({type:'int', default:0})
    publishedYear: number;
    
    @Column({type:'boolean', default:true})
    isAvailable: boolean;

    @Column({ type: 'decimal', precision: 12, scale: 2, default: 0})
    price: number;

    @Column({ type: 'int', default: 0 })
    stock: number;

    @ManyToOne(() => Category, (category) => category.books, {
    nullable: true,
    onDelete: 'RESTRICT',
    })
    @JoinColumn({ name: 'category_id' })
    category: Relation<Category> | null;

    @Column({ name: 'category_id', type: 'uuid', nullable: true })
    categoryId: string | null;

    // publishers (1) -> (N) books
    @ManyToOne(() => Publisher, (publisher) => publisher.books, {
    nullable: true,
    onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'publisher_id' })
    publisher: Relation<Publisher> | null;

    @Column({ name: 'publisher_id', type: 'uuid', nullable: true })
    publisherId: string | null;

    // books (1) -> (N) book_authors  (=> books N <-> N authors)
    @OneToMany(() => BookAuthor, (bookAuthor) => bookAuthor.book, {
    cascade: ['insert'],
    })
    bookAuthors: BookAuthor[];

    // books (1) -> (N) order_items
    @OneToMany(() => OrderItem, (item) => item.book)
    orderItems: OrderItem[];

    @CreateDateColumn({name:'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name:'updated_at'})
    updatedAt: Date;

    @DeleteDateColumn({name:'deleted_at', nullable:true})
    deletedAt: Date;
}