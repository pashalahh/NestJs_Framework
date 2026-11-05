import { IsNotEmpty, MaxLength } from "class-validator";

export class CreatePublisherDto {
    @IsNotEmpty({message:'Nama harus diisi'})
    @MaxLength(150, { message: 'Nama maksimal 150 karakter' })
    readonly name: string;
}
