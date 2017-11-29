export enum UserRate{
    None = 0,
    Low = 1,
    Mid = 2,
    High = 3
  }

  export class User {
    constructor(
      public id: number,
      public name: string,      
      public login: string,
      public password: string,
      public rate?: UserRate
    ) {
      this.id = id;
      this.name = name;
      this.login = login;
      this.password = password;
      this.rate = rate || 0;
    }
  }
  