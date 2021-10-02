import { CreateUserDTO } from "../useCases/CreateUser/CreateUserDTO";
import { UpdateUserDTO } from "../useCases/UpdateUser/UpdateUserDTO";

export interface IUser {
  name: string;
  email: string;
  password: string;
}

export interface IUserRepository {
  findByEmail(email: string): Promise<IUser>;
  find(): Promise<IUser[]>;
  findById(id: string): Promise<IUser>;
  create(user: CreateUserDTO): Promise<IUser>;
  update(user: UpdateUserDTO): Promise<IUser>;
  destroy(id: string): Promise<void>;
}
