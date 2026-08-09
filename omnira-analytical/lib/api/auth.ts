import { simulateRequest } from "./mock-transport";
import { ApiError } from "@/types/api";
import type { LoginInput, Session, SignupInput, User } from "@/types/user";

/**
 * No backend yet — see AGENTS §5. These calls carry the shape and failure
 * modes (validation, `unauthorized`) a real auth endpoint would have, so
 * swapping in a real session store later touches only this file.
 */
const MOCK_USER: User = {
  id: "user_1",
  name: "New member",
  email: "member@example.com",
  avatarUrl: null,
  role: "member",
  createdAt: new Date().toISOString(),
  contributorEnabled: false,
  deployerEnabled: false,
};

export async function login(input: LoginInput): Promise<Session> {
  if (!input.email.includes("@")) {
    throw new ApiError({
      code: "validation_error",
      message: "Fix the highlighted fields and try again.",
      fieldErrors: { email: "Enter a valid email address." },
    });
  }
  if (input.password.length < 8) {
    throw new ApiError({
      code: "validation_error",
      message: "Fix the highlighted fields and try again.",
      fieldErrors: { password: "Password must be at least 8 characters." },
    });
  }
  return simulateRequest(
    {
      user: { ...MOCK_USER, email: input.email },
      expiresAt: new Date(Date.now() + 3600 * 1000).toISOString(),
    },
    { latencyMs: [420, 820] },
  );
}

export async function signup(input: SignupInput): Promise<Session> {
  if (input.password.length < 8) {
    throw new ApiError({
      code: "validation_error",
      message: "Fix the highlighted fields and try again.",
      fieldErrors: { password: "Password must be at least 8 characters." },
    });
  }
  return simulateRequest(
    {
      user: { ...MOCK_USER, name: input.name, email: input.email },
      expiresAt: new Date(Date.now() + 3600 * 1000).toISOString(),
    },
    { latencyMs: [460, 860] },
  );
}
