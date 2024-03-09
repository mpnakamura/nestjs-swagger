import { Controller, Get, Query, Param } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemResponseDto } from './dto/query-items.dto';
import { ApiResponse } from '@nestjs/swagger';





@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}
  
  @Get()
  @ApiResponse({
    status: 200,
    description: 'The found records',
    type: [ItemResponseDto],
  })
  findAll(): ItemResponseDto[] {
    return this.itemsService.findAll();
  }

  @Get(':id')
    @ApiResponse({
    status: 200,
    description: 'The found record',
    type: ItemResponseDto,
  })
  findOne(@Param('id') id: string): ItemResponseDto {
    return this.itemsService.findOne(id);
  }

}
