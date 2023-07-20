export enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = 'customer'
}

export type User = {
  username: string;
  role: ROLES;
}

const maxiUser:  User = {
  username: 'maxijayme',
  role: ROLES.ADMIN
}

console.log(maxiUser)