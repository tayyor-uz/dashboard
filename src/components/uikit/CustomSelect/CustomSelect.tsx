import { useState, useRef, useEffect } from 'react'
import type { ReactElement } from 'react'

export interface ISelectOption {
  id: string | number
  name: string
  fullName?: string
}

interface ISelectProps {
  options: ISelectOption[]
  value?: ISelectOption | null
  placeholder?: string
  className?: string
  onChange: (option: ISelectOption) => void
  label?: string
}

export const CustomSelect = ({
  label,
  options,
  value = null,
  placeholder = 'Выберите...',
  className = '',
  onChange,
}: ISelectProps): ReactElement => {
  const [isOpen, setIsOpen] = useState(false)
  const selectRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSelect = (option: ISelectOption) => {
    onChange(option)
    setIsOpen(false)
  }

  return (
    <div ref={selectRef} className={`relative w-full ${className}`}>
      {label && (
        <span className="mb-1 block text-xs text-black/65">{label}</span>
      )}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between !rounded-[16px] border-[1px] border-gray-300 bg-white p-4 transition-colors outline-none hover:bg-gray-50"
      >
        <span
          className={value && value.name ? 'text-gray-900' : 'text-gray-400'}
        >
          {value && value.name ? value.name : placeholder}
        </span>
        <svg
          className={`h-5 w-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="overflow-hidden rounded-lg">
          <ul className="custom-scroll absolute z-10 mt-1 max-h-60 w-full overflow-auto bg-white py-1 shadow-lg">
            {options.map((option) => {
              const isSelected = value?.id === option.id
              return (
                <li
                  key={option.id}
                  onClick={() => handleSelect(option)}
                  className={`cursor-pointer px-4 py-3 transition-colors ${
                    isSelected
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{option.name}</p>
                      {option.fullName && (
                        <p className="text-sm text-gray-500">
                          {option.fullName}
                        </p>
                      )}
                    </div>
                    {isSelected && (
                      <svg
                        className="h-5 w-5 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}
