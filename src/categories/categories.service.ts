import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto.js';
import { UpdateCategoryDto } from './dto/update-category.dto.js';
import { Category } from './entities/category.entity.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {
  // Fungsi untuk akses ke database
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>
  ){}
  
  // logic menampilkan data
  async findAll(): Promise<Category[]> {
    // select * from book
    return await this.categoryRepository.find({
      order:{createdAt:'DESC'}
    })
  }
  
  // Menampilkan data berdasarkan id
  async findById (id: string): Promise<Category>{
    //  Cari data berdasarkan id
    const category = await this.categoryRepository.findOneBy({id})

    //  Jika tidak ada
    if(!category){
      throw new NotFoundException(`Buku ${id} tidak ditemukan`)
    }

    //  Jika data ditemukan
    return category
  }

  // simpan data 
  async createCategory(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const newCategory = this.categoryRepository.create(createCategoryDto);

    return await this.categoryRepository.save(newCategory);
  }

  
  // update data buku
  async updatedCategory(id: string, createcategoryDto: CreateCategoryDto): Promise<Category> {
    //  Cek dulu data bukunya ada atau tidak
    const category = await this.findById(id)
    
    //  Gabungkan perubahannya
    const updatedCategory = await this.categoryRepository.merge(category, createcategoryDto)

    //  Simpan / update data
    return await this.categoryRepository.save(updatedCategory)
  }

  // hapus data buku
  async deletedCategory(id: string): Promise<{message : string, deletedId : string}> {
    await this.findById(id)

    await this.categoryRepository.softDelete(id)

    return {
      message : `Data ${id} berhasil dihapus`,
      deletedId : id
    }
  }
}
