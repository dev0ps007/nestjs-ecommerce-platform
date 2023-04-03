import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Product from './product.entity';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { IsUniqueProductNameValidator } from '../validators/IsUniqueProductName.validator';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductsController],
  providers: [ProductsService, IsUniqueProductNameValidator]
})
export class ProductsModule {}
