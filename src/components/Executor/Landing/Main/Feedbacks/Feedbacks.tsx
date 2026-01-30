import { FeedbackCard } from './FeedbackCard/FeedbackCard'

export const Feedbacks = () => {
  return (
    <div className="flex flex-col items-center gap-[70px]">
      <h2 className="text-[50px] leading-[1.3] font-semibold">
        {' '}
        Что говорят о нас наши специалисты
      </h2>
      <div className="flex gap-[29px]">
        <FeedbackCard />
        <FeedbackCard />
        <FeedbackCard />
      </div>
    </div>
  )
}
