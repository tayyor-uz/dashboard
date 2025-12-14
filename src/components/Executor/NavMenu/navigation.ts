import OrderIcon from '@/assets/svg/orders.svg?react'
import PricesIcon from '@/assets/svg/wallet.svg?react'
import ProfileIcon from '@/assets/svg/message.svg?react'
import NotificationIcon from '@/assets/svg/notification.svg?react'
import SupportIcon from '@/assets/svg/question.svg?react'

export const executorNavigation = [
  { id: 1, name: 'Заказы', link: '/executor', icon: OrderIcon },
  { id: 2, name: 'Тариф и платежи ', link: 'prices', icon: PricesIcon },
  { id: 3, name: 'Профиль', link: 'profile', icon: ProfileIcon },
  { id: 4, name: 'Уведомления', link: 'notifications', icon: NotificationIcon },
  { id: 5, name: 'Поддержка', link: 'support', icon: SupportIcon },
]
