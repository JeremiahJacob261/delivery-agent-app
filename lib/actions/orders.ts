"use server"

import { createServerSupabaseClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"

export async function getOrders() {
  const supabase = createServerSupabaseClient()

  const { data, error } = await supabase
    .from("deli_orders")
    .select(`
      id,
      created_at,
      updated_at,
      status,
      total_amount,
      items_count,
      pickup_address,
      dropoff_address,
      notes,
      customer_id,
      deli_users (
        full_name,
        email,
        phone
      )
    `)
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching orders:", error)
    throw new Error("Failed to fetch orders")
  }

  return data
}

export async function getOrderById(id: string) {
  const supabase = createServerSupabaseClient()

  const { data, error } = await supabase
    .from("deli_orders")
    .select(`
      id,
      created_at,
      updated_at,
      status,
      total_amount,
      items_count,
      pickup_address,
      dropoff_address,
      notes,
      customer_id,
      deli_users (
        full_name,
        email,
        phone
      ),
      deli_deliveries (
        id,
        status,
        agent_id,
        pickup_time,
        delivery_time,
        estimated_delivery_time,
        deli_users (
          full_name,
          phone
        )
      ),
      deli_payments (
        id,
        amount,
        status,
        payment_method,
        created_at,
        transaction_id
      )
    `)
    .eq("id", id)
    .single()

  if (error) {
    console.error("Error fetching order:", error)
    throw new Error("Failed to fetch order")
  }

  return data
}

export async function getCustomerOrders(customerId: string) {
  const supabase = createServerSupabaseClient()

  const { data, error } = await supabase
    .from("deli_orders")
    .select(`
      id,
      created_at,
      updated_at,
      status,
      total_amount,
      items_count,
      pickup_address,
      dropoff_address,
      deli_deliveries (
        id,
        status,
        estimated_delivery_time
      )
    `)
    .eq("customer_id", customerId)
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching customer orders:", error)
    throw new Error("Failed to fetch customer orders")
  }

  return data
}

export async function createOrder(orderData: {
  customer_id: string
  total_amount: number
  items_count: number
  pickup_address: string
  dropoff_address: string
  notes?: string
}) {
  const supabase = createServerSupabaseClient()

  const { data, error } = await supabase.from("deli_orders").insert(orderData).select().single()

  if (error) {
    console.error("Error creating order:", error)
    throw new Error("Failed to create order")
  }

  revalidatePath("/customer/dashboard")
  revalidatePath("/admin/orders")
  return data
}

export async function updateOrderStatus(id: string, status: "pending" | "processing" | "delivered" | "cancelled") {
  const supabase = createServerSupabaseClient()

  const { error } = await supabase
    .from("deli_orders")
    .update({ status, updated_at: new Date().toISOString() })
    .eq("id", id)

  if (error) {
    console.error("Error updating order status:", error)
    throw new Error("Failed to update order status")
  }

  revalidatePath("/admin/orders")
  revalidatePath(`/admin/orders/${id}`)
  revalidatePath("/customer/dashboard")
  revalidatePath("/customer/deliveries")
  return { success: true }
}
