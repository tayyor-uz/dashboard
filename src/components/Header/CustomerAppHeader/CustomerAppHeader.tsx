import { customerNavigation } from '@/components/Executor/NavMenu/navigation'
import { NavMenu } from '@/components/Executor/NavMenu/NavMenu'
import { HeaderLogoLink } from '@/components/uikit/HeaderLogoLink/HeaderLogoLink'

export const CustomerAppHeader = () => {
  return (
    <header className="bg-secondary flex w-full items-center justify-between p-[27px_52px]">
      <HeaderLogoLink link="/customer" />
      <NavMenu menu={customerNavigation} />
      <div />
    </header>
  )
}
