import { Injectable } from '@nestjs/common';
import { Book } from './entities/book-entity.js';
import { CreateBookDto } from './dto/create-book.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
    // Fungsi untuk akses ke database
    constructor(
        @InjectRepository(Book)
        private readonly bookRepository: Repository<Book>
    ){}
    
    // logic menampilkan data
    async findAll(): Promise<Book[]> {
        // select * from book
        return await this.bookRepository.find({
            order:{createdAt:'DESC'}
        })
    }

    // simpan data buku
    async simpanData(createBookDto: CreateBookDto): Promise<Book> {
        const newBook = this.bookRepository.create(createBookDto);

        return await this.bookRepository.save(newBook);
    }
    
//     // update data buku
//     updateData(id: number, updateBookDto: CreateBookDto): Book {
//         const bookIndex = this.books.findIndex(book => book.id === id);
//         if (bookIndex === -1) {
//             throw new Error(`Buku dengan id ${id} tidak ditemukan`);
//         }
//         const updatedBook: Book = {
//             ...this.books[bookIndex],
//             title: updateBookDto.title,
//             author: updateBookDto.author,
//             isbn: updateBookDto.isbn,
//             publishedYear: updateBookDto.publishedYear
//         };
//         this.books[bookIndex] = updatedBook;
//         return updatedBook;
//     }

//     // hapus data buku
//     hapusData(id: number): string {
//         const bookIndex = this.books.findIndex(book => book.id === id);
//         if (bookIndex === -1) {
//             throw new Error(`Buku dengan id ${id} tidak ditemukan`);
//         }
//         this.books.splice(bookIndex, 1);
//         return `Buku dengan id ${id} berhasil dihapus`;
//     }
}
