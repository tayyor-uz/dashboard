import type { ChangeEvent } from 'react'
import SearchIcon from '@/assets/svg/search.svg?react'

interface IInputBarProps {
  name?: string
  value: string
  palceholder: string
  label?: string
  className?: string
  hasIcon?: boolean
  onChange: (value: string) => void
}

export const InputBar = ({
  name,
  value,
  palceholder,
  label,
  className,
  hasIcon = false,
  onChange,
}: IInputBarProps) => {
  if (label) {
    return (
      <label className="relative w-full">
        {label}
        <input
          name={name || ''}
          value={value}
          placeholder={palceholder}
          className={`w-full rounded-lg p-5 pl-20 shadow-sm outline-none ${className || ''}`}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChange(e.target.value)
          }
        />
      </label>
    )
  } else {
    return (
      <div className="relative w-full">
        {hasIcon && (
          <SearchIcon
            width={25}
            height={25}
            className="absolute top-1/2 left-6 -translate-y-1/2"
          />
        )}
        <input
          name={name}
          value={value}
          placeholder={palceholder}
          className={`w-full rounded-lg p-5 pl-20 shadow-sm outline-none ${className || ''}`}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChange(e.target.value)
          }
        />
      </div>
    )
  }
}
