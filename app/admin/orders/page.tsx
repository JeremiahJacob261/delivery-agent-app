import { AdminHeader } from "@/components/admin-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Download, Search } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const orders = [
  {
    id: "ORD-001",
    customer: "Jackson Miller",
    date: "2025-01-10",
    status: "Pending",
    total: "$24.99",
    items: "2",
    address: "123 Main St, Anytown, USA",
  },
  {
    id: "ORD-002",
    customer: "Sophia Anderson",
    date: "2025-01-09",
    status: "Processing",
    total: "$42.50",
    items: "3",
    address: "456 Oak Ave, Somewhere, USA",
  },
  {
    id: "ORD-003",
    customer: "William Kim",
    date: "2025-01-09",
    status: "Delivered",
    total: "$18.75",
    items: "1",
    address: "789 Pine St, Nowhere, USA",
  },
  {
    id: "ORD-004",
    customer: "Emma Martinez",
    date: "2025-01-08",
    status: "Cancelled",
    total: "$65.20",
    items: "4",
    address: "321 Maple Dr, Everywhere, USA",
  },
  {
    id: "ORD-005",
    customer: "Liam Johnson",
    date: "2025-01-08",
    status: "Delivered",
    total: "$37.99",
    items: "2",
    address: "555 Cedar Ln, Anywhere, USA",
  },
  {
    id: "ORD-006",
    customer: "Olivia Brown",
    date: "2025-01-07",
    status: "Processing",
    total: "$29.50",
    items: "2",
    address: "777 Birch Rd, Someplace, USA",
  },
  {
    id: "ORD-007",
    customer: "Noah Davis",
    date: "2025-01-07",
    status: "Pending",
    total: "$52.25",
    items: "3",
    address: "888 Elm St, Othertown, USA",
  },
  {
    id: "ORD-008",
    customer: "Ava Wilson",
    date: "2025-01-06",
    status: "Delivered",
    total: "$19.99",
    items: "1",
    address: "999 Walnut Ave, Elsewhere, USA",
  },
  {
    id: "ORD-009",
    customer: "James Taylor",
    date: "2025-01-06",
    status: "Processing",
    total: "$45.75",
    items: "3",
    address: "444 Spruce St, Noplace, USA",
  },
  {
    id: "ORD-010",
    customer: "Isabella Thomas",
    date: "2025-01-05",
    status: "Delivered",
    total: "$33.50",
    items: "2",
    address: "222 Fir Ln, Somewhereelse, USA",
  },
]

const statusColorMap: Record<string, string> = {
  Pending: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100/80",
  Processing: "bg-blue-100 text-blue-800 hover:bg-blue-100/80",
  Delivered: "bg-green-100 text-green-800 hover:bg-green-100/80",
  Cancelled: "bg-red-100 text-red-800 hover:bg-red-100/80",
}

export default function OrdersPage() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <AdminHeader title="Orders" />
      <Card>
        <CardHeader>
          <CardTitle>Order Management</CardTitle>
          <CardDescription>View and manage all customer orders in the system.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 md:items-center">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search orders..." className="w-full pl-8" />
              </div>
              <div className="flex items-center space-x-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="processing">Processing</SelectItem>
                    <SelectItem value="delivered">Delivered</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
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
                    <TableHead>Order ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Items</TableHead>
                    <TableHead className="hidden md:table-cell">Shipping Address</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>{order.customer}</TableCell>
                      <TableCell>{order.date}</TableCell>
                      <TableCell>
                        <Badge className={statusColorMap[order.status]}>{order.status}</Badge>
                      </TableCell>
                      <TableCell>{order.total}</TableCell>
                      <TableCell>{order.items}</TableCell>
                      <TableCell className="hidden md:table-cell max-w-[200px] truncate">{order.address}</TableCell>
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
    </div>
  )
}
