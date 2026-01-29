import Logo from '@/assets/svg/logo.svg?react'
import { CustomLink } from '@/components/uikit/CustomLink/CustomLink'
import { Link } from 'react-router-dom'

export const CustomerHeader = () => {
  return (
    <header className="bg-secondary flex w-full items-center justify-between p-[27px_52px]">
      <Link to="/">
        <Logo />
      </Link>
      <nav>
        <div className="items-cener flex justify-center gap-[48px]">
          <CustomLink text="Сайт для спецалистов" link="/for-executor" />
          <CustomLink text="Вход для клиентов" link="/executor" />
        </div>
      </nav>
    </header>
  )
}
