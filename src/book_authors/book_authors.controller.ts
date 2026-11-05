import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BookAuthorsService } from './book_authors.service.js';
import { CreateBookAuthorDto } from './dto/create-book_author.dto.js';
import { UpdateBookAuthorDto } from './dto/update-book_author.dto.js';

@Controller('book-authors')
export class BookAuthorsController {
  constructor(private readonly bookAuthorsService: BookAuthorsService) {}

  @Post()
  create(@Body() createBookAuthorDto: CreateBookAuthorDto) {
    return this.bookAuthorsService.create(createBookAuthorDto);
  }

  @Get()
  findAll() {
    return this.bookAuthorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookAuthorsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookAuthorDto: UpdateBookAuthorDto) {
    return this.bookAuthorsService.update(+id, updateBookAuthorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookAuthorsService.remove(+id);
  }
}
