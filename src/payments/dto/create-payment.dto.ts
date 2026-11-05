import { IsNotEmpty, IsNumber, IsUUID, MaxLength, Min } from "class-validator";

export class CreatePaymentDto {
    // orders (1) -> (1) payments
    @IsNotEmpty({ message: 'Order harus diisi' })
    @IsUUID('4', { message: 'orderId harus berupa UUID yang valid' })
    readonly orderId: string;
 
    @IsNotEmpty({ message: 'Metode pembayaran harus diisi' })
    @MaxLength(50, { message: 'Metode pembayaran maksimal 50 karakter' })
    readonly paymentMethod: string;

    // Di service, validasi nilai ini harus sama dengan orders.totalAmount.
    @IsNotEmpty({ message: 'Amount harus diisi' })
    @IsNumber({ maxDecimalPlaces: 2 }, { message: 'Amount harus berupa angka (maks. 2 desimal)' })
    @Min(0, { message: 'Amount tidak boleh negatif' })
    readonly amount: number;
}
