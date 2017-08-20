export class User {
  name:   string;
  email:  string;
  password: string;

  constructor(private data: any) {
    this.name = data.name;
    this.email = data.email;
    this.password = data.password;
  }
}
