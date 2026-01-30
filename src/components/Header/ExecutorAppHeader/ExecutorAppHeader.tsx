import { executorNavigation } from '@/components/Executor/NavMenu/navigation'
import { NavMenu } from '@/components/Executor/NavMenu/NavMenu'
import { HeaderLogoLink } from '@/components/uikit/HeaderLogoLink/HeaderLogoLink'

export const ExecutorAppHeader = () => {
  return (
    <header className="bg-secondary">
      <div className="site-container flex w-full items-center justify-between p-[27px_52px]">
        <HeaderLogoLink link="/executor" />
        <NavMenu menu={executorNavigation} />
        <div />
      </div>
    </header>
  )
}
