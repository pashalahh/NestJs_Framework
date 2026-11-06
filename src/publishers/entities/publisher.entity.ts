import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, type Relation, UpdateDateColumn } from "typeorm";
import { Book } from "../../books/entities/book-entity.js";

@Entity({ name: 'publishers' })
export class Publisher {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column({type:'varchar', length: 150})
    name: string;
    
    // 1 penerbit menerbitkan banyak buku (1:N)
    @OneToMany(() => Book, (book) => book.publisher, {cascade:true})
    books: Relation<Book>[]; // Perbaikan: Gunakan Relation<Book>[]
    
    @CreateDateColumn({name:'created_at'})
    createdAt: Date;
    
    @UpdateDateColumn({name:'updated_at'})
    updatedAt: Date;
}