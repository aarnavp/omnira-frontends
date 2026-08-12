import type { Timestamp } from "./api";

export type UserRole = "member" | "admin";

export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl: string | null;
  role: UserRole;
  createdAt: Timestamp;
  /** Which sides of the product this account has activated. */
  contributorEnabled: boolean;
  deployerEnabled: boolean;
}

export interface Session {
  user: User;
  expiresAt: Timestamp;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface SignupInput {
  name: string;
  email: string;
  password: string;
}
