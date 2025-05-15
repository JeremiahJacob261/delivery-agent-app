import { AdminHeader } from "@/components/admin-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Download, Search } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const logs = [
  {
    id: "LOG-001",
    timestamp: "2025-01-10 14:32:45",
    user: "Admin (admin@example.com)",
    action: "User Update",
    details: "Updated agent status for AGT-005 to Suspended",
    level: "Info",
  },
  {
    id: "LOG-002",
    timestamp: "2025-01-10 13:15:22",
    user: "System",
    action: "Payment Processing",
    details: "Processed payment for order ORD-001",
    level: "Info",
  },
  {
    id: "LOG-003",
    timestamp: "2025-01-10 12:45:10",
    user: "Agent (alex.johnson@example.com)",
    action: "Delivery Status",
    details: "Updated delivery DEL-001 status to Completed",
    level: "Info",
  },
  {
    id: "LOG-004",
    timestamp: "2025-01-10 11:30:05",
    user: "Customer (jackson.miller@example.com)",
    action: "Order Creation",
    details: "Created new order ORD-012",
    level: "Info",
  },
  {
    id: "LOG-005",
    timestamp: "2025-01-10 10:22:18",
    user: "System",
    action: "Authentication",
    details: "Failed login attempt for user admin@example.com",
    level: "Warning",
  },
  {
    id: "LOG-006",
    timestamp: "2025-01-10 09:15:33",
    user: "Admin (admin@example.com)",
    action: "System Configuration",
    details: "Updated delivery fee structure",
    level: "Info",
  },
  {
    id: "LOG-007",
    timestamp: "2025-01-10 08:45:12",
    user: "System",
    action: "Database",
    details: "Scheduled backup completed successfully",
    level: "Info",
  },
  {
    id: "LOG-008",
    timestamp: "2025-01-10 07:30:55",
    user: "System",
    action: "API",
    details: "External API connection timeout",
    level: "Error",
  },
  {
    id: "LOG-009",
    timestamp: "2025-01-10 06:20:40",
    user: "Agent (maria.garcia@example.com)",
    action: "Delivery Assignment",
    details: "Accepted delivery job for order ORD-008",
    level: "Info",
  },
  {
    id: "LOG-010",
    timestamp: "2025-01-10 05:10:25",
    user: "System",
    action: "Notification",
    details: "Sent delivery confirmation email to customer emma.martinez@example.com",
    level: "Info",
  },
]

const levelColorMap: Record<string, string> = {
  Info: "bg-blue-100 text-blue-800 hover:bg-blue-100/80",
  Warning: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100/80",
  Error: "bg-red-100 text-red-800 hover:bg-red-100/80",
}

export default function LogsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <AdminHeader title="System Logs" />

      <Card>
        <CardHeader>
          <CardTitle>Audit Trail</CardTitle>
          <CardDescription>View system logs and user activities.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 md:items-center">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search logs..." className="w-full pl-8" />
              </div>
              <div className="flex items-center space-x-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    <SelectItem value="info">Info</SelectItem>
                    <SelectItem value="warning">Warning</SelectItem>
                    <SelectItem value="error">Error</SelectItem>
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
                    <TableHead>Timestamp</TableHead>
                    <TableHead>User</TableHead>
                    <TableHead>Action</TableHead>
                    <TableHead className="hidden md:table-cell">Details</TableHead>
                    <TableHead>Level</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {logs.map((log) => (
                    <TableRow key={log.id}>
                      <TableCell className="font-medium">{log.id}</TableCell>
                      <TableCell>{log.timestamp}</TableCell>
                      <TableCell>{log.user}</TableCell>
                      <TableCell>{log.action}</TableCell>
                      <TableCell className="hidden md:table-cell max-w-[300px] truncate">{log.details}</TableCell>
                      <TableCell>
                        <Badge className={levelColorMap[log.level]}>{log.level}</Badge>
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
