import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col space-y-6">
      <section className="text-center">
        <h1 className="text-3xl font-bold tracking-tight">Welcome</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Manage your orders, analyze your sales and grow your business.
        </p>
      </section>

      <section className="flex flex-wrap gap-4">
        <Card className="flex-1 min-w-[200px]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Orders
            </CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">100</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
