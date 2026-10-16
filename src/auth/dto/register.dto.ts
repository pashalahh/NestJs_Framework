import { IsNotEmpty } from "class-validator";

export class RegisterDto {
    @IsNotEmpty({message:'Nama harus diisi'})
    readonly name: string;

    @IsNotEmpty({message:'Email harus diisi'})
    readonly email: string;

    @IsNotEmpty({message:'Password harus diisi'})
    readonly password: string;

    @IsNotEmpty({message:'Confirm Password harus diisi'})
    readonly confirmPassword: string;
}