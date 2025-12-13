import feedbackImg from '@/assets/images/executor/main/feedback.webp'

export const FeedbackCard = () => {
  return (
    <div className="rounded-[4px] border-[1px] border-[#81D6E369] bg-[#81D6E369] p-[31px_28px]">
      <span className="mb-[4px] block text-right">03.08.2025</span>
      <div className="mb-[18px] flex items-center gap-[13px]">
        <img src={feedbackImg} className="h-[80px] w-[80px]" />
        <div className="flex flex-col gap-[6px]">
          <p className="text-[21px] leading-[1] font-medium">Дмитрий К.C</p>
          <span className="text-[12px] font-medium">Мастер по ремонту</span>
        </div>
      </div>
      <span className="mb-[14px] block h-[1px] w-full bg-[#8A9099]/50" />
      <p className="mb-[17px]">
        “С Tayyor.uz моя работа стала гораздо проще. Раньше я тратил кучу
        времени на поиск клиентов, теперь заказы приходят сами. Я могу выбирать
        проекты, которые мне подходят, и планировать свой день так, как удобно.
        Платформа безопасная — оплата всегда приходит вовремя, а отзывы клиентов
        помогают повышать мою репутацию. Благодаря этому сервису я смог
        расширить свою клиентскую базу и получать стабильный доход, одновременно
        развивая свои навыки и опыт.”
      </p>
      <div className="flex flex-col items-end">
        <span>Общая оценка: (4,5)</span>
      </div>
    </div>
  )
}
