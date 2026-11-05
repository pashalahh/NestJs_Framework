import { ArrayMinSize, ArrayUnique, IsArray, IsNotEmpty, IsUUID, ValidateNested } from "class-validator";
import { CreateOrderItemDto } from "../../order_items/dto/create-order_item.dto.js";
import { Type } from "class-transformer";

export class CreateOrderDto {
    // customers (1) -> (N) orders
    @IsNotEmpty({ message: 'Customer harus diisi' })
    @IsUUID('4', { message: 'customerId harus berupa UUID yang valid' })
    readonly customerId: string;

    // orders (1) -> (N) order_items
    @IsArray({ message: 'items harus berupa array' })
    @ArrayMinSize(1, { message: 'Pesanan minimal berisi 1 buku' })
    @ArrayUnique((item: CreateOrderItemDto) => item.bookId, {
    message: 'Buku yang sama tidak boleh muncul dua kali, gabungkan lewat quantity',
    })
    @ValidateNested({ each: true })
    @Type(() => CreateOrderItemDto)
    readonly items: CreateOrderItemDto[];
}
