"use server"
import { redirect } from "next/navigation"
import { dummyUsers, setCurrentSession, getCurrentSession } from "@/lib/dummy-data"

export async function signIn(formData: FormData) {
  // Always succeed with any email/password
  const email = formData.get("email") as string
  
  // Find user by email or use first admin user
  const user = dummyUsers.find(u => u.email === email) || dummyUsers[0]
  setCurrentSession(user)

  // Redirect based on role
  switch (user.role) {
    case "admin":
      redirect("/admin/dashboard")
    case "agent":
      redirect("/agent/dashboard")
    case "customer":
      redirect("/customer/dashboard")
    default:
      redirect("/")
  }
}

export async function signUp(formData: FormData) {
  // Always succeed
  const email = formData.get("email") as string
  const fullName = formData.get("fullName") as string
  const role = formData.get("role") as "customer" | "agent"

  // Create dummy user
  const newUser = {
    id: `user-${Date.now()}`,
    email,
    full_name: fullName,
    phone: null,
    role,
    status: "active" as const,
    avatar_url: null,
    created_at: new Date().toISOString()
  }

  redirect("/login?message=Account created. Please sign in.")
}

export async function signOut() {
  setCurrentSession(null)
  redirect("/login")
}

export async function getCurrentUser() {
  return getCurrentSession()
}

export async function getUserRole() {
  const user = getCurrentSession()
  return user?.role || null
}

export async function requireAuth() {
  const user = getCurrentSession()
  
  if (!user) {
    redirect("/login")
  }
  
  return user
}
