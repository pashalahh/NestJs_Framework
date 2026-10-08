import { Injectable } from '@nestjs/common';
import { Book } from './entities/book-entity.js';
import { CreateBookDto } from './dto/create-book.dto.js';

@Injectable()
export class BooksService {
    // sample data buku
    private books: Book[] = [
        {
            id: 1,
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            isbn: '978-0-7432-7356-5',
            publishedYear: 1925,
            isAvailable: true
        },
        {
            id: 2,
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            isbn: '978-0-06-112008-4',
            publishedYear: 1960,
            isAvailable: false
        }
    ]

    // logic menampilkan data
    findAll(): Book[] {
        return this.books;
    }

    // simpan data buku
    simpanData(createBookDto: CreateBookDto): Book {
        // simpan data ke array books
        const newBook: Book = {
            id: this.books.length + 1,
            title: createBookDto.title,
            author: createBookDto.author,
            isbn: createBookDto.isbn,
            publishedYear: createBookDto.publishedYear,
            isAvailable: true
        };
        // simpan data ke array books
        this.books.push(newBook);

        return newBook;
    }
    
    // update data buku
    updateData(id: number, updateBookDto: CreateBookDto): Book {
        const bookIndex = this.books.findIndex(book => book.id === id);
        if (bookIndex === -1) {
            throw new Error(`Buku dengan id ${id} tidak ditemukan`);
        }
        const updatedBook: Book = {
            ...this.books[bookIndex],
            title: updateBookDto.title,
            author: updateBookDto.author,
            isbn: updateBookDto.isbn,
            publishedYear: updateBookDto.publishedYear
        };
        this.books[bookIndex] = updatedBook;
        return updatedBook;
    }

    // hapus data buku
    hapusData(id: number): string {
        const bookIndex = this.books.findIndex(book => book.id === id);
        if (bookIndex === -1) {
            throw new Error(`Buku dengan id ${id} tidak ditemukan`);
        }
        this.books.splice(bookIndex, 1);
        return `Buku dengan id ${id} berhasil dihapus`;
    }
}
