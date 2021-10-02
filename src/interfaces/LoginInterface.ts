export interface ICredentials {
  email: string;
  password: string;
}

export interface ILogin {
  login(credentials: ICredentials): Promise<any>;
}
