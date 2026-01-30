import { useState } from 'react'
import { Orders } from '@/components/Executor/Orders/Orders'

export interface IFormikProps {
  district: { id: number; name: string }
  date: { startDate: string; endDate: string }
  price: { startPrice: number | null; endPrice: number | null }
}

export const OrdersPage = () => {
  const [activeTab, setActiveTab] = useState('all')

  return <Orders activeTab={activeTab} onChange={setActiveTab} />
}
