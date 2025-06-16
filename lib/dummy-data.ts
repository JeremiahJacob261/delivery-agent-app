export const dummyUsers = [
  {
    id: "user-1",
    email: "admin@example.com",
    full_name: "Adebayo Admin",
    phone: "+234-801-234-5678",
    role: "admin" as const,
    status: "active" as const,
    avatar_url: null,
    created_at: "2025-01-01T00:00:00Z"
  },
  {
    id: "user-2",
    email: "agent@example.com",
    full_name: "Fatima Agent",
    phone: "+234-802-345-6789",
    role: "agent" as const,
    status: "active" as const,
    avatar_url: null,
    created_at: "2025-01-02T00:00:00Z"
  },
  {
    id: "user-3",
    email: "customer@example.com",
    full_name: "Chinedu Customer",
    phone: "+234-803-456-7890",
    role: "customer" as const,
    status: "active" as const,
    avatar_url: null,
    created_at: "2025-01-03T00:00:00Z"
  }
]

export const dummyOrders = [
  {
    id: "order-1",
    created_at: "2025-01-10T10:00:00Z",
    updated_at: "2025-01-10T10:00:00Z",
    status: "pending" as const,
    total_amount: 15000,
    items_count: 2,
    pickup_address: "Victoria Island, Lagos State, Nigeria",
    dropoff_address: "Ikeja, Lagos State, Nigeria",
    notes: "Handle with care",
    customer_id: "user-3",
    deli_users: {
      full_name: "Chinedu Customer",
      email: "customer@example.com",
      phone: "+234-803-456-7890"
    }
  },
  {
    id: "order-2",
    created_at: "2025-01-09T14:30:00Z",
    updated_at: "2025-01-09T14:30:00Z",
    status: "delivered" as const,
    total_amount: 8500,
    items_count: 1,
    pickup_address: "Wuse 2, Abuja, FCT, Nigeria",
    dropoff_address: "Garki, Abuja, FCT, Nigeria",
    notes: "Fragile items",
    customer_id: "user-3",
    deli_users: {
      full_name: "Aisha Mohammed",
      email: "aisha@example.com",
      phone: "+234-804-567-8901"
    }
  }
]

export const dummyAgents = [
  {
    id: "user-2",
    full_name: "Fatima Agent",
    email: "agent@example.com",
    phone: "+234-802-345-6789",
    status: "active" as const,
    avatar_url: null,
    created_at: "2025-01-02T00:00:00Z",
    deli_agent_profiles: {
      rating: 4.8,
      total_deliveries: 125,
      vehicle_type: "Motorcycle",
      license_number: "LAG-ABC-123",
      available: true
    }
  }
]

export const dummyCustomers = [
  {
    id: "user-3",
    full_name: "Chinedu Customer",
    email: "customer@example.com",
    phone: "+234-803-456-7890",
    status: "active" as const,
    avatar_url: null,
    created_at: "2025-01-03T00:00:00Z",
    deli_customer_profiles: {
      default_address: "Ikeja, Lagos State, Nigeria",
      saved_addresses: ["Victoria Island, Lagos", "Surulere, Lagos"]
    },
    deli_orders: {
      count: 12
    }
  }
]

// Simple session store
let currentUser: typeof dummyUsers[0] | null = null

export const getCurrentSession = () => currentUser
export const setCurrentSession = (user: typeof dummyUsers[0] | null) => {
  currentUser = user
}