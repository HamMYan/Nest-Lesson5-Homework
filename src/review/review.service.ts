import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Review } from './entities/review.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ReviewService {
  constructor(@InjectRepository(Review) private reviewRepository: Repository<Review>){}
  async create(createReviewDto: CreateReviewDto) {
    return await this.reviewRepository.save({...createReviewDto})
  }

  async findAll() {
    return await this.reviewRepository.find()
  }

  async findOne(id: number) {
    return await this.reviewRepository.findBy({id});
  }

  async update(id: number, updateReviewDto: UpdateReviewDto) {
    await this.reviewRepository.update(id,{...updateReviewDto})
    return 'Review updated'
  }

  async remove(id: number) {
    await this.reviewRepository.delete(id)
    return 'Review deleted'
  }
}