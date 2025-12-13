import Logo from '@/assets/svg/logo.svg?react'
import { CustomLink } from '@/components/uikit/CustomLink/CustomLink'

export const ExecutorHeader = () => {
  return (
    <header className="bg-secondary flex w-full items-center justify-between p-[27px_52px]">
      <Logo />
      <nav>
        <div className="items-cener flex justify-center gap-[48px]">
          <CustomLink text="Сайт для спецалистов" link="/customer" />
          <CustomLink text="Вход для клиентов" link="/customer" />
        </div>
      </nav>
    </header>
  )
}
