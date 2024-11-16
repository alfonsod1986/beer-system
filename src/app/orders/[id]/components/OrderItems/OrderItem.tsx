import {
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";

interface Props {
  name: string;
  quantity: number;
  price_per_unit: number;
  total: number;
}

const OrderItem = ({ name, quantity, price_per_unit, total}: Props) => {
  return (
    <TableBody>
      <TableRow>
        <TableCell>{name}</TableCell>
        <TableCell>{quantity}</TableCell>
        <TableCell>${price_per_unit.toFixed(2)}</TableCell>
        <TableCell className="text-right">${total.toFixed(2)}</TableCell>
      </TableRow>
    </TableBody>
  )
}

export default OrderItem