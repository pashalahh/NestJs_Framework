import { Module } from '@nestjs/common';
import { ShipmentsService } from './shipments.service.js';
import { ShipmentsController } from './shipments.controller.js';
import { Shipment } from './entities/shipment.entity.js';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Shipment])],
  controllers: [ShipmentsController],
  providers: [ShipmentsService],
})
export class ShipmentsModule {}
