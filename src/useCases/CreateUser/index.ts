import { MailTrap } from "../../implementations/MailTrap";
import { UserDAO } from "../../DAO/UserDAO";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";
import { initConnection } from "../../services/DBConnection";

const connection = initConnection();

const mailtrapMailProvider = new MailTrap();
const postgresUserRepository = new UserDAO(connection);

const createUserUseCase = new CreateUserUseCase(
  postgresUserRepository,
  mailtrapMailProvider
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
