"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// This is a placeholder for your actual database implementation
// You'll replace this with your PostgreSQL implementation later
const mockUsers = [
  {
    id: 1,
    name: "Admin User",
    email: "admin@example.com",
    password: "admin123",
    role: "admin",
  },
  {
    id: 2,
    name: "Regular User",
    email: "user@example.com",
    password: "user123",
    role: "user",
  },
];

export async function login(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  // In a real app, you would:
  // 1. Validate the input
  // 2. Check the credentials against your database
  // 3. Hash the password and compare it securely

  // This is a mock implementation
  const user = mockUsers.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    // In a real app, you would handle this error better
    console.error("Invalid credentials");
    return;
  }

  // Create a session (in a real app, you would use a proper session management system)
  const session = {
    userId: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 1 week
  };

  // Store the session in a cookie
  cookies().set("session", JSON.stringify(session), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: "/",
  });

  // Redirect based on role
  if (user.role === "admin") {
    redirect("/admin/archive");
  } else {
    redirect("/archive");
  }
}

export async function register(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const role = formData.get("role") as string;

  // In a real app, you would:
  // 1. Validate the input
  // 2. Check if the user already exists
  // 3. Hash the password
  // 4. Store the user in your database

  // For now, just redirect to login
  redirect("/login");
}

export async function logout() {
  cookies().delete("session");
  redirect("/login");
}

export async function getSession() {
  const session = cookies().get("session")?.value;

  if (!session) {
    return null;
  }

  return JSON.parse(session);
}
