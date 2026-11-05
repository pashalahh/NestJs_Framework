import { IsNotEmpty, MaxLength } from "class-validator";

export class CreateCustomerDto {
    @IsNotEmpty({message:'Nama harus diisi'})
    @MaxLength(150, { message: 'Nama maksimal 150 karakter' })
    readonly name: string;
    
    @IsNotEmpty({message:'Email harus diisi'})
    @MaxLength(150, { message: ' maksimal 150 karakter' })
    readonly email: string;

    @IsNotEmpty({message:'Phone harus diisi'})
    readonly phone: string;
}
