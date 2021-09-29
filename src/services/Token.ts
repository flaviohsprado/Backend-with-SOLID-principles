import jwt from "jsonwebtoken";

class Token {
  async create(payload: any) {
    if (!process.env.SECRETKEY) throw new Error("TOKEN SECRET not found");
    return jwt.sign(payload, process.env.SECRETKEY);
  }

  async verify(token: string) {
    if (!process.env.SECRETKEY) throw new Error("TOKEN SECRET not found");
    try {
      return jwt.verify(token, process.env.SECRETKEY);
    } catch (e) {
      return false;
    }
  }
}

export default new Token();
