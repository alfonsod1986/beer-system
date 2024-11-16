import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  id: number;
  created: string;
  paid: boolean;
}

const OrderInfo = ({ id, created, paid }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Information</CardTitle>
      </CardHeader>
      <CardContent>
      <dl className="grid grid-cols-2 gap-4">
          <div>
            <dt className="font-semibold">Order Number</dt>
            <dd>{id}</dd>
          </div>
          <div>
            <dt className="font-semibold">Date</dt>
            <dd>{created.split('T')[0]}</dd>
          </div>
          <div>
            <dt className="font-semibold">Status</dt>
            <dd>
              <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                paid ? 'bg-green-100 text-green-800' :  
                'bg-red-100 text-red-800'
              }`}>
                {paid ? 'Paid': 'Unpaid'} 
              </span>
            </dd>
          </div>
      </dl>
      </CardContent>
    </Card>
  )
}

export default OrderInfo
