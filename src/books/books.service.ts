import { Injectable, NotFoundException } from '@nestjs/common';
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

    // Menampilkan data berdasarkan id
    async findOne (id: string): Promise<Book>{
        //  Cari buku berdasarkan id
        const book = await this.bookRepository.findOneBy({id})

        //  Jika tidak ada
        if(!book){
            throw new NotFoundException(`Buku ${id} tidak ditemukan`)
        }

        //  Jika data buku ditemukan
        return book
    }
    
    // update data buku
    async updateData(id: string, createBookDto: CreateBookDto): Promise<Book> {
        //  Cek dulu data bukunya ada atau tidak
        const book = await this.findOne(id)
        
        //  Gabungkan perubahannya
        const updatedBook = await this.bookRepository.merge(book, createBookDto)

        //  Simpan / update data
        return await this.bookRepository.save(updatedBook)
    }

    // hapus data buku
    async hapusData(id: string): Promise<{message : string, deletedId : string}> {
        await this.findOne(id)

        await this.bookRepository.softDelete(id)

        return {
            message : `Data ${id} berhasil dihapus`,
            deletedId : id
        }
    }
}
