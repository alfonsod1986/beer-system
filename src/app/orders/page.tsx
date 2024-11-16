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
import { getAllOrders, IOrder } from "@/actions/order";


const OrdersPage = async() => {
  const orders: IOrder[] = await getAllOrders();

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
          {orders.map((order) => (
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
              <TableCell className="hidden md:table-cell">{order.created.split('T')[0]}</TableCell>
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