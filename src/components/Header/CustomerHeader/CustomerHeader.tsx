import { CustomLink } from '@/components/uikit/CustomLink/CustomLink'
import { HeaderLogoLink } from '@/components/uikit/HeaderLogoLink/HeaderLogoLink'

export const CustomerHeader = () => {
  return (
    <header className="bg-secondary flex w-full items-center justify-between p-[27px_52px]">
      <HeaderLogoLink link="/" />
      <nav>
        <div className="items-cener flex justify-center gap-[48px]">
          <CustomLink text="Сайт для спецалистов" link="/for-executor" />
          <CustomLink text="Вход для клиентов" link="/customer" />
        </div>
      </nav>
    </header>
  )
}
