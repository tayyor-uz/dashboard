import { useTranslation } from 'react-i18next'
import { feedbacksData } from './feedbacksData'
import avatarImage from '@/assets/images/executor/main/feedback.webp'

export const Feedbacks = () => {
  const { t } = useTranslation()
  return (
    <section id="feedbacks">
      <div className="flex flex-col gap-20 py-30">
        <h2 className="text-center text-5xl font-semibold">
          {t('feedbacks_about_us')}
        </h2>
        <div className="flex w-full gap-5">
          {feedbacksData.map((item) => {
            return (
              <div
                key={item.id}
                className="border-primary flex w-full flex-col gap-4 rounded-2xl border-[2px] p-6"
              >
                <span className="font-regular block text-end text-xs">
                  {item.date}
                </span>
                <div className="flex items-center gap-2.5">
                  <img
                    src={avatarImage}
                    className="h-20 w-20 rounded-full"
                    alt="avatar"
                  />
                  <div className="flex flex-col gap-2">
                    <h4 className="text-xl font-medium">{item.fullname}</h4>
                    <span className="text-xs font-medium text-[#6F6F6F]">
                      {item.job}
                    </span>
                  </div>
                </div>
                <span className="bg-primary block h-[1px] w-full" />
                <p className="font-regular text-xs leading-[1.5]">
                  {item.description}
                </p>
                <div className="mt-auto flex flex-col items-end justify-end">
                  <span className="text-end">
                    {t('overal_raiting')}: ({item.grade})
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
