import { Table } from '@/components/shared/Table/Table'
import { ordersHistoryData } from '../ordersHistoryData'

export const OrderHistoryTable = () => {
  return (
    <div className="w-full overflow-hidden rounded-lg border border-black/30">
      <Table className="w-full border-collapse">
        <thead className="bg-primary w-full border-b border-black/30">
          <tr className="h-20 w-full text-white">
            <th className="px-6">№</th>
            <th className="px-6">ID</th>
            <th className="px-6">Услуга</th>
            <th className="px-6">Заказчик</th>
            <th className="px-6">Сумма</th>
            <th className="px-6">Статут</th>
          </tr>
        </thead>
        <tbody className="w-full bg-white">
          {ordersHistoryData.map((item) => {
            return (
              <tr className="font-montserrat h-20 border-b border-black/30 font-semibold text-black/70 last:border-b-0">
                <td className="p-2 text-center">{item.number}</td>
                <td className="p-2 text-center">{item.id}</td>
                <td className="p-2 text-center">{item.serviceName}</td>
                <td className="p-2 text-center">
                  {item.customerFirstName} {item.customerLastName}
                </td>
                <td className="p-2 text-center">{item.amount}</td>
                <td className="p-2 text-center">{item.status.name}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  )
}
