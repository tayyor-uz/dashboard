import WalletIcon from '@/assets/svg/wallet-wite.svg?react'
import StarIcon from '@/assets/svg/circle-star.svg?react'
import SettingsIcon from '@/assets/svg/setting-icon.svg?react'
import MessageIcon from '@/assets/svg/message.svg?react'
import NotificationIcon from '@/assets/svg/notification.svg?react'
import QuestionIcon from '@/assets/svg/question.svg?react'
import type { NotificationType } from '../notificationsData'

interface NotificationIconTypeProps {
  type: NotificationType
  className?: string
}

const iconMap: Record<
  NotificationType,
  React.FunctionComponent<React.SVGProps<SVGSVGElement>>
> = {
  payment: WalletIcon,
  system: SettingsIcon,
  order: StarIcon,
  message: MessageIcon,
  reminder: NotificationIcon,
  feedback: QuestionIcon,
}

export const NotificationIconType = ({
  type,
  className,
}: NotificationIconTypeProps) => {
  const Icon = iconMap[type] || SettingsIcon

  return <Icon width={34} height={34} className={`${className}`} />
}
