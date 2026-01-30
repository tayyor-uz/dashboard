import BagImage from '@/assets/svg/briefcase.svg?react'
import ClockImage from '@/assets/svg/clock.svg?react'
import lockKeyImage from '@/assets/svg/lock-key.svg?react'
import StarImage from '@/assets/svg/star-process.svg?react'
import { AdvantagesCard } from './AdvantagesCard'

interface IData {
  id: number
  title: string
  description: string
  icon: React.FC<React.SVGProps<SVGSVGElement>>
}

const data: IData[] = [
  {
    id: 1,
    title: 'Стабильные заказы',
    description: 'Заказы подбираются автоматически под твои навыки.',
    icon: BagImage,
  },
  {
    id: 2,
    title: 'Гибкий график',
    description: 'Заказы подбираются автоматически под твои навыки.',
    icon: ClockImage,
  },
  {
    id: 3,
    title: 'Безопасные платежи',
    description: 'Деньги хранятся на платформе до подтверждения выполнения',
    icon: lockKeyImage,
  },
  {
    id: 4,
    title: 'Развитие репутации',
    description: 'Получай отзывы, рейтинг и становись топ-специалистом.',
    icon: StarImage,
  },
]

export const Advantages = () => {
  return (
    <div className="flex gap-[40px]">
      {data.map(({ id, title, description, icon }) => (
        <AdvantagesCard
          key={id}
          title={title}
          description={description}
          icon={icon}
        />
      ))}
    </div>
  )
}
