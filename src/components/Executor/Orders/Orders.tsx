import { CustomTrigger } from '@/components/uikit/CustomTrigger/CustomTrigger'
import { Content, List, Root } from '@radix-ui/react-tabs'
import OrderIcon from '@/assets/svg/orders-doc.svg?react'
import DataIcon from '@/assets/svg/settings.svg?react'
import HistoryIcon from '@/assets/svg/building.svg?react'
import { AllOrders } from './AllOrders/AllOrders'
import { OrdersFilter } from './AllOrders/OrdersFilter/OrdersFilter'
import { ActiveOrders } from './ActiveOrders/ActiveOrders'
import { OrdersHistory } from './OrdersHistory/OrdersHistory'

interface IOrderProps {
  activeTab: string
  onChange: (value: string) => void
}

const ORDERS = {
  all: 'all',
  in_process: 'in_process',
  history: 'history',
}

export const Orders = ({ activeTab, onChange }: IOrderProps) => {
  return (
    <div className="flex gap-[40px] py-[28px]">
      <div className="w-[25%]">
        <OrdersFilter />
      </div>
      <div className="w-[75%]">
        <Root
          defaultValue={activeTab}
          onValueChange={(value) => onChange(value)}
          className="flex flex-col gap-[30px]"
        >
          <List className="flex items-center gap-[10px]">
            <CustomTrigger
              name="Заказы"
              value={ORDERS.all}
              activeValue={activeTab}
            >
              <div className="rounded-[4px] bg-white p-[6px] shadow-sm">
                <OrderIcon width={13} />
              </div>
            </CustomTrigger>
            <CustomTrigger
              name="Заказы в работе"
              value={ORDERS.in_process}
              activeValue={activeTab}
            >
              <div className="rounded-[4px] bg-white p-[6px] shadow-sm">
                <DataIcon width={13} />
              </div>
            </CustomTrigger>
            <CustomTrigger
              name="История заказов"
              value={ORDERS.history}
              activeValue={activeTab}
            >
              <div className="rounded-[4px] bg-white p-[6px] shadow-sm">
                <HistoryIcon width={13} />
              </div>
            </CustomTrigger>
          </List>
          <div>
            <Content value={ORDERS.all}>
              <AllOrders />
            </Content>
            <Content value={ORDERS.in_process}><ActiveOrders /></Content>
            <Content value={ORDERS.history}><OrdersHistory /></Content>
          </div>
        </Root>
      </div>
    </div>
  )
}
