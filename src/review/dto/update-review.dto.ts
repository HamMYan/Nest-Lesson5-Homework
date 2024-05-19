import { PartialType } from '@nestjs/mapped-types';
import { CreateReviewDto } from './create-review.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateReviewDto extends PartialType(CreateReviewDto) {
    @ApiProperty()
    name: string
    @ApiProperty()
    description: string
}
