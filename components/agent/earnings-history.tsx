import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const payments = [
  {
    id: "PAY-001",
    date: "2025-01-01",
    amount: "$875.25",
    deliveries: 35,
    period: "Dec 16-31, 2024",
    status: "Completed",
  },
  {
    id: "PAY-002",
    date: "2024-12-15",
    amount: "$925.50",
    deliveries: 38,
    period: "Dec 1-15, 2024",
    status: "Completed",
  },
  {
    id: "PAY-003",
    date: "2024-12-01",
    amount: "$850.75",
    deliveries: 34,
    period: "Nov 16-30, 2024",
    status: "Completed",
  },
  {
    id: "PAY-004",
    date: "2024-11-15",
    amount: "$900.25",
    deliveries: 37,
    period: "Nov 1-15, 2024",
    status: "Completed",
  },
  {
    id: "PAY-005",
    date: "2024-11-01",
    amount: "$825.50",
    deliveries: 33,
    period: "Oct 16-31, 2024",
    status: "Completed",
  },
]

const statusColorMap: Record<string, string> = {
  Completed: "bg-green-100 text-green-800 hover:bg-green-100/80",
  Pending: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100/80",
  Failed: "bg-red-100 text-red-800 hover:bg-red-100/80",
}

export function EarningsHistory() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Payment ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Deliveries</TableHead>
            <TableHead className="hidden md:table-cell">Period</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {payments.map((payment) => (
            <TableRow key={payment.id}>
              <TableCell className="font-medium">{payment.id}</TableCell>
              <TableCell>{payment.date}</TableCell>
              <TableCell>{payment.amount}</TableCell>
              <TableCell>{payment.deliveries}</TableCell>
              <TableCell className="hidden md:table-cell">{payment.period}</TableCell>
              <TableCell>
                <Badge className={statusColorMap[payment.status]}>{payment.status}</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
