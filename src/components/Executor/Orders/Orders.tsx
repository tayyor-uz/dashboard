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
import PhoneIcon from '@/assets/svg/phone.svg?react'
import CloseIcon from '@/assets/svg/close.svg?react'
import CheckIcon from '@/assets/svg/check.svg?react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/uikit/Button/Button'

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
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false)
  const [selectedNumber, setSelectedNumber] = useState('')

  const handleSetNumber = (number: string) => {
    setSelectedNumber(number)
    setIsModalOpen(true)
  }

  const handleCloseModsl = () => {
    setIsModalOpen(false)
    setSelectedNumber('')
  }

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
                <AllOrders onClick={handleSetNumber} />
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
        <CustomModal onClick={handleCloseModsl}>
          <div className="relative flex flex-col gap-5 rounded-xl bg-white px-24 py-14">
            <div className="flex items-center justify-center gap-2">
              <PhoneIcon width={24} height={24} />
              <span className="text-3xl font-semibold">Контакты</span>
            </div>
            <p className="font-montserrat text-center text-3xl font-medium">
              {selectedNumber}
            </p>
            <span className="font-montserrat text-xl font-medium text-[#8D2525]">
              Осталось 2 из 5 откликов
            </span>
            <Link
              to={`tel:${selectedNumber}`}
              className="bg-primary rounded-md px-4 py-2 text-center text-2xl font-medium text-white"
            >
              {t('call')}
            </Link>
            <button
              type="button"
              onClick={() => handleCloseModsl()}
              className="absolute top-8 right-11 -translate-x-1/2 -translate-y-1/2 !p-0"
            >
              <CloseIcon width={12} height={12} />
            </button>
          </div>
        </CustomModal>
      )}
      {isOrderModalOpen && (
        <CustomModal onClick={handleCloseModsl}>
          <div className="flex gap-6 rounded-xl bg-white px-10 py-7">
            <div className="flex items-start justify-center">
              <div className="bg-primary/30 rounded-full p-2">
                <CheckIcon width={16} height={16} />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-montserrat text-2xl font-medium">
                {t('order_confirm')}
              </span>
              <p className="font-montserrat font-regular max-w-[720px] text-sm text-[#8A9099]">
                {t('order_confirm_description')}
              </p>
              <div className="mt-2.5 flex justify-end gap-2">
                <Button
                  text={t('continue_search')}
                  onClick={() => setIsOrderModalOpen(false)}
                  className="text-primary border-primary border bg-white"
                />
                <Button
                  text={t('confirm')}
                  onClick={() => setIsOrderModalOpen(false)}
                  className="bg-primary text-white"
                />
              </div>
            </div>
          </div>
        </CustomModal>
      )}
    </>
  )
}
