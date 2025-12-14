import { Trigger } from '@radix-ui/react-tabs'

interface ITriggerProps {
  value: string
  name: string
  icon?: React.ReactNode
  className?: string
  children?: React.ReactNode
  activeValue: string
}

export const CustomTrigger = ({
  value,
  name,
  children,
  className,
  activeValue,
}: ITriggerProps) => {
  return (
    <Trigger
      value={value}
      className={`font-monts flex items-center justify-center gap-[12px] rounded-[10px] p-[9px_25px] text-[17px] leading-[1] font-medium duration-300 ${activeValue === value ? 'bg-primary/40' : 'hover:bg-primary/40 bg-white'} ${className}`}
    >
      {children}
      {name}
    </Trigger>
  )
}
