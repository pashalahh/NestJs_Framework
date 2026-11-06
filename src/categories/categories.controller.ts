import { Controller, Get, Post, Body, Param, Delete, Query, Put } from '@nestjs/common';
import { CategoriesService } from './categories.service.js';
import { CreateCategoryDto } from './dto/create-category.dto.js';
import { UpdateCategoryDto } from './dto/update-category.dto.js';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  // menampilkan data 
  @Get()
  findAll() {
    return this.categoriesService.findAll();
  }

  // Menampilkan data berdasarkan id
  @Get(':id')
  findone(@Param('id') id:string){
    return this.categoriesService.findById(id)
  }

  // menyimpan data
  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.createCategory(createCategoryDto);
  }

  // mengudate data
  @Put(':id')
  updateData(
    @Param('id') id: string, 
    @Body() createBookDto: CreateCategoryDto) {
    return this.categoriesService.updatedCategory(id, createBookDto);
  }

  // menghapus data
  @Delete(':id')
  hapusData(@Param('id') id: string) {
    return this.categoriesService.deletedCategory(id);
  }
}
