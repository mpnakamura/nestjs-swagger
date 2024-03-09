import { ApiResponseProperty} from '@nestjs/swagger';


export class ItemResponseDto {
  @ApiResponseProperty({example: 'uuid'})
  id: string;

  @ApiResponseProperty({example: 'Mac book Air 2020'})
  name: string;

  @ApiResponseProperty({example: 'この商品はMacBookの2020年モデルです'})
  description: string;

  @ApiResponseProperty({example: 220000})
  price: number;

  @ApiResponseProperty({example: 3})
  stock: number;

  @ApiResponseProperty({example: 'https://www.google.com/.png'})
  imageUrl: string;

  @ApiResponseProperty({example:new Date().toISOString()})
  createdAt: string;

  @ApiResponseProperty({example:new Date().toISOString()})
  updatedAt: string;

  @ApiResponseProperty({example:'在庫わずかです。'})
  stockMessage: string;

  constructor(item: any) {
    this.id = item.id;
    this.name = item.name;
    this.description = this.highlightKeywords(item.description,['Mac Book','2020']);
    this.price = item.price;
    this.stock = item.stock;
    this.imageUrl = item.imageUrl;
    this.createdAt = item.createdAt;
    this.updatedAt = item.updatedAt;
    this.stockMessage = this.getStockMessage(item.stock);
  }

  private highlightKeywords(text: string, keywords: string[]): string {
    keywords.forEach(keyword => {
      const regExp = new RegExp(keyword, 'gi');
      text = text.replace(regExp, `<strong">${keyword}</strong>`);
    });
    return text;
  }

  private getStockMessage(stock: number): string {
    if (stock > 10) {
      return '在庫充足です。';
    } else if (stock > 5) {
      return '在庫わずかです。';
    } else {
      return '在庫切れです。';
    }
  }
}