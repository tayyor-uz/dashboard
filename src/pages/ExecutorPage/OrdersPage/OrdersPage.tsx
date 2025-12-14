import { useState } from 'react'
import { Orders } from '@/components/Executor/Orders/Orders'

export const OrdersPage = () => {
  const [activeTab, setActiveTab] = useState('all')

  return <Orders activeTab={activeTab} onChange={setActiveTab} />
}
