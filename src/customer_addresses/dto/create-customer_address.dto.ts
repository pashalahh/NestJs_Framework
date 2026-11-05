import { IsNotEmpty, IsUUID, MaxLength } from "class-validator";

export class CreateCustomerAddressDto {
    // customers (1) -> (N) customer_addresses
    @IsNotEmpty({ message: 'Customer harus diisi' })
    @IsUUID('4', { message: 'customerId harus berupa UUID yang valid' })
    readonly customerId: string;

    @MaxLength(150, { message: 'Nama penerima maksimal 150 karakter' })
    @IsNotEmpty({message:'Nama penerima harus diisi'})
    readonly recipientName: string;

    @IsNotEmpty({ message: 'Phone penerima harus diisi' })
    readonly phone: string;

    @IsNotEmpty({message:'Alamat harus diisi'})
    readonly address: string;

    @IsNotEmpty({message:'Kota harus diisi'})
    readonly city: string;

    @IsNotEmpty({message:'Kode pos harus diisi'})
    @MaxLength(10, { message: 'Kode pos maksimal 10 karakter' })
    readonly postalCode: string;
}
