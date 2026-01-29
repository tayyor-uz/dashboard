import { CustomLink } from '@/components/uikit/CustomLink/CustomLink'
import { HeaderLogoLink } from '@/components/uikit/HeaderLogoLink/HeaderLogoLink'

export const ExecutorHeader = () => {
  return (
    <header className="bg-secondary flex w-full items-center justify-between p-[27px_52px]">
      <HeaderLogoLink link="/for-executor" />
      <nav>
        <div className="items-cener flex justify-center gap-[48px]">
          <CustomLink text="Сайт для заказчиков" link="/" />
          <CustomLink text="Вход для исполнителей" link="/executor" />
        </div>
      </nav>
    </header>
  )
}
