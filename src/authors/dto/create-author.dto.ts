import { IsNotEmpty } from "class-validator";

export class CreateAuthorDto {
    @IsNotEmpty({message:'Nama harus diisi'})
    readonly name: string;
}
