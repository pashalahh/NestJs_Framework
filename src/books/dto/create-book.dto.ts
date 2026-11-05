import { ArrayMinSize, ArrayUnique, IsArray, IsInt, IsNotEmpty, IsOptional, IsUUID } from "class-validator";

export class CreateBookDto {
    @IsNotEmpty({message:'Title harus diisi'})
    readonly title: string;
    
    @IsNotEmpty({message:'ISBN harus diisi'})
    readonly isbn: string;
    
    @IsNotEmpty({message:'Published Year harus diisi'})
    @IsInt({message:'Published Year harus diisi'})
    readonly publishedYear: number;

    @IsNotEmpty({message:'Price harus diisi'})
    @IsInt({message:'Price harus diisi'})
    readonly price: number;

    @IsNotEmpty({message:'Stock harus diisi'})
    @IsInt({message:'Stock harus diisi'})
    readonly stock: number;

    // books (N) -> (1) categories
    @IsNotEmpty({ message: 'Category harus diisi' })
    @IsUUID('4', { message: 'categoryId harus berupa UUID yang valid' })
    readonly categoryId: string;

    // books (N) -> (1) publishers (opsional)
    @IsOptional()
    @IsUUID('4', { message: 'publisherId harus berupa UUID yang valid' })
    readonly publisherId?: string;

    // books (N) <-> (N) authors, minimal 1 penulis
    @IsArray({ message: 'authorIds harus berupa array' })
    @ArrayMinSize(1, { message: 'Minimal 1 penulis harus dipilih' })
    @ArrayUnique({ message: 'authorIds tidak boleh duplikat' })
    @IsUUID('4', { each: true, message: 'Setiap authorId harus berupa UUID yang valid' })
    readonly authorIds: string[];
}