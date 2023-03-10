export const enum Role {
  admin = 0,
  powerUser = 1,
  support = 2,
  user = 3,
}

export class User {
  constructor(public email: string, public name: string, public role: Role) {}
}
