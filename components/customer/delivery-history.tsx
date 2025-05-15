import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const deliveries = [
  {
    id: "ORD-003",
    date: "2025-01-09",
    from: "555 Cedar Ln, Anywhere, USA",
    to: "777 Birch Rd, Someplace, USA",
    status: "Delivered",
    cost: "$22.00",
  },
  {
    id: "ORD-004",
    date: "2025-01-08",
    from: "888 Elm St, Othertown, USA",
    to: "999 Walnut Ave, Elsewhere, USA",
    status: "Cancelled",
    cost: "$15.25",
  },
  {
    id: "ORD-005",
    date: "2025-01-07",
    from: "444 Spruce St, Noplace, USA",
    to: "222 Fir Ln, Somewhereelse, USA",
    status: "Delivered",
    cost: "$27.50",
  },
  {
    id: "ORD-006",
    date: "2025-01-06",
    from: "111 Ash Dr, Newtown, USA",
    to: "333 Willow Ct, Oldtown, USA",
    status: "Delivered",
    cost: "$19.75",
  },
  {
    id: "ORD-007",
    date: "2025-01-05",
    from: "666 Poplar Rd, Uptown, USA",
    to: "888 Sycamore Ave, Downtown, USA",
    status: "Delivered",
    cost: "$31.25",
  },
]

const statusColorMap: Record<string, string> = {
  Pending: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100/80",
  "In Transit": "bg-blue-100 text-blue-800 hover:bg-blue-100/80",
  Delivered: "bg-green-100 text-green-800 hover:bg-green-100/80",
  Cancelled: "bg-red-100 text-red-800 hover:bg-red-100/80",
}

export function DeliveryHistory() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="hidden md:table-cell">From</TableHead>
            <TableHead className="hidden md:table-cell">To</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Cost</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {deliveries.map((delivery) => (
            <TableRow key={delivery.id}>
              <TableCell className="font-medium">{delivery.id}</TableCell>
              <TableCell>{delivery.date}</TableCell>
              <TableCell className="hidden md:table-cell max-w-[150px] truncate">{delivery.from}</TableCell>
              <TableCell className="hidden md:table-cell max-w-[150px] truncate">{delivery.to}</TableCell>
              <TableCell>
                <Badge className={statusColorMap[delivery.status]}>{delivery.status}</Badge>
              </TableCell>
              <TableCell>{delivery.cost}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
