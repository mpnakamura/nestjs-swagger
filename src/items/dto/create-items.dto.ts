import { ApiProperty,ApiResponseProperty } from "@nestjs/swagger";


export class CreateItemDto {
  @ApiProperty({example: 'uuid'})
  id: string;

  @ApiProperty({example: 'Mac book Air 2020'})
  name: string;

  @ApiProperty({example: 'この商品はMacBookの2020年モデルです'})
  description: string;

  @ApiProperty({example: 220000})
  price: number;

  @ApiProperty({example: 3})
  stock: number;

  @ApiProperty({example: 'https://www.google.com/.png'})
  imageUrl: string;

  @ApiResponseProperty({example:new Date().toISOString()})
  createdAt: string;

  @ApiResponseProperty({example:new Date().toISOString()})
  updatedAt: string;
}
