import { AdminHeader } from "@/components/admin-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, CreditCard, Download, Search } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const transactions = [
  {
    id: "TRX-001",
    orderId: "ORD-001",
    customer: "Jackson Miller",
    amount: "$24.99",
    method: "Credit Card",
    date: "2025-01-10",
    status: "Completed",
  },
  {
    id: "TRX-002",
    orderId: "ORD-002",
    customer: "Sophia Anderson",
    amount: "$42.50",
    method: "PayPal",
    date: "2025-01-09",
    status: "Completed",
  },
  {
    id: "TRX-003",
    orderId: "ORD-003",
    customer: "William Kim",
    amount: "$18.75",
    method: "Credit Card",
    date: "2025-01-09",
    status: "Completed",
  },
  {
    id: "TRX-004",
    orderId: "ORD-004",
    customer: "Emma Martinez",
    amount: "$65.20",
    method: "Debit Card",
    date: "2025-01-08",
    status: "Refunded",
  },
  {
    id: "TRX-005",
    orderId: "ORD-005",
    customer: "Liam Johnson",
    amount: "$37.99",
    method: "Credit Card",
    date: "2025-01-08",
    status: "Completed",
  },
  {
    id: "TRX-006",
    orderId: "ORD-006",
    customer: "Olivia Brown",
    amount: "$29.50",
    method: "PayPal",
    date: "2025-01-07",
    status: "Completed",
  },
  {
    id: "TRX-007",
    orderId: "ORD-007",
    customer: "Noah Davis",
    amount: "$52.25",
    method: "Credit Card",
    date: "2025-01-07",
    status: "Pending",
  },
  {
    id: "TRX-008",
    orderId: "ORD-008",
    customer: "Ava Wilson",
    amount: "$19.99",
    method: "Debit Card",
    date: "2025-01-06",
    status: "Completed",
  },
  {
    id: "TRX-009",
    orderId: "ORD-009",
    customer: "James Taylor",
    amount: "$45.75",
    method: "Credit Card",
    date: "2025-01-06",
    status: "Completed",
  },
  {
    id: "TRX-010",
    orderId: "ORD-010",
    customer: "Isabella Thomas",
    amount: "$33.50",
    method: "PayPal",
    date: "2025-01-05",
    status: "Completed",
  },
]

const payouts = [
  {
    id: "PAY-001",
    agent: "Alex Johnson",
    amount: "$1,245.50",
    deliveries: 42,
    date: "2025-01-15",
    status: "Completed",
  },
  {
    id: "PAY-002",
    agent: "Maria Garcia",
    amount: "$1,180.75",
    deliveries: 38,
    date: "2025-01-15",
    status: "Completed",
  },
  {
    id: "PAY-003",
    agent: "David Lee",
    amount: "$1,050.25",
    deliveries: 35,
    date: "2025-01-15",
    status: "Pending",
  },
  {
    id: "PAY-004",
    agent: "Sarah Wilson",
    amount: "$975.00",
    deliveries: 32,
    date: "2025-01-15",
    status: "Completed",
  },
  {
    id: "PAY-005",
    agent: "Michael Brown",
    amount: "$890.50",
    deliveries: 30,
    date: "2025-01-15",
    status: "Failed",
  },
]

const statusColorMap: Record<string, string> = {
  Completed: "bg-green-100 text-green-800 hover:bg-green-100/80",
  Pending: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100/80",
  Failed: "bg-red-100 text-red-800 hover:bg-red-100/80",
  Refunded: "bg-blue-100 text-blue-800 hover:bg-blue-100/80",
}

export default function PaymentsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <AdminHeader title="Payments" />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Agent Payouts</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$32,450.75</div>
            <p className="text-xs text-muted-foreground">+15.3% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Platform Fees</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,781.14</div>
            <p className="text-xs text-muted-foreground">+18.7% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Order Value</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$37.50</div>
            <p className="text-xs text-muted-foreground">+$2.25 from last month</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="transactions" className="space-y-4">
        <TabsList>
          <TabsTrigger value="transactions">Customer Transactions</TabsTrigger>
          <TabsTrigger value="payouts">Agent Payouts</TabsTrigger>
        </TabsList>

        <TabsContent value="transactions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Transaction History</CardTitle>
              <CardDescription>View all customer payment transactions.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-4">
                <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 md:items-center">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Search transactions..." className="w-full pl-8" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Select defaultValue="all">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filter by status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Statuses</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="refunded">Refunded</SelectItem>
                      </SelectContent>
                    </Select>
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
                        <TableHead>Customer</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead className="hidden md:table-cell">Payment Method</TableHead>
                        <TableHead className="hidden md:table-cell">Date</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {transactions.map((transaction) => (
                        <TableRow key={transaction.id}>
                          <TableCell className="font-medium">{transaction.id}</TableCell>
                          <TableCell>{transaction.orderId}</TableCell>
                          <TableCell>{transaction.customer}</TableCell>
                          <TableCell>{transaction.amount}</TableCell>
                          <TableCell className="hidden md:table-cell">{transaction.method}</TableCell>
                          <TableCell className="hidden md:table-cell">{transaction.date}</TableCell>
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

        <TabsContent value="payouts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Agent Payouts</CardTitle>
              <CardDescription>View all payments made to delivery agents.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-4">
                <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 md:items-center">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Search payouts..." className="w-full pl-8" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Select defaultValue="all">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filter by status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Statuses</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="failed">Failed</SelectItem>
                      </SelectContent>
                    </Select>
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
                        <TableHead>Payout ID</TableHead>
                        <TableHead>Agent</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Deliveries</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {payouts.map((payout) => (
                        <TableRow key={payout.id}>
                          <TableCell className="font-medium">{payout.id}</TableCell>
                          <TableCell>{payout.agent}</TableCell>
                          <TableCell>{payout.amount}</TableCell>
                          <TableCell>{payout.deliveries}</TableCell>
                          <TableCell>{payout.date}</TableCell>
                          <TableCell>
                            <Badge className={statusColorMap[payout.status]}>{payout.status}</Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm">
                              View
                            </Button>
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
      </Tabs>
    </div>
  )
}
