import { Injectable } from '@angular/core';
import { User } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getCartDetailsByUsername(username: string): any[]{
    return this.users.filter((user) => user.username == username)[0].cart;
  }

  getUserInfoByUsername(username: string): User{
    return this.users.filter((user) => user.username === username)[0];
  }

  getUserInfoByEmail(email: string): User{
    return this.users.filter((user) => user.email === email)[0];
  }

  login(email: string, password: string): boolean{
    return this.users.filter((user) => user.email.toLowerCase() == email && user.password == password).length == 1;
  }

  users: User[] = [
    {
      firstname: "Ravi",
      lastname: "Kachahdiya",
      email: "ravi@buytoday.com",
      gender: true,
      password: "ravi@1234",
      mobileNumber: "+917984621567",
      username: "ravik",
      cart: [
        {
          id: 1,
          quantity: 2,
        },
        {
          id: 2,
          quantity: 1,
        }
      ],
    },
    {
      firstname: "Viral",
      lastname: "Vekariya",
      email: "viral@buytoday.com",
      gender: true,
      password: "viral@1234",
      mobileNumber: "+917984624567",
      username: "vir1402",
      cart: [],
    }
  ];
}
