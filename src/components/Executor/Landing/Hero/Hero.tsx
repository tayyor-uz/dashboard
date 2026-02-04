import Logo from '@/assets/svg/logo.svg?react'

export const Hero = () => {
  return (
    <section id="hero">
      <div className="site-container flex justify-between py-40">
        <div className="flex flex-col gap-6">
          <Logo className="h-[141px] w-auto" />
          <p className="text-5xl font-semibold">
            Получайте заказы <br /> и зарабатывайте
          </p>
        </div>
        <div className="flex flex-col justify-end font-medium">
          <p>Платформа для поиска работы</p>
        </div>
      </div>
    </section>
  )
}
