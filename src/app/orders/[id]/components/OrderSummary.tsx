import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  subtotal: number;
  discount: number;
  taxes: number;
  total: number;
}
const OrderSummary = ({ subtotal, discount, taxes, total}: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <dl className="grid grid-cols-2 gap-4">
          <div>
            <dt className="font-semibold">Subtotal</dt>
            <dd>${subtotal.toFixed(2)}</dd>
          </div>
          <div>
            <dt className="font-semibold">Discount</dt>
            <dd>${discount.toFixed(2)}</dd>
          </div>
          <div>
            <dt className="font-semibold">Taxes</dt>
            <dd>${taxes.toFixed(2)}</dd>
          </div>
          <div>
            <dt className="font-semibold">Total</dt>
            <dd className="text-lg font-bold">${total.toFixed(2)}</dd>
          </div>
        </dl>
      </CardContent>
    </Card>
  )
}

export default OrderSummary