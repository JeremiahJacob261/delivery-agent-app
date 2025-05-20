"use server"

import { createServerSupabaseClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"

export async function getUsers(role?: string) {
  const supabase = createServerSupabaseClient()

  let query = supabase.from("deli_users").select(`
    id,
    full_name,
    email,
    phone,
    role,
    status,
    avatar_url,
    created_at
  `)

  if (role) {
    query = query.eq("role", role)
  }

  const { data, error } = await query.order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching users:", error)
    throw new Error("Failed to fetch users")
  }

  return data
}

export async function getAgents() {
  const supabase = createServerSupabaseClient()

  const { data, error } = await supabase
    .from("deli_users")
    .select(`
      id,
      full_name,
      email,
      phone,
      status,
      avatar_url,
      created_at,
      deli_agent_profiles (
        rating,
        total_deliveries,
        vehicle_type,
        license_number,
        available
      )
    `)
    .eq("role", "agent")
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching agents:", error)
    throw new Error("Failed to fetch agents")
  }

  return data
}

export async function getCustomers() {
  const supabase = createServerSupabaseClient()

  const { data, error } = await supabase
    .from("deli_users")
    .select(`
      id,
      full_name,
      email,
      phone,
      status,
      avatar_url,
      created_at,
      deli_customer_profiles (
        default_address,
        saved_addresses
      ),
      deli_orders (
        count
      )
    `)
    .eq("role", "customer")
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching customers:", error)
    throw new Error("Failed to fetch customers")
  }

  return data
}

export async function getUserById(id: string) {
  const supabase = createServerSupabaseClient()

  const { data, error } = await supabase
    .from("deli_users")
    .select(`
      id,
      full_name,
      email,
      phone,
      role,
      status,
      avatar_url,
      created_at
    `)
    .eq("id", id)
    .single()

  if (error) {
    console.error("Error fetching user:", error)
    throw new Error("Failed to fetch user")
  }

  return data
}

export async function updateUserStatus(id: string, status: "active" | "inactive" | "suspended") {
  const supabase = createServerSupabaseClient()

  const { error } = await supabase.from("deli_users").update({ status }).eq("id", id)

  if (error) {
    console.error("Error updating user status:", error)
    throw new Error("Failed to update user status")
  }

  revalidatePath("/admin/users")
  return { success: true }
}
