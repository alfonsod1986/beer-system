import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const allOrders = Array.from({ length: 10 }, (_, i) => ({
  id: `ORD${String(i + 1).padStart(3, '0')}`,
  paid: [true, false][Math.floor(Math.random() * 2)],
  discount: (Math.random() * 20).toFixed(2),
  taxes: (Math.random() * 10).toFixed(2),
  subtotal: (Math.random() * 200 + 50).toFixed(2),
  total: (Math.random() * 250 + 50).toFixed(2),
  created: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString().split('T')[0],
}))

const OrdersPage = () => {
  return (
    <div className="container mx-auto px-4 py-4">
      <h1 className="text-2xl font-bold mb-6">Orders</h1>
      <Table>
        <TableCaption>A list of your recent orders</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Order</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="hidden md:table-cell">Date</TableHead>
            <TableHead>Taxes</TableHead>
            <TableHead>Discount</TableHead>
            <TableHead>Subtotal</TableHead>
            <TableHead>Total</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allOrders.map((order) => (
            <TableRow key={order.id}>
              <TableCell className="font-medium">{order.id}</TableCell>
              <TableCell>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  order.paid ? 'bg-green-100 text-green-800' :
                  
                  'bg-red-100 text-red-800'
                }`}>
                  {order.paid ? 'Paid': 'Unpaid'} 
                </span>
              </TableCell>
              <TableCell className="hidden md:table-cell">{order.created}</TableCell>
              <TableCell>${order.taxes}</TableCell>
              <TableCell>${order.discount}</TableCell>
              <TableCell>${order.subtotal}</TableCell>
              <TableCell>${order.total}</TableCell>
              <TableCell className="text-right">
                <Link href={`/orders/${order.id}`} passHref>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default OrdersPage