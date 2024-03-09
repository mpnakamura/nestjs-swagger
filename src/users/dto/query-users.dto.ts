
import { ApiProperty } from '@nestjs/swagger';

export class QueryUserDto {
  @ApiProperty({ required: false })
  readonly name?: string;

  @ApiProperty({ required: false })
  readonly age?: string;

  get isNameRequested(): boolean {
    console.log('Name query:', this.name);
    return this.name === 'true';
  }

  get isAgeRequested(): boolean {
    console.log('Age query:', this.age);
    return this.age === 'true';
  }
}

