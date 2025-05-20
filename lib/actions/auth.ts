"use server"
import { redirect } from "next/navigation"
import { createServerSupabaseClient } from "@/lib/supabase/server"

export async function signIn(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  const supabase = createServerSupabaseClient()

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    return { error: error.message }
  }

  redirect("/dashboard")
}

export async function signUp(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string
  const fullName = formData.get("fullName") as string
  const role = formData.get("role") as "customer" | "agent"

  const supabase = createServerSupabaseClient()

  // First create the auth user
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
        role,
      },
    },
  })

  if (authError) {
    return { error: authError.message }
  }

  if (!authData.user) {
    return { error: "Failed to create user" }
  }

  // Then create the user profile in our database
  const { error: profileError } = await supabase.from("deli_users").insert({
    id: authData.user.id,
    email,
    full_name: fullName,
    role,
    status: "active",
  })

  if (profileError) {
    return { error: profileError.message }
  }

  // Create role-specific profile
  if (role === "customer") {
    await supabase.from("deli_customer_profiles").insert({
      user_id: authData.user.id,
    })
  } else if (role === "agent") {
    await supabase.from("deli_agent_profiles").insert({
      user_id: authData.user.id,
      vehicle_type: "Car",
      license_number: "Pending",
      rating: 5.0,
      total_deliveries: 0,
      available: false,
    })
  }

  redirect("/login?message=Account created. Please sign in.")
}

export async function signOut() {
  const supabase = createServerSupabaseClient()
  await supabase.auth.signOut()
  redirect("/login")
}

export async function getCurrentUser() {
  const supabase = createServerSupabaseClient()

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  if (error || !user) {
    return null
  }

  // Get the user profile from our database
  const { data: profile } = await supabase.from("deli_users").select("*").eq("id", user.id).single()

  return { ...user, profile }
}

export async function getUserRole() {
  const user = await getCurrentUser()

  if (!user || !user.profile) {
    return null
  }

  return user.profile.role
}

export async function requireAuth() {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/login")
  }

  return user
}
