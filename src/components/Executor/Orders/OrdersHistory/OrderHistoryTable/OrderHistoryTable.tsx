import { Table } from "@/components/shared/Table/Table"
import { ordersHistoryData } from "../ordersHistoryData"

export const OrderHistoryTable = () => {
    return (
        <div className="overflow-hidden rounded-lg border border-black/30">
            <Table className="w-full border-collapse">
                <thead className="border-b border-black/30 bg-primary">
                    <tr className="text-white">
                        <th className="p-2 h-20">№</th>
                        <th className="p-2 h-20">ID</th>
                        <th className="p-2 h-20">Услуга</th>
                        <th className="p-2 h-20">Заказчик</th>
                        <th className="p-2 h-20">Сумма</th>
                        <th className="p-2 h-20">Статут</th>
                    </tr>
                </thead>
                <tbody>
                    {ordersHistoryData.map(item => {
                        return (
                            <tr className="border-b last:border-b-0 border-black/30 font-montserrat font-semibold text-black/70">
                                <td className="p-2 h-20 text-center">{item.number}</td>
                                <td className="p-2 h-20 text-center">{item.id}</td>
                                <td className="p-2 h-20 text-center">{item.serviceName}</td>
                                <td className="p-2 h-20 text-center">{item.customerFirstName} {item.customerLastName}</td>
                                <td className="p-2 h-20 text-center">{item.amount}</td>
                                <td className="p-2 h-20 text-center">{item.status.name}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}