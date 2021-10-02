import { getConnection } from "typeorm";
import { User } from "../entitites/User";
import { IUserRepository } from "../interfaces/UserInterface";
import { CreateUserDTO } from "../useCases/CreateUser/CreateUserDTO";

export class UserDAO implements IUserRepository {
  private connection;

  constructor(connection: any) {
    this.connection = connection;
  }

  private newUser: CreateUserDTO = {
    name: "",
    email: "",
    password: "",
  };

  async findByEmail(email: string): Promise<User> {
    const user =
      (await this.connection.manager.findOne(User, { email })) || this.newUser;

    return user;
  }

  async findById(id: string): Promise<User> {
    const user =
      (await this.connection.manager.findOne(User, { id })) || this.newUser;
    return user;
  }

  async find(): Promise<User[]> {
    const users = (await this.connection.manager.find(User)) || this.newUser;
    return users;
  }

  async create(user: CreateUserDTO): Promise<User> {
    const newUser = await this.connection.manager.save(User, user);
    return newUser;
  }

  async update(user: User): Promise<User> {
    const updatedUser = await this.connection.manager.save(User, user);
    return updatedUser;
  }

  async destroy(id: string): Promise<void> {
    await this.connection.manager.delete(User, id);
  }
}
