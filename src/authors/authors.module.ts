import { Module } from '@nestjs/common';
import { AuthorsService } from './authors.service.js';
import { AuthorsController } from './authors.controller.js';
import { Author } from './entities/author.entity.js';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Author])],
  controllers: [AuthorsController],
  providers: [AuthorsService],
})
export class AuthorsModule {}
