interface OrderItem {
  name: string;
  price_per_unit: number;
  total: number;
}

interface ProductItem {
  name: string;
  quantity: number;
}

interface RoundItem {
  created: Date;
  items: ProductItem[];
}

export interface Order {
  id: number;
  created: string;
  paid: boolean;
  items: OrderItem[];
  rounds: RoundItem[];
  discount: number;
  taxes: number;
  subtotal: number;
  total: number;
}

export async function getAllOrders(): Promise<Order[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/orders`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    return response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}