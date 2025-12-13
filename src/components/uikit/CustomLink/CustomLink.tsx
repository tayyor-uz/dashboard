import type { ReactElement } from 'react'
import { Link } from 'react-router-dom'

interface ILinkProps {
  text: string
  link: string
  className?: string
}

export const CustomLink = ({
  text,
  link,
  className,
}: ILinkProps): ReactElement => {
  return (
    <Link to={link} className={`${className}`}>
      {text}
    </Link>
  )
}
