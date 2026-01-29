import Logo from '@/assets/svg/logo.svg?react'

export const Hero = () => {
  return (
    <section id="hero">
      <div className="flex justify-between py-40">
        <div className="flex flex-col gap-6">
          <Logo className="h-[141px] w-auto" />
          <p className="text-5xl font-semibold">
            Любые заказы <br /> в одном месте
          </p>
        </div>
        <div className="flex flex-col justify-end font-medium">
          <p>Широкий выбор услуг</p>
          <p>Разумная стоимость</p>
          <p>Проверенные специалисты</p>
          <p>Честные мнения клиентов</p>
        </div>
      </div>
    </section>
  )
}
