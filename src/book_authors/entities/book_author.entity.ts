import { Entity, JoinColumn, ManyToOne, PrimaryColumn, type Relation } from "typeorm";
import { Book } from "../../books/entities/book-entity.js";
import { Author } from "../../authors/entities/author.entity.js";

@Entity({ name: 'book_authors' })
export class BookAuthor {
    // PK gabungan bagian 1 + FK -> books.id
    @PrimaryColumn({ name: 'book_id', type: 'uuid' })
    bookId: string;

    // PK gabungan bagian 2 + FK -> authors.id
    @PrimaryColumn({ name: 'author_id', type: 'uuid' })
    authorId: string;

    @ManyToOne(() => Book, (book) => book.bookAuthors, {
        nullable: false,
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'book_id' })
    book: Relation<Book>; // Gunakan Relation<Book>

    @ManyToOne(() => Author, (author) => author.bookAuthors, {
        nullable: false,
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'author_id' })
    author: Relation<Author>; // Gunakan Relation<Author>
}