import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { BookAuthor } from "../../book_authors/entities/book_author.entity.js";

@Entity({ name: 'authors' })
export class Author {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column({type:'varchar', length: 150})
    name: string;
    
    @OneToMany(() => BookAuthor, (bookAuthor) => bookAuthor.author)
    bookAuthors: BookAuthor[];
    
    @CreateDateColumn({name:'created_at'})
    createdAt: Date;
    
    @UpdateDateColumn({name:'updated_at'})
    updatedAt: Date;
    
    @DeleteDateColumn({name:'deleted_at', nullable:true})
    deletedAt: Date;
}
