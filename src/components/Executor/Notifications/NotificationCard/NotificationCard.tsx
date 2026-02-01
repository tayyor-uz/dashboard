import { useState } from 'react'
import type { INotification } from '../notificationsData'
import { NotificationIconType } from './NotificationIconType'
import { useTranslation } from 'react-i18next'
import { Checkbox } from 'antd'

interface ICardProps {
  data: INotification
}

export const NotificationCard = ({ data }: ICardProps) => {
  const { t } = useTranslation()
  const [isChecked, setIsChecked] = useState(false)
  return (
    <div className="rounded-xl border-[1px] border-[#8A9099]/30 bg-white px-7.5 py-4">
      <span className="text-light font-monts text-primary ml-auto block w-full text-right text-sm">
        {data.status.name}
      </span>
      <div className="flex gap-2">
        <div className="bg-primary flex h-13.5 w-13.5 items-center justify-center rounded-md">
          {<NotificationIconType type={data.type} />}
        </div>
        <div>
          <h2 className="font-monts text-lg font-semibold">{data.title}</h2>
          <p className="text-md font-light">{data.description}</p>
        </div>
      </div>
      <div className="mt-7 flex justify-between">
        <label className="flex items-center gap-2.5">
          <Checkbox
            checked={isChecked}
            className=""
            onChange={() => setIsChecked(!isChecked)}
          />
          {isChecked ? t('read') : t('mark_as_read')}
        </label>
        <span className="font-montsfont-medium text-sm text-[#8A9099]">
          {data.date}
        </span>
      </div>
    </div>
  )
}
