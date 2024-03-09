import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-users.dto";
import { User } from "./users.interface";
import { QueryUserDto } from "./dto/query-users.dto";

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    { id: "1", name: "shinya nakamura", age: 29 },
    { id: "2", name: "mizuki nakamura", age: 33 },
    { id: "3", name: "ritsuko nakamura", age: 59 },
    { id: "4", name: "kazuki ogawa", age: 28 },
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
