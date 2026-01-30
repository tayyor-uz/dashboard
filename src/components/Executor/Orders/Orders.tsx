import { CustomTrigger } from '@/components/uikit/CustomTrigger/CustomTrigger'
import { Content, List, Root } from '@radix-ui/react-tabs'
import OrderIcon from '@/assets/svg/orders-doc.svg?react'
import DataIcon from '@/assets/svg/settings.svg?react'
import HistoryIcon from '@/assets/svg/building.svg?react'
import { AllOrders } from './AllOrders/AllOrders'
import { OrdersFilter } from './OrdersFilter/OrdersFilter'
import { ActiveOrders } from './ActiveOrders/ActiveOrders'
import { OrdersHistory } from './OrdersHistory/OrdersHistory'
import { useState } from 'react'
import { CustomModal } from '@/components/uikit/Modal/Modal'
import { t } from 'i18next'

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
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="flex gap-[40px] py-[28px]">
        <div className="w-[30%]">
          <OrdersFilter />
        </div>
        <div className="w-[70%]">
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
              <Content value={ORDERS.in_process}>
                <ActiveOrders />
              </Content>
              <Content value={ORDERS.history}>
                <OrdersHistory />
              </Content>
            </div>
          </Root>
        </div>
      </div>
      {isModalOpen && (
        <CustomModal onClick={setIsModalOpen}>
          <div className="relative flex flex-col gap-5 rounded-xl bg-white px-22 py-14">
            <span>Контакты</span>
            <p>+998907037033</p>
            <span>Осталось 2 из 5 откликов</span>
            <p>{t('call')}</p>
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-8 right-11 -translate-x-1/2 -translate-y-1/2 !p-0"
            >
              X
            </button>
          </div>
        </CustomModal>
      )}
    </>
  )
}
