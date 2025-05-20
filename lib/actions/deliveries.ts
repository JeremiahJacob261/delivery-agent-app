"use server"

import { createServerSupabaseClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"

export async function getDeliveries() {
  const supabase = createServerSupabaseClient()

  const { data, error } = await supabase
    .from("deli_deliveries")
    .select(`
      id,
      created_at,
      updated_at,
      status,
      pickup_time,
      delivery_time,
      estimated_delivery_time,
      current_location,
      order_id,
      agent_id,
      deli_orders (
        pickup_address,
        dropoff_address,
        customer_id,
        deli_users (
          full_name
        )
      ),
      agents:deli_users!agent_id (
        full_name
      )
    `)
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching deliveries:", error)
    throw new Error("Failed to fetch deliveries")
  }

  return data
}

export async function getDeliveryById(id: string) {
  const supabase = createServerSupabaseClient()

  const { data, error } = await supabase
    .from("deli_deliveries")
    .select(`
      id,
      created_at,
      updated_at,
      status,
      pickup_time,
      delivery_time,
      estimated_delivery_time,
      current_location,
      order_id,
      agent_id,
      deli_orders (
        pickup_address,
        dropoff_address,
        customer_id,
        total_amount,
        items_count,
        notes,
        deli_users (
          full_name,
          phone,
          email
        )
      ),
      agents:deli_users!agent_id (
        full_name,
        phone,
        email,
        deli_agent_profiles (
          vehicle_type,
          rating
        )
      )
    `)
    .eq("id", id)
    .single()

  if (error) {
    console.error("Error fetching delivery:", error)
    throw new Error("Failed to fetch delivery")
  }

  return data
}

export async function getAgentDeliveries(agentId: string) {
  const supabase = createServerSupabaseClient()

  const { data, error } = await supabase
    .from("deli_deliveries")
    .select(`
      id,
      created_at,
      updated_at,
      status,
      pickup_time,
      delivery_time,
      estimated_delivery_time,
      current_location,
      order_id,
      deli_orders (
        pickup_address,
        dropoff_address,
        customer_id,
        total_amount,
        items_count,
        deli_users (
          full_name,
          phone
        )
      )
    `)
    .eq("agent_id", agentId)
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching agent deliveries:", error)
    throw new Error("Failed to fetch agent deliveries")
  }

  return data
}

export async function getCustomerDeliveries(customerId: string) {
  const supabase = createServerSupabaseClient()

  const { data, error } = await supabase
    .from("deli_deliveries")
    .select(`
      id,
      created_at,
      updated_at,
      status,
      pickup_time,
      delivery_time,
      estimated_delivery_time,
      current_location,
      order_id,
      agent_id,
      deli_orders!inner (
        pickup_address,
        dropoff_address,
        total_amount,
        items_count,
        customer_id
      ),
      agents:deli_users!agent_id (
        full_name,
        phone
      )
    `)
    .eq("deli_orders.customer_id", customerId)
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching customer deliveries:", error)
    throw new Error("Failed to fetch customer deliveries")
  }

  return data
}

export async function createDelivery(deliveryData: {
  order_id: string
  agent_id?: string
  estimated_delivery_time?: string
}) {
  const supabase = createServerSupabaseClient()

  const { data, error } = await supabase.from("deli_deliveries").insert(deliveryData).select().single()

  if (error) {
    console.error("Error creating delivery:", error)
    throw new Error("Failed to create delivery")
  }

  revalidatePath("/admin/deliveries")
  return data
}

export async function assignDelivery(id: string, agentId: string) {
  const supabase = createServerSupabaseClient()

  const { error } = await supabase
    .from("deli_deliveries")
    .update({
      agent_id: agentId,
      status: "assigned",
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)

  if (error) {
    console.error("Error assigning delivery:", error)
    throw new Error("Failed to assign delivery")
  }

  revalidatePath("/admin/deliveries")
  revalidatePath(`/admin/deliveries/${id}`)
  revalidatePath("/agent/dashboard")
  revalidatePath("/agent/active")
  return { success: true }
}

export async function updateDeliveryStatus(
  id: string,
  status: "pending" | "assigned" | "in_transit" | "completed" | "failed",
  locationData?: { lat: number; lng: number },
) {
  const supabase = createServerSupabaseClient()

  const updateData: any = {
    status,
    updated_at: new Date().toISOString(),
  }

  if (locationData) {
    updateData.current_location = locationData
  }

  if (status === "in_transit") {
    updateData.pickup_time = new Date().toISOString()
  } else if (status === "completed") {
    updateData.delivery_time = new Date().toISOString()
  }

  const { error } = await supabase.from("deli_deliveries").update(updateData).eq("id", id)

  if (error) {
    console.error("Error updating delivery status:", error)
    throw new Error("Failed to update delivery status")
  }

  revalidatePath("/admin/deliveries")
  revalidatePath(`/admin/deliveries/${id}`)
  revalidatePath("/agent/active")
  revalidatePath("/customer/active")
  return { success: true }
}

export async function updateDeliveryLocation(id: string, locationData: { lat: number; lng: number }) {
  const supabase = createServerSupabaseClient()

  const { error } = await supabase
    .from("deli_deliveries")
    .update({
      current_location: locationData,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)

  if (error) {
    console.error("Error updating delivery location:", error)
    throw new Error("Failed to update delivery location")
  }

  // No revalidation needed for real-time updates
  return { success: true }
}
