import { Injectable } from '@nestjs/common';
import { Item } from './items.interface';
import { ItemResponseDto } from './dto/query-items.dto';


@Injectable()
export class ItemsService {
  private readonly items = [
    {
      id: '1',
      name: 'Mac book Air 2020',
      description: 'この商品はMacBookの2020年モデルです',
      price: 220000,
      stock: 3,
      imageUrl: 'https://www.google.com/.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '2',
      name: 'Mac book Pro 2020',
      description: 'この商品はMacBookの2020年モデルです',
      price: 320000,
      stock: 2,
      imageUrl: 'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '3',
      name: 'iPhone 12',
      description: 'この商品はiPhoneの最新モデルです',
      price: 100000,
      stock: 5,
      imageUrl: 'https://www.google.com/.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '4',
      name: 'iPad Pro',
      description: 'この商品はiPadのプロモデルです',
      price: 80000,
      stock: 8,
      imageUrl: 'https://www.google.com/.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '5',
      name: 'Apple Watch Series 6',
      description: 'この商品はApple Watchの最新モデルです',
      price: 50000,
      stock: 10,
      imageUrl: 'https://www.google.com/.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '6',
      name: 'AirPods Pro',
      description: 'この商品はAirPodsのプロモデルです',
      price: 30000,
      stock: 15,
      imageUrl: 'https://www.google.com/.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '7',
      name: 'iMac',
      description: 'この商品はiMacのデスクトップモデルです',
      price: 150000,
      stock: 4,
      imageUrl: 'https://www.google.com/.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '8',
      name: 'Mac mini',
      description: 'この商品はMac miniのミニデスクトップモデルです',
      price: 60000,
      stock: 6,
      imageUrl: 'https://www.google.com/.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '9',
      name: 'Apple TV',
      description: 'この商品はApple TVのストリーミングデバイスです',
      price: 40000,
      stock: 7,
      imageUrl: 'https://www.google.com/.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '10',
      name: 'HomePod mini',
      description: 'この商品はHomePodのミニモデルです',
      price: 20000,
      stock: 9,
      imageUrl: 'https://www.google.com/.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];
  findAll(): ItemResponseDto[] {
    return this.items.map(item => new ItemResponseDto(item));
  }
  findOne(id: string): ItemResponseDto {
    const item = this.items.find(item => item.id === id);
    return new ItemResponseDto(item);
  }
  
  

}
