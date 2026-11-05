import { Module } from '@nestjs/common';
import { BookAuthorsService } from './book_authors.service.js';
import { BookAuthorsController } from './book_authors.controller.js';
import { BookAuthor } from './entities/book_author.entity.js';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([BookAuthor])],
  controllers: [BookAuthorsController],
  providers: [BookAuthorsService],
})
export class BookAuthorsModule {}
