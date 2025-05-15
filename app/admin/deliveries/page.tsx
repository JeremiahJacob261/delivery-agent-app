import { AdminHeader } from "@/components/admin-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Download, MapPin, Search } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const deliveries = [
  {
    id: "DEL-001",
    orderId: "ORD-001",
    agent: "Alex Johnson",
    customer: "Jackson Miller",
    pickup: "123 Main St, Anytown, USA",
    dropoff: "456 Oak Ave, Somewhere, USA",
    status: "In Transit",
    date: "2025-01-10",
  },
  {
    id: "DEL-002",
    orderId: "ORD-002",
    agent: "Maria Garcia",
    customer: "Sophia Anderson",
    pickup: "789 Pine St, Nowhere, USA",
    dropoff: "321 Maple Dr, Everywhere, USA",
    status: "Assigned",
    date: "2025-01-09",
  },
  {
    id: "DEL-003",
    orderId: "ORD-003",
    agent: "David Lee",
    customer: "William Kim",
    pickup: "555 Cedar Ln, Anywhere, USA",
    dropoff: "777 Birch Rd, Someplace, USA",
    status: "Completed",
    date: "2025-01-09",
  },
  {
    id: "DEL-004",
    orderId: "ORD-005",
    agent: "Sarah Wilson",
    customer: "Liam Johnson",
    pickup: "888 Elm St, Othertown, USA",
    dropoff: "999 Walnut Ave, Elsewhere, USA",
    status: "Completed",
    date: "2025-01-08",
  },
  {
    id: "DEL-005",
    orderId: "ORD-006",
    agent: "Michael Brown",
    customer: "Olivia Brown",
    pickup: "444 Spruce St, Noplace, USA",
    dropoff: "222 Fir Ln, Somewhereelse, USA",
    status: "In Transit",
    date: "2025-01-07",
  },
  {
    id: "DEL-006",
    orderId: "ORD-007",
    agent: "Jennifer Davis",
    customer: "Noah Davis",
    pickup: "111 Ash Dr, Newtown, USA",
    dropoff: "333 Willow Ct, Oldtown, USA",
    status: "Assigned",
    date: "2025-01-07",
  },
  {
    id: "DEL-007",
    orderId: "ORD-008",
    agent: "Robert Martinez",
    customer: "Ava Wilson",
    pickup: "666 Poplar Rd, Uptown, USA",
    dropoff: "888 Sycamore Ave, Downtown, USA",
    status: "Completed",
    date: "2025-01-06",
  },
  {
    id: "DEL-008",
    orderId: "ORD-009",
    agent: "Emily Taylor",
    customer: "James Taylor",
    pickup: "777 Redwood Ln, Crosstown, USA",
    dropoff: "555 Sequoia St, Midtown, USA",
    status: "In Transit",
    date: "2025-01-06",
  },
  {
    id: "DEL-009",
    orderId: "ORD-010",
    agent: "Daniel Thomas",
    customer: "Isabella Thomas",
    pickup: "222 Juniper Rd, Westside, USA",
    dropoff: "444 Cypress Ave, Eastside, USA",
    status: "Completed",
    date: "2025-01-05",
  },
  {
    id: "DEL-010",
    orderId: "ORD-011",
    agent: "Unassigned",
    customer: "Ethan Clark",
    pickup: "333 Magnolia Blvd, Northside, USA",
    dropoff: "111 Chestnut St, Southside, USA",
    status: "Pending",
    date: "2025-01-05",
  },
]

const statusColorMap: Record<string, string> = {
  Pending: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100/80",
  Assigned: "bg-blue-100 text-blue-800 hover:bg-blue-100/80",
  "In Transit": "bg-purple-100 text-purple-800 hover:bg-purple-100/80",
  Completed: "bg-green-100 text-green-800 hover:bg-green-100/80",
  Failed: "bg-red-100 text-red-800 hover:bg-red-100/80",
}

export default function DeliveriesPage() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <AdminHeader title="Deliveries" />
      <Card>
        <CardHeader>
          <CardTitle>Delivery Management</CardTitle>
          <CardDescription>Track and manage all deliveries in the system.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 md:items-center">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search deliveries..." className="w-full pl-8" />
              </div>
              <div className="flex items-center space-x-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="assigned">Assigned</SelectItem>
                    <SelectItem value="in-transit">In Transit</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
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
                    <TableHead>ID</TableHead>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Agent</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="hidden md:table-cell">Location</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {deliveries.map((delivery) => (
                    <TableRow key={delivery.id}>
                      <TableCell className="font-medium">{delivery.id}</TableCell>
                      <TableCell>{delivery.orderId}</TableCell>
                      <TableCell>{delivery.agent}</TableCell>
                      <TableCell>{delivery.customer}</TableCell>
                      <TableCell>
                        <Badge className={statusColorMap[delivery.status]}>{delivery.status}</Badge>
                      </TableCell>
                      <TableCell>{delivery.date}</TableCell>
                      <TableCell className="hidden md:table-cell">
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <MapPin className="h-4 w-4" />
                          <span className="sr-only">View on map</span>
                        </Button>
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
    </div>
  )
}
