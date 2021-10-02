import { ICredentials, ILogin } from "src/interfaces/LoginInterface";

export class LoginUseCase {
  constructor(private readonly Login: ILogin) {}

  public async execute(email: string, password: string): Promise<void> {
    return;
  }
}
