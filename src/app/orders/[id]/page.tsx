import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import OrderInfo from "./components/OrderInfo";
import OrderSummary from "./components/OrderSummary";
import { OrderItems } from "./components/OrderItems";

const getOrderById = (id: string) => {
  // For demonstration purposes, we'll generate a random order
  return {
    id,
    paid: [true, false][Math.floor(Math.random() * 2)],
    discount: (Math.random() * 20),
    taxes: (Math.random() * 10),
    subtotal: (Math.random() * 200 + 50),
    total: (Math.random() * 250 + 50),
    created: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString().split('T')[0],
    items: Array.from({ length: Math.floor(Math.random() * 5) + 1 }, (_, j) => ({
      name: `Item ${j + 1}`,
      quantity: Math.floor(Math.random() * 5) + 1,
      price_per_unit: (Math.random() * 50 + 10),
      total: (Math.random() * 250 + 50),
    })),
    rounds: Array.from({ length: Math.floor(Math.random() * 3) + 1 }, (_, k) => ({
      name: `Round ${k + 1}`,
      status: ['Completed', 'In Progress', 'Pending'][Math.floor(Math.random() * 3)],
    })),
  }
}

const OrderDetailPage = ({ params }: {
  params: { id: string }
}) => {
  const order = getOrderById(params.id);

  if (!order) {
    notFound()
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