import { IsNotEmpty, IsOptional, IsUUID, MaxLength } from "class-validator";

export class CreateShipmentDto {
    // orders (1) -> (1) shipments
    @IsNotEmpty({ message: 'Order harus diisi' })
    @IsUUID('4', { message: 'orderId harus berupa UUID yang valid' })
    readonly orderId: string;

    @IsNotEmpty({ message: 'Kurir harus diisi' })
    @MaxLength(100, { message: 'Kurir maksimal 100 karakter' })
    readonly courier: string;

    @IsOptional()
    @MaxLength(100, { message: 'Nomor resi maksimal 100 karakter' })
    readonly trackingNumber?: string;
}
