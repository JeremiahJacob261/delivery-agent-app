import { CustomerHeader } from "@/components/customer-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, CreditCard, Download, Search } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PaymentMethodForm } from "@/components/customer/payment-method-form"

const transactions = [
  {
    id: "TRX-001",
    orderId: "ORD-001",
    date: "2025-01-10",
    amount: "$24.99",
    method: "Credit Card (****4567)",
    status: "Completed",
  },
  {
    id: "TRX-002",
    orderId: "ORD-002",
    date: "2025-01-09",
    amount: "$42.50",
    method: "PayPal",
    status: "Completed",
  },
  {
    id: "TRX-003",
    orderId: "ORD-003",
    date: "2025-01-09",
    amount: "$18.75",
    method: "Credit Card (****4567)",
    status: "Completed",
  },
  {
    id: "TRX-004",
    orderId: "ORD-004",
    date: "2025-01-08",
    amount: "$65.20",
    method: "Debit Card (****7890)",
    status: "Refunded",
  },
  {
    id: "TRX-005",
    orderId: "ORD-005",
    date: "2025-01-08",
    amount: "$37.99",
    method: "Credit Card (****4567)",
    status: "Completed",
  },
  {
    id: "TRX-006",
    orderId: "ORD-006",
    date: "2025-01-07",
    amount: "$29.50",
    method: "PayPal",
    status: "Completed",
  },
  {
    id: "TRX-007",
    orderId: "ORD-007",
    date: "2025-01-07",
    amount: "$52.25",
    method: "Credit Card (****4567)",
    status: "Pending",
  },
]

const statusColorMap: Record<string, string> = {
  Completed: "bg-green-100 text-green-800 hover:bg-green-100/80",
  Pending: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100/80",
  Refunded: "bg-blue-100 text-blue-800 hover:bg-blue-100/80",
  Failed: "bg-red-100 text-red-800 hover:bg-red-100/80",
}

export default function PaymentsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <CustomerHeader title="Payments" />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$271.18</div>
            <p className="text-xs text-muted-foreground">Across 7 deliveries</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Order</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$38.74</div>
            <p className="text-xs text-muted-foreground">Per delivery</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Saved on Fees</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45.00</div>
            <p className="text-xs text-muted-foreground">With membership</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="history" className="space-y-4">
        <TabsList>
          <TabsTrigger value="history">Payment History</TabsTrigger>
          <TabsTrigger value="methods">Payment Methods</TabsTrigger>
        </TabsList>

        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Transaction History</CardTitle>
              <CardDescription>View your payment history for deliveries</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-4">
                <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 md:items-center">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Search transactions..." className="w-full pl-8" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="icon">
                      <Download className="h-4 w-4" />
                      <span className="sr-only">Download</span>
                    </Button>
                  </div>
                </div>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Transaction ID</TableHead>
                        <TableHead>Order ID</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead className="hidden md:table-cell">Payment Method</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {transactions.map((transaction) => (
                        <TableRow key={transaction.id}>
                          <TableCell className="font-medium">{transaction.id}</TableCell>
                          <TableCell>{transaction.orderId}</TableCell>
                          <TableCell>{transaction.date}</TableCell>
                          <TableCell>{transaction.amount}</TableCell>
                          <TableCell className="hidden md:table-cell">{transaction.method}</TableCell>
                          <TableCell>
                            <Badge className={statusColorMap[transaction.status]}>{transaction.status}</Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <div className="flex items-center justify-end space-x-2">
                  <Button variant="outline" size="sm">
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Previous
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="methods" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>Manage your payment methods</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="rounded-full bg-muted p-2">
                        <CreditCard className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">Visa ending in 4567</p>
                        <p className="text-sm text-muted-foreground">Expires 05/2026</p>
                      </div>
                    </div>
                    <Badge>Default</Badge>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="rounded-full bg-muted p-2">
                        <CreditCard className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">Mastercard ending in 7890</p>
                        <p className="text-sm text-muted-foreground">Expires 09/2025</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="rounded-full bg-muted p-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-paypal"
                        >
                          <path d="M7 11.5h2a2.5 2.5 0 1 0 0-5H7Z" />
                          <path d="M7 11.5v-5a6.5 6.5 0 0 1 6.5-6.5h1a3.5 3.5 0 0 1 3.5 3.5v2.5" />
                          <path d="M7 11.5v3a6.5 6.5 0 0 0 6.5 6.5h4.5" />
                          <path d="M19.5 16.5h-2a2.5 2.5 0 1 1 0-5h2" />
                          <path d="M19.5 16.5v-5a6.5 6.5 0 0 0-6.5-6.5h-1a3.5 3.5 0 0 0-3.5 3.5v2.5" />
                          <path d="M19.5 16.5v3a6.5 6.5 0 0 1-6.5 6.5h-4.5" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">PayPal</p>
                        <p className="text-sm text-muted-foreground">jackson.miller@example.com</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>

                <PaymentMethodForm />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
