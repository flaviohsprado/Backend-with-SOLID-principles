import { User } from "src/entitites/User";
import { UserRepository } from "src/interfaces/UserInterface";
import { CreateUserDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(data: CreateUserDTO) {
    const userAlreadyExists = await this.userRepository.findByEmail(data.email);

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const user = new User(data);

    await this.userRepository.create(user);
  }
}
