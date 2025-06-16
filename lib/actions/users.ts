"use server"
import { dummyUsers, dummyAgents, dummyCustomers } from "@/lib/dummy-data"

export async function getUsers(role?: string) {
  if (role) {
    return dummyUsers.filter(user => user.role === role)
  }
  return dummyUsers
}

export async function getAgents() {
  return dummyAgents
}

export async function getCustomers() {
  return dummyCustomers
}

export async function getUserById(id: string) {
  const user = dummyUsers.find(u => u.id === id)
  if (!user) {
    throw new Error("User not found")
  }
  return user
}

export async function updateUserStatus(id: string, status: "active" | "inactive" | "suspended") {
  // Simulate update
  return { success: true }
}
