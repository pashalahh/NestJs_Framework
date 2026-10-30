import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { BooksService } from './books.service.js';
import { CreateBookDto } from './dto/create-book.dto.js';

@Controller('books')
export class BooksController {

    constructor(private readonly booksService: BooksService) {}

    // menampilkan data 
    @Get()
    findAll(@Query() query: any) {
        return this.booksService.findAll();
    }

    // menyimpan data
    @Post()
    simpanData(@Body() createBookDto: CreateBookDto) {
        return this.booksService.simpanData(createBookDto);
    }

    // Menampilkan data berdasarkan id
    @Get(':id')
    show(@Param('id') id:string){
        return this.booksService.findOne(id)
    }

    // mengudate data
    @Put(':id')
    updateData(
        @Param('id') id: string, 
        @Body() createBookDto: CreateBookDto) {
        return this.booksService.updateData(id, createBookDto);
    }


    // menghapus data
    @Delete(':id')
    hapusData(@Param('id') id: string) {
        return this.booksService.hapusData(id);
    }
}
