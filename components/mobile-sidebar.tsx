"use client"

import { useState, useEffect } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { AdminSidebar } from "@/components/admin-sidebar"
import { AgentSidebar } from "@/components/agent-sidebar"
import { CustomerSidebar } from "@/components/customer-sidebar"

interface MobileSidebarProps {
  role: "admin" | "agent" | "customer"
}

export function MobileSidebar({ role }: MobileSidebarProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        {role === "admin" && <AdminSidebar />}
        {role === "agent" && <AgentSidebar />}
        {role === "customer" && <CustomerSidebar />}
      </SheetContent>
    </Sheet>
  )
}
