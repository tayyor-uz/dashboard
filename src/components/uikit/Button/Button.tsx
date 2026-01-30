import type { ReactElement } from 'react'

interface IButtonProps {
  text: string
  onClick?: () => void
  type?: 'button' | 'submit'
  className?: string
}

export const Button = ({
  text,
  onClick,
  type,
  className,
}: IButtonProps): ReactElement => {
  return (
    <button
      type={type ?? 'button'}
      className={`flex items-center justify-center rounded-[10px] p-[9px_16px] ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
