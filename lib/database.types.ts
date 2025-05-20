export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      deli_users: {
        Row: {
          id: string
          created_at: string
          email: string
          full_name: string
          phone: string | null
          role: "admin" | "agent" | "customer"
          status: "active" | "inactive" | "suspended"
          avatar_url: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          email: string
          full_name: string
          phone?: string | null
          role: "admin" | "agent" | "customer"
          status?: "active" | "inactive" | "suspended"
          avatar_url?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          email?: string
          full_name?: string
          phone?: string | null
          role?: "admin" | "agent" | "customer"
          status?: "active" | "inactive" | "suspended"
          avatar_url?: string | null
        }
      }
      deli_agent_profiles: {
        Row: {
          id: string
          user_id: string
          vehicle_type: string
          license_number: string
          rating: number
          total_deliveries: number
          available: boolean
          current_location: Json | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          vehicle_type: string
          license_number: string
          rating?: number
          total_deliveries?: number
          available?: boolean
          current_location?: Json | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          vehicle_type?: string
          license_number?: string
          rating?: number
          total_deliveries?: number
          available?: boolean
          current_location?: Json | null
          created_at?: string
          updated_at?: string
        }
      }
      deli_customer_profiles: {
        Row: {
          id: string
          user_id: string
          default_address: string | null
          saved_addresses: Json | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          default_address?: string | null
          saved_addresses?: Json | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          default_address?: string | null
          saved_addresses?: Json | null
          created_at?: string
          updated_at?: string
        }
      }
      deli_orders: {
        Row: {
          id: string
          customer_id: string
          created_at: string
          updated_at: string
          status: "pending" | "processing" | "delivered" | "cancelled"
          total_amount: number
          items_count: number
          pickup_address: string
          dropoff_address: string
          notes: string | null
        }
        Insert: {
          id?: string
          customer_id: string
          created_at?: string
          updated_at?: string
          status?: "pending" | "processing" | "delivered" | "cancelled"
          total_amount: number
          items_count: number
          pickup_address: string
          dropoff_address: string
          notes?: string | null
        }
        Update: {
          id?: string
          customer_id?: string
          created_at?: string
          updated_at?: string
          status?: "pending" | "processing" | "delivered" | "cancelled"
          total_amount?: number
          items_count?: number
          pickup_address?: string
          dropoff_address?: string
          notes?: string | null
        }
      }
      deli_deliveries: {
        Row: {
          id: string
          order_id: string
          agent_id: string | null
          created_at: string
          updated_at: string
          status: "pending" | "assigned" | "in_transit" | "completed" | "failed"
          pickup_time: string | null
          delivery_time: string | null
          current_location: Json | null
          estimated_delivery_time: string | null
        }
        Insert: {
          id?: string
          order_id: string
          agent_id?: string | null
          created_at?: string
          updated_at?: string
          status?: "pending" | "assigned" | "in_transit" | "completed" | "failed"
          pickup_time?: string | null
          delivery_time?: string | null
          current_location?: Json | null
          estimated_delivery_time?: string | null
        }
        Update: {
          id?: string
          order_id?: string
          agent_id?: string | null
          created_at?: string
          updated_at?: string
          status?: "pending" | "assigned" | "in_transit" | "completed" | "failed"
          pickup_time?: string | null
          delivery_time?: string | null
          current_location?: Json | null
          estimated_delivery_time?: string | null
        }
      }
      deli_payments: {
        Row: {
          id: string
          order_id: string
          customer_id: string
          amount: number
          status: "pending" | "completed" | "failed" | "refunded"
          payment_method: string
          created_at: string
          transaction_id: string | null
        }
        Insert: {
          id?: string
          order_id: string
          customer_id: string
          amount: number
          status?: "pending" | "completed" | "failed" | "refunded"
          payment_method: string
          created_at?: string
          transaction_id?: string | null
        }
        Update: {
          id?: string
          order_id?: string
          customer_id?: string
          amount?: number
          status?: "pending" | "completed" | "failed" | "refunded"
          payment_method?: string
          created_at?: string
          transaction_id?: string | null
        }
      }
      deli_agent_earnings: {
        Row: {
          id: string
          agent_id: string
          delivery_id: string
          amount: number
          status: "pending" | "paid"
          created_at: string
          payout_date: string | null
        }
        Insert: {
          id?: string
          agent_id: string
          delivery_id: string
          amount: number
          status?: "pending" | "paid"
          created_at?: string
          payout_date?: string | null
        }
        Update: {
          id?: string
          agent_id?: string
          delivery_id?: string
          amount?: number
          status?: "pending" | "paid"
          created_at?: string
          payout_date?: string | null
        }
      }
      deli_chat_messages: {
        Row: {
          id: string
          sender_id: string
          receiver_id: string
          delivery_id: string
          message: string
          created_at: string
          read: boolean
        }
        Insert: {
          id?: string
          sender_id: string
          receiver_id: string
          delivery_id: string
          message: string
          created_at?: string
          read?: boolean
        }
        Update: {
          id?: string
          sender_id?: string
          receiver_id?: string
          delivery_id?: string
          message?: string
          created_at?: string
          read?: boolean
        }
      }
      deli_settings: {
        Row: {
          id: string
          user_id: string
          preferences: Json
          notifications: Json
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          preferences?: Json
          notifications?: Json
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          preferences?: Json
          notifications?: Json
          created_at?: string
          updated_at?: string
        }
      }
      deli_system_logs: {
        Row: {
          id: string
          action: string
          entity_type: string
          entity_id: string
          user_id: string | null
          details: Json | null
          created_at: string
          ip_address: string | null
        }
        Insert: {
          id?: string
          action: string
          entity_type: string
          entity_id: string
          user_id?: string | null
          details?: Json | null
          created_at?: string
          ip_address?: string | null
        }
        Update: {
          id?: string
          action?: string
          entity_type?: string
          entity_id?: string
          user_id?: string | null
          details?: Json | null
          created_at?: string
          ip_address?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
