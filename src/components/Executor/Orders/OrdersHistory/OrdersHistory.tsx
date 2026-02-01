import { OrderHistoryTable } from './OrderHistoryTable/OrderHistoryTable'

export const OrdersHistory = () => {
  return (
    <div className="flex w-full flex-col gap-8">
      <div className="flex w-full flex-col gap-[8px]">
        <h2 className="font-monts text-[30px] leading-[1.3] font-semibold">
          Мои заказы
        </h2>
        <p className="font-monts font-regular text-[12px] leading-[1.2]">
          Просматривайте активные, завершённые и новые заказы в одном удобном
          месте.
        </p>
      </div>
      <div className="w-full">
        <OrderHistoryTable />
      </div>
    </div>
  )
}
