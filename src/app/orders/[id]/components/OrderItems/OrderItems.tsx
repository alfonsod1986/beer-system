import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import OrderItem from "./OrderItem";
import { IOrderItem } from "@/actions/order";

interface Props {
  items: IOrderItem[],
}
const OrderItems = ({ items }: Props) => {
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Items</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Item</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="text-right">Total</TableHead>
            </TableRow>
          </TableHeader>
          {items.map((item, index) => (
            <OrderItem
              key={index}
              name={item.name}
              quantity={item.quantity}
              price_per_unit={item.price_per_unit}
              total={item.total}
            />
          ))}
        </Table>
      </CardContent>
    </Card>
  )
}

export default OrderItems