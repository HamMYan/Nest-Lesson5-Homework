import { ApiProperty } from "@nestjs/swagger"

export class CreateReviewDto {
    @ApiProperty()
    name: string
    @ApiProperty()
    description: string
}
