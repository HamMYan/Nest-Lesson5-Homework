import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>
  ){}
  async create(createProductDto: CreateProductDto) {
    return await this.productRepository.save({...createProductDto})
  }

  async findAll() {
    return await this.productRepository.find()
  }

  async findOne(id: number) {
    return await this.productRepository.findBy({id});
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    await this.productRepository.update(id,{...updateProductDto})
    return 'Product updated'
  }

  async remove(id: number) {
    await this.productRepository.delete(id)
    return 'Product deleted'
  }
}
