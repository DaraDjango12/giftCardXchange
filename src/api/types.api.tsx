export type LoginInput = {
  email: string;
  password: string;
};

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  photo?: string;
  termsAccepted: boolean;
  role: UserRole;
  isVerified: boolean;
  status: string;
  createdAt: string;
  updatedAt: string;
  profile: any;
};

export type AuthResult = {
  user: User;
  access_token: string;
};

export type CreateUser = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  termsAccepted: boolean;
};

enum UserRole {
  ADMIN = "ADMIN",
  CONSULTANT = "CONSULTANT",
  SCHOLLARR = "SCHOLLARR",
}

export type Broadcast = {
  author: any;
  authorId: string;
  createdAt: string;
  id: string;
  message: string;
  subject: string;
  updatedAt: string;
};
