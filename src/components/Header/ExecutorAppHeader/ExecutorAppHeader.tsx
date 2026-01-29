import Logo from '@/assets/svg/logo.svg?react'
import LogoIcon from '@/assets/svg/logo-icon.svg?react'
import { executorNavigation } from '@/components/Executor/NavMenu/navigation'
import { NavMenu } from '@/components/Executor/NavMenu/NavMenu'
import { Link } from 'react-router-dom'

export const ExecutorAppHeader = () => {
  return (
    <header className="bg-secondary flex w-full items-center justify-between p-[27px_52px]">
      <Link
        to="/executor"
        className="flex items-baseline justify-center gap-10"
      >
        <LogoIcon /> <Logo className="hidden lg:block" />
      </Link>
      <NavMenu menu={executorNavigation} />
      <div />
    </header>
  )
}
