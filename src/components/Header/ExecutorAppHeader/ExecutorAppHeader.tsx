import Logo from '@/assets/svg/logo.svg?react'
import { NavMenu } from '@/components/Executor/NavMenu/NavMenu'
import { Link } from 'react-router-dom'

export const ExecutorAppHeader = () => {
  return (
    <header className="bg-secondary flex w-full items-center justify-between p-[27px_52px]">
      <Link to="/executor">
        <Logo />
      </Link>
      <NavMenu />
      <div />
    </header>
  )
}
