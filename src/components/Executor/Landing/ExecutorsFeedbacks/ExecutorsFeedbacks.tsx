import { FeedbackCard } from '@/components/Customer/Landing/Feedbacks/FeedbackCard'
import { feedbacksData } from '@/components/Customer/Landing/Feedbacks/feedbacksData'

export const ExecutorsFeedbacks = () => {
  return (
    <section id="executor-fedbacks" className="py-20">
      <div className="site-container flex flex-col items-center gap-20">
        <h2 className="max-w-[480px] text-5xl font-semibold">
          Что говорят о нас наши специалисты
        </h2>
        <div className="flex gap-5">
          {feedbacksData.map((item) => (
            <FeedbackCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
