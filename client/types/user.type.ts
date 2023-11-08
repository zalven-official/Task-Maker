
export interface User {
  name: string;
  email: string;
  password: string;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface UserRegister extends User {
  password_confirmation: string,
}