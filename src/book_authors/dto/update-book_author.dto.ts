import { PartialType } from '@nestjs/mapped-types';
import { CreateBookAuthorDto } from './create-book_author.dto.js';

export class UpdateBookAuthorDto extends PartialType(CreateBookAuthorDto) {}
