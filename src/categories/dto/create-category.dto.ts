import { IsNotEmpty, MaxLength } from "class-validator";

export class CreateCategoryDto {
    @IsNotEmpty({message:'Nama harus diisi'})
    @MaxLength(100, { message: 'Nama maksimal 100 karakter' })
    readonly name: string;
        
}
