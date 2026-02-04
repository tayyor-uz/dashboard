import { useTranslation } from 'react-i18next'
import avatarImage from '@/assets/images/executor/main/feedback.webp'

interface IfeedbackCard {
  data: {
    id: number
    date: string
    fullname: string
    job: string
    description: string
    grade: number
  }
}

export const FeedbackCard = ({ data }: IfeedbackCard) => {
  const { t } = useTranslation()

  return (
    <div
      key={data.id}
      className="border-primary flex w-full flex-col gap-4 rounded-2xl border-[3px] p-6"
    >
      <span className="font-regular block text-end text-xs">{data.date}</span>
      <div className="flex items-center gap-2.5">
        <img
          src={avatarImage}
          className="h-20 w-20 rounded-full"
          alt="avatar"
        />
        <div className="flex flex-col gap-2">
          <h4 className="text-xl font-medium">{data.fullname}</h4>
          <span className="text-xs font-medium text-[#6F6F6F]">{data.job}</span>
        </div>
      </div>
      <span className="bg-primary block h-[1px] w-full" />
      <p className="font-regular text-xs leading-[1.5]">{data.description}</p>
      <div className="mt-auto flex flex-col items-end justify-end">
        <span className="text-end">
          {t('overall_rating')}: ({data.grade})
        </span>
      </div>
    </div>
  )
}
