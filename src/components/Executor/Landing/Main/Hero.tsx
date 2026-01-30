import moneyImage from '@/assets/images/executor/main/money.webp'

export const Hero = () => {
  return (
    <div className="flex w-full items-center justify-center gap-[60px] leading-[1]">
      <h1 className="w-[70%] text-[50px] font-semibold">
        Ваши клиенты уже ищут вас. Работайте и получайте заказы на Tayyor.uz.
      </h1>
      <img src={moneyImage} className="w-[30%]" alt="money" />
    </div>
  )
}
