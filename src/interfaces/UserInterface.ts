import { CreateUserDTO } from "src/useCases/CreateUser/CreateUserDTO";
import { UpdateUserDTO } from "src/useCases/UpdateUser/UpdateUserDTO";

export interface User {
  name: string;
  email: string;
  password: string;
}

export interface UserRepository {
  findByEmail(email: string): Promise<User>;
  find(): Promise<User[]>;
  findById(id: number): Promise<User>;
  create(user: CreateUserDTO): Promise<User>;
  update(user: UpdateUserDTO): Promise<User>;
  destroy(id: number): Promise<void>;
}
