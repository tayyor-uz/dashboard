import Logo from '@/assets/svg/logo.svg?react'
import { customerNavigation } from '@/components/Executor/NavMenu/navigation'
import { NavMenu } from '@/components/Executor/NavMenu/NavMenu'
import { Link } from 'react-router-dom'

export const CustomerAppHeader = () => {
  return (
    <header className="bg-secondary flex w-full items-center justify-between p-[27px_52px]">
      <Link to="/customer">
        <Logo />
      </Link>
      <NavMenu menu={customerNavigation} />
      <div />
    </header>
  )
}
