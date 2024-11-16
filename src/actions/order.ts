export interface IOrderItem {
  name: string;
  price_per_unit: number;
  quantity: number;
  total: number;
}

interface IProductItem {
  name: string;
  quantity: number;
}

interface IRoundItem {
  created: Date;
  items: IProductItem[];
}

export interface IOrder {
  id: number;
  created: string;
  paid: boolean;
  items: IOrderItem[];
  rounds: IRoundItem[];
  discount: number;
  taxes: number;
  subtotal: number;
  total: number;
}

export async function getAllOrders(): Promise<IOrder[]> {
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

export async function geOrderById(id: number): Promise<IOrder|null> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/orders/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    const data = await response.json();

    if (response.status !== 200) {
      const { detail } = data;
      throw new Error(detail);
    }

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}