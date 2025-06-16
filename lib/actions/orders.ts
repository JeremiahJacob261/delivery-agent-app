"use server"
import { dummyOrders } from "@/lib/dummy-data"

export async function getOrders() {
  return dummyOrders
}

export async function getOrderById(id: string) {
  const order = dummyOrders.find(o => o.id === id)
  if (!order) {
    throw new Error("Order not found")
  }
  return order
}

export async function getCustomerOrders(customerId: string) {
  return dummyOrders.filter(order => order.customer_id === customerId)
}

export async function createOrder(orderData: {
  customer_id: string
  total_amount: number
  items_count: number
  pickup_address: string
  dropoff_address: string
  notes?: string
}) {
  const newOrder = {
    id: `order-${Date.now()}`,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    status: "pending" as const,
    ...orderData,
    deli_users: {
      full_name: "Customer Name",
      email: "customer@example.com",
      phone: "+234-800-000-0000"
    }
  }
  
  return newOrder
}

export async function updateOrderStatus(id: string, status: "pending" | "processing" | "delivered" | "cancelled") {
  // Simulate update
  return { success: true }
}
