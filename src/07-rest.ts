import { User, ROLES } from "./01-enum";

const newUser: User = {
  username:'maxijayme',
  role: ROLES.ADMIN
}

const checkRole = (username:string, ...role: string[])=>{
  if(role.includes(ROLES.ADMIN)){
    console.log(username, ' authenticated ok')
  }else{
    console.log(username, 'is unauthorized')
  }
}

checkRole(newUser.username, newUser.role)