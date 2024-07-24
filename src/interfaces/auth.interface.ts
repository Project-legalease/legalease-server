export interface IAuthUser {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  profilePic: string | null;
  role: string;
  createdAt: Date;
  updatedAt: Date;
  accessToken: string;
}

export interface IAuthLawyer {
  qualification: string;
  specialization: string;
  experience: string;
  location: string;
}

export interface IAuthResult extends Omit<IAuthUser, "password">, IAuthLawyer {}

export interface ILogin {
  email: string;
  password: string;
}

export interface IAccessToken {
  id: string;
  email: string;
  role: string;
}