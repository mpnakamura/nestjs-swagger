import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-users.dto";
import { User } from "./users.interface";
import { QueryUserDto } from "./dto/query-users.dto";

@Injectable()
export class UsersService {
    private readonly users: User[] = [
    { id: "1", name: "User 1", age: 20 },
    { id: "2", name: "User 2", age: 21 },
    { id: "3", name: "User 3", age: 22 },
    { id: "4", name: "User 4", age: 23 },
    { id: "5", name: "User 5", age: 24 },
    { id: "6", name: "User 6", age: 25 },
    { id: "7", name: "User 7", age: 26 },
    { id: "8", name: "User 8", age: 27 },
    { id: "9", name: "User 9", age: 28 },
    { id: "10", name: "User 10", age: 29 },
    { id: "11", name: "User 11", age: 30 },
    { id: "12", name: "User 12", age: 31 },
    { id: "13", name: "User 13", age: 32 },
    { id: "14", name: "User 14", age: 33 },
    { id: "15", name: "User 15", age: 34 },
    { id: "16", name: "User 16", age: 35 },
    { id: "17", name: "User 17", age: 36 },
    { id: "18", name: "User 18", age: 37 },
    { id: "19", name: "User 19", age: 38 },
    { id: "20", name: "User 20", age: 39 },
  ];


  create(user: CreateUserDto) {
    this.users.push(user);
  }
  findAll(): User[] {
    return this.users;
  }

  findOne(id: string): User {
    return this.users.find((user) => user.id === id);
  }

  query(queryDto: QueryUserDto): Partial<User>[] {
    console.log('Query DTO in service:', queryDto);
    return this.users.map(user => {
      const filteredUser: Partial<User> ={};
      if(queryDto.name) {
        filteredUser.name = user.name;
      }
      if (queryDto.age) {
        filteredUser.age = user.age;
      }
      return filteredUser;
    });
  }
}
