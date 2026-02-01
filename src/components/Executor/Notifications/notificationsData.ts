export type NotificationType = 'order' | 'payment' | 'system' | 'message' | 'reminder' | 'feedback'

export interface INotificationStatus {
  id: number
  type: string
  name: string
}

export interface INotification {
  id: number
  title: string
  description: string
  type: NotificationType
  isRead: boolean
  date: string
  status: INotificationStatus
}

export const notificationsData: INotification[] = [
  {
    id: 1,
    title: 'Новый заказ',
    description: 'Получен новый заказ на доставку из ресторана "Чайхона"',
    type: 'order',
    isRead: false,
    date: '2026-02-02T10:30:00',
    status: { id: 1, type: 'new', name: 'Новое' }
  },
  {
    id: 2,
    title: 'Оплата получена',
    description: 'Оплата за заказ №12345 успешно зачислена на ваш счет',
    type: 'payment',
    isRead: true,
    date: '2026-02-02T09:15:00',
    status: { id: 4, type: 'completed', name: 'Завершено' }
  },
  {
    id: 3,
    title: 'Срочный заказ!',
    description: 'Клиент ждет заказ в течение 30 минут. Требуется немедленная доставка',
    type: 'order',
    isRead: false,
    date: '2026-02-02T11:45:00',
    status: { id: 2, type: 'important', name: 'Важное' }
  },
  {
    id: 4,
    title: 'Обновление приложения',
    description: 'Доступна новая версия приложения с улучшениями и исправлениями',
    type: 'system',
    isRead: true,
    date: '2026-02-01T18:00:00',
    status: { id: 3, type: 'read', name: 'Прочитано' }
  },
  {
    id: 5,
    title: 'Сообщение от клиента',
    description: 'Клиент оставил комментарий к заказу №12346',
    type: 'message',
    isRead: false,
    date: '2026-02-02T08:20:00',
    status: { id: 1, type: 'new', name: 'Новое' }
  },
  {
    id: 6,
    title: 'Напоминание о графике',
    description: 'Завтра у вас запланирована смена с 09:00 до 18:00',
    type: 'reminder',
    isRead: false,
    date: '2026-02-01T20:00:00',
    status: { id: 2, type: 'important', name: 'Важное' }
  },
  {
    id: 7,
    title: 'Заказ отменен',
    description: 'Заказ №12344 был отменен клиентом',
    type: 'order',
    isRead: true,
    date: '2026-02-01T16:30:00',
    status: { id: 4, type: 'completed', name: 'Завершено' }
  },
  {
    id: 8,
    title: 'Бонус начислен',
    description: 'Вам начислен бонус 50 000 сум за выполнение 20 заказов',
    type: 'payment',
    isRead: true,
    date: '2026-02-01T14:00:00',
    status: { id: 3, type: 'read', name: 'Прочитано' }
  },
  {
    id: 9,
    title: 'Новое сообщение',
    description: 'Поддержка ответила на ваш вопрос о выплатах',
    type: 'message',
    isRead: false,
    date: '2026-02-02T07:45:00',
    status: { id: 1, type: 'new', name: 'Новое' }
  },
  {
    id: 10,
    title: 'Важное изменение',
    description: 'Изменились условия работы. Ознакомьтесь с новыми правилами',
    type: 'system',
    isRead: false,
    date: '2026-02-01T12:00:00',
    status: { id: 2, type: 'important', name: 'Важное' }
  },
  {
    id: 11,
    title: 'Важное изменение',
    description: 'Изменились условия работы. Ознакомьтесь с новыми правилами',
    type: 'feedback',
    isRead: false,
    date: '2026-02-01T12:00:00',
    status: { id: 2, type: 'important', name: 'Важное' }
  },
  {
    id: 12,
    title: 'Важное изменение',
    description: 'Изменились условия работы. Ознакомьтесь с новыми правилами',
    type: 'feedback',
    isRead: false,
    date: '2026-02-01T12:00:00',
    status: { id: 2, type: 'important', name: 'Важное' }
  }
]
