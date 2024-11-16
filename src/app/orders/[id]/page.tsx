import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import OrderInfo from "./components/OrderInfo";
import OrderSummary from "./components/OrderSummary";
import { OrderItems } from "./components/OrderItems";
import { geOrderById , IOrder} from "@/actions/order";


const OrderDetailPage = async({ params }: {
  params: { id: string }
}) => {
  const order: IOrder | null = await geOrderById(parseInt(params.id, 10));

  console.log(order)
  if (!order) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Order Details: {order.id}</h1>
        <Link href="/orders" passHref>
          <Button variant="outline">Back to Orders</Button>
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <OrderInfo
          id={order.id}
          paid={order.paid}
          created={order.created}
        />

        <OrderSummary
          subtotal={order.subtotal}
          discount={order.discount}
          taxes={order.taxes}
          total={order.total}
        />

        <OrderItems items={order.items} />
      </div>
    </div>
  )
}

export default OrderDetailPage