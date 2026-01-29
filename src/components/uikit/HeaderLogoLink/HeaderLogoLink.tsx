import { Link } from 'react-router-dom'
import Logo from '@/assets/svg/logo.svg?react'
import LogoIcon from '@/assets/svg/logo-icon.svg?react'

export const HeaderLogoLink = ({ link }: { link: string }) => {
  return (
    <Link to={link} className="flex items-baseline justify-center gap-10">
      <LogoIcon /> <Logo className="hidden lg:block" />
    </Link>
  )
}
