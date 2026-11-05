import { IsInt, IsNotEmpty, IsUUID, Min } from "class-validator";

export class CreateOrderItemDto {
    @IsNotEmpty({ message: 'bookId harus diisi' })
    @IsUUID('4', { message: 'bookId harus berupa UUID yang valid' })
    readonly bookId: string;

    @IsNotEmpty({ message: 'Quantity harus diisi' })
    @IsInt({ message: 'Quantity harus berupa bilangan bulat' })
    @Min(1, { message: 'Quantity minimal 1' })
    readonly quantity: number;
}
