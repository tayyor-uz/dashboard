import { useTranslation } from 'react-i18next'
import { feedbacksData } from './feedbacksData'
import { FeedbackCard } from './FeedbackCard'

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
            return <FeedbackCard key={item.id} data={item} />
          })}
        </div>
      </div>
    </section>
  )
}
