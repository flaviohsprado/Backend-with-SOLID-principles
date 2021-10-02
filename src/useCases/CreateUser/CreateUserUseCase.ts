import { User } from "../../entitites/User";
import { IMail } from "../../interfaces/MailInterface";
import { IUserRepository } from "../../interfaces/UserInterface";
import { UserDAO } from "../../DAO/UserDAO";
import { CreateUserDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
  constructor(
    private userRepository: IUserRepository,
    private mailProvider: IMail
  ) {}

  async execute(data: CreateUserDTO): Promise<User> {
    const userAlreadyExists = await this.userRepository.findByEmail(data.email);

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const user = new User(data);

    const createdUser = await this.userRepository.create(user);

    this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email,
      },
      from: {
        name: "Suporte Girabel's Enterprise",
        email: "suporte.girabel@girabel.com.br",
      },
      subject: "Welcome to the application",
      body: `<p>Você já pode fazer login em nossa plataforma</p>`,
    });

    return createdUser;
  }
}
