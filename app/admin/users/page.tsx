import { AdminHeader } from "@/components/admin-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Download, Plus, Search, UserCog } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const customers = [
  {
    id: "USR-001",
    name: "Jackson Miller",
    email: "jackson.miller@example.com",
    phone: "(555) 123-4567",
    orders: 12,
    joined: "2024-10-15",
    status: "Active",
  },
  {
    id: "USR-002",
    name: "Sophia Anderson",
    email: "sophia.anderson@example.com",
    phone: "(555) 234-5678",
    orders: 8,
    joined: "2024-11-02",
    status: "Active",
  },
  {
    id: "USR-003",
    name: "William Kim",
    email: "william.kim@example.com",
    phone: "(555) 345-6789",
    orders: 5,
    joined: "2024-11-18",
    status: "Active",
  },
  {
    id: "USR-004",
    name: "Emma Martinez",
    email: "emma.martinez@example.com",
    phone: "(555) 456-7890",
    orders: 15,
    joined: "2024-09-30",
    status: "Active",
  },
  {
    id: "USR-005",
    name: "Liam Johnson",
    email: "liam.johnson@example.com",
    phone: "(555) 567-8901",
    orders: 3,
    joined: "2024-12-05",
    status: "Inactive",
  },
]

const agents = [
  {
    id: "AGT-001",
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    phone: "(555) 987-6543",
    deliveries: 142,
    rating: 4.9,
    joined: "2024-08-12",
    status: "Active",
  },
  {
    id: "AGT-002",
    name: "Maria Garcia",
    email: "maria.garcia@example.com",
    phone: "(555) 876-5432",
    deliveries: 137,
    rating: 4.8,
    joined: "2024-09-05",
    status: "Active",
  },
  {
    id: "AGT-003",
    name: "David Lee",
    email: "david.lee@example.com",
    phone: "(555) 765-4321",
    deliveries: 129,
    rating: 4.9,
    joined: "2024-09-18",
    status: "Active",
  },
  {
    id: "AGT-004",
    name: "Sarah Wilson",
    email: "sarah.wilson@example.com",
    phone: "(555) 654-3210",
    deliveries: 124,
    rating: 4.7,
    joined: "2024-10-01",
    status: "Active",
  },
  {
    id: "AGT-005",
    name: "Michael Brown",
    email: "michael.brown@example.com",
    phone: "(555) 543-2109",
    deliveries: 118,
    rating: 4.8,
    joined: "2024-10-15",
    status: "Suspended",
  },
]

const statusColorMap: Record<string, string> = {
  Active: "bg-green-100 text-green-800 hover:bg-green-100/80",
  Inactive: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100/80",
  Suspended: "bg-red-100 text-red-800 hover:bg-red-100/80",
}

export default function UsersPage() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <AdminHeader title="User Management" />

      <Tabs defaultValue="customers" className="space-y-4">
        <TabsList>
          <TabsTrigger value="customers">Customers</TabsTrigger>
          <TabsTrigger value="agents">Delivery Agents</TabsTrigger>
          <TabsTrigger value="admins">Administrators</TabsTrigger>
        </TabsList>

        <TabsContent value="customers" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <div>
                <CardTitle>Customers</CardTitle>
                <CardDescription>Manage customer accounts and information.</CardDescription>
              </div>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Customer
              </Button>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-4">
                <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 md:items-center">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Search customers..." className="w-full pl-8" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Select defaultValue="all">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filter by status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Statuses</SelectItem>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="inactive">Inactive</SelectItem>
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
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead className="hidden md:table-cell">Phone</TableHead>
                        <TableHead>Orders</TableHead>
                        <TableHead className="hidden md:table-cell">Joined</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {customers.map((customer) => (
                        <TableRow key={customer.id}>
                          <TableCell className="font-medium">{customer.id}</TableCell>
                          <TableCell>{customer.name}</TableCell>
                          <TableCell>{customer.email}</TableCell>
                          <TableCell className="hidden md:table-cell">{customer.phone}</TableCell>
                          <TableCell>{customer.orders}</TableCell>
                          <TableCell className="hidden md:table-cell">{customer.joined}</TableCell>
                          <TableCell>
                            <Badge className={statusColorMap[customer.status]}>{customer.status}</Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <UserCog className="h-4 w-4" />
                              <span className="sr-only">Edit</span>
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

        <TabsContent value="agents" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <div>
                <CardTitle>Delivery Agents</CardTitle>
                <CardDescription>Manage delivery agent accounts and performance.</CardDescription>
              </div>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Agent
              </Button>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-4">
                <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 md:items-center">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Search agents..." className="w-full pl-8" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Select defaultValue="all">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filter by status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Statuses</SelectItem>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="suspended">Suspended</SelectItem>
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
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead className="hidden md:table-cell">Phone</TableHead>
                        <TableHead>Deliveries</TableHead>
                        <TableHead>Rating</TableHead>
                        <TableHead className="hidden md:table-cell">Joined</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {agents.map((agent) => (
                        <TableRow key={agent.id}>
                          <TableCell className="font-medium">{agent.id}</TableCell>
                          <TableCell>{agent.name}</TableCell>
                          <TableCell>{agent.email}</TableCell>
                          <TableCell className="hidden md:table-cell">{agent.phone}</TableCell>
                          <TableCell>{agent.deliveries}</TableCell>
                          <TableCell>{agent.rating}</TableCell>
                          <TableCell className="hidden md:table-cell">{agent.joined}</TableCell>
                          <TableCell>
                            <Badge className={statusColorMap[agent.status]}>{agent.status}</Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <UserCog className="h-4 w-4" />
                              <span className="sr-only">Edit</span>
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

        <TabsContent value="admins" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Administrators</CardTitle>
              <CardDescription>Manage administrator accounts and permissions.</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <p className="text-muted-foreground">Administrator management will appear here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
