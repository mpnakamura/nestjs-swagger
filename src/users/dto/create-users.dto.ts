import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({example: 'uuid'})
  id: string;

  @ApiProperty({example: 'Shinya'})
  name: string;

  @ApiProperty({example: 29})
  age: number;
  
}