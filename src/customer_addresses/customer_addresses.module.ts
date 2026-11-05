import { Module } from '@nestjs/common';
import { CustomerAddressesService } from './customer_addresses.service.js';
import { CustomerAddressesController } from './customer_addresses.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerAddress } from './entities/customer_address.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerAddress])],
  controllers: [CustomerAddressesController],
  providers: [CustomerAddressesService],
})
export class CustomerAddressesModule {}
