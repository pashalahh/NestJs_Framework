import { IsNotEmpty, IsUUID } from "class-validator";

export class CreateBookAuthorDto {
    @IsNotEmpty({ message: 'bookId harus diisi' })
    @IsUUID('4', { message: 'bookId harus berupa UUID yang valid' })
    readonly bookId: string;

    @IsNotEmpty({ message: 'authorId harus diisi' })
    @IsUUID('4', { message: 'authorId harus berupa UUID yang valid' })
    readonly authorId: string;
}
