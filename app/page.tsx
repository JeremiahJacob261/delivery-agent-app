import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Box, Truck, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="flex items-center space-x-2">
              <Box className="h-6 w-6" />
              <span className="font-bold">DeliveryHub</span>
            </Link>
          </div>
          <div className="ml-auto flex gap-2">
            <Button variant="outline" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Register</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Delivery Management Platform
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  A comprehensive solution for managing deliveries with role-based access for admins, agents, and
                  customers.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild>
                  <Link href="/register">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/login">Login</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Admin Interface</CardTitle>
                  <CardDescription>Manage operations, track deliveries, and analyze performance.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>Analytics dashboard with key metrics</li>
                    <li>Order and delivery management</li>
                    <li>User management for customers and agents</li>
                    <li>System logs and audit trails</li>
                    <li>Payment history tracking</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Truck className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Agent Interface</CardTitle>
                  <CardDescription>Find and fulfill delivery jobs efficiently.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>Job board with available deliveries</li>
                    <li>Transport and vehicle details</li>
                    <li>Interactive route maps</li>
                    <li>Real-time status updates</li>
                    <li>In-app chat with customers</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Box className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Customer Interface</CardTitle>
                  <CardDescription>Request and track deliveries with ease.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>New delivery request form</li>
                    <li>Job status tracking</li>
                    <li>Live tracking map</li>
                    <li>In-app chat with agents</li>
                    <li>Delivery confirmation</li>
                    <li>Order history and payments</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 DeliveryHub. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
