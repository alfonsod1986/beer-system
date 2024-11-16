import { Suspense } from "react";
import OrderList from "./components/OrderList";
import OrderListSkeleton from "./components/OrderListSkeleton";

const OrdersPage = async () => {
  return (
    <div className="container mx-auto px-4 py-4">
      <h1 className="text-2xl font-bold mb-6">Orders</h1>
      <Suspense fallback={<OrderListSkeleton />}>
        <OrderList />
      </Suspense>
    </div>
  );
};

export default OrdersPage;
