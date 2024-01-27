import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from 'src/dto/create-product.dto';
import { Product } from 'src/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>
    ) { }

    create(createProductDto: CreateProductDto): Promise<Product> {
        const product = new Product()
        product.name = createProductDto.name
        product.description = createProductDto.description
        product.image = createProductDto.image
        product.price = createProductDto.price

        return this.productRepository.save(product)
    }

    async findAll(): Promise<Product[]> {
        return this.productRepository.find()
    }

    findOne(id: number): Promise<Product> {
        return this.productRepository.findOneBy({ id: id })
    }

    async remove(id: string): Promise<void> {
        await this.productRepository.delete(id)
    }
}
