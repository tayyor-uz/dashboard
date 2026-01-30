import { Range, Root, Thumb, Track } from '@radix-ui/react-slider'
import { useState } from 'react'

interface IRangeSliderProps {
  label?: string
  maxAmount: number
  step: number
  startValue: number
  endValue: number
  currency?: string
}

export const RangeSlider = ({
  label,
  maxAmount,
  step,
  startValue,
  endValue,
  currency = '$',
}: IRangeSliderProps) => {
  const [firstValue, setFirstValue] = useState(startValue)
  const [secondValue, setSecondValue] = useState(endValue)

  return (
    <div className="flex flex-col gap-1.25">
      {label && <span className="text-xs text-black/65">{label}</span>}
      <Root
        defaultValue={[startValue, endValue]}
        max={maxAmount}
        step={step}
        onValueChange={(values) => {
          setFirstValue(values[0])
          setSecondValue(values[1])
        }}
        className="relative flex h-5 w-full touch-none items-center select-none"
      >
        <Track className="relative h-1 w-full grow rounded-full bg-gray-400">
          <Range className="absolute h-full rounded-full bg-teal-500" />
        </Track>
        <Thumb className="flex h-4 w-4 cursor-pointer items-center justify-center gap-0.5 rounded-full border-[1px] border-gray-200 bg-white p-1 shadow-sm focus:outline-none">
          <span className="bg-primary h-full w-0.25" />
          <span className="bg-primary h-full w-0.25" />
        </Thumb>
        <Thumb className="flex h-4 w-4 cursor-pointer items-center justify-center gap-0.5 rounded-full border-[1px] border-gray-200 bg-white p-1 shadow-sm focus:outline-none">
          <span className="bg-primary h-full w-0.25" />
          <span className="bg-primary h-full w-0.25" />
        </Thumb>
      </Root>
      <div className="flex justify-between">
        <span className="text-1.25 text-[#3F434A]">
          {currency} {firstValue}
        </span>
        <span className="text-1.25 text-[#3F434A]">
          {currency} {secondValue}
        </span>
      </div>
    </div>
  )
}
