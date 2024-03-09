import { Controller, Get, Post, Body, Param, Query } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-users.dto";
import { UsersService } from "./users.service";
import { User } from "./users.interface";
import { QueryUserDto } from "./dto/query-users.dto";


@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    this.usersService.create(createUserDto);
  }

  @Get()
  findAll(): User[] {
    return this.usersService.findAll();
  }
  @Get('query')
  query(@Query() query: QueryUserDto) {
  console.log('Received query:', query);
  const result = this.usersService.query(query);
  console.log('Query result:', result);
  return result; 
}
  
  @Get(":id")
  async findOne(@Param("id") id: string): Promise<User | undefined> {
    return this.usersService.findOne(id);
  }

  

}
