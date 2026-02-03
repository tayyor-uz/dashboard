import { Button } from '@/components/uikit/Button/Button'
import { useTranslation } from 'react-i18next'
import WalletIco from '@/assets/svg/card-wallet.svg?react'
import LocationIcon from '@/assets/svg/card-buildings.svg?react'
import CalendarIcon from '@/assets/svg/card-calendar.svg?react'

interface IOrderCardProps {
  id: number
  title: string
  description: string
  price: number
  location: string
  date: string
  number: string
  firstName: string
  lastName: string
  onClick: (number: string) => void
}

export const OrderCard = ({
  id,
  title,
  description,
  price,
  location,
  date,
  number,
  firstName,
  lastName,
  onClick,
}: IOrderCardProps) => {
  const { t } = useTranslation()

  const handleClick = () => {
    console.log(`${id} ${firstName} ${lastName} ${number}`)
    onClick(number)
  }

  return (
    <div className="flex w-full flex-col items-center rounded-2xl border-[1px] border-black/10 bg-white p-7.5 shadow-sm">
      <h3 className="w-full text-2xl font-medium">{title}</h3>
      <p className="font-regular font-montserrat mt-4 text-xs">{description}</p>
      <div className="mt-7 flex w-full flex-col gap-2.5">
        <div className="flex items-baseline justify-between text-sm font-medium">
          <p className="flex items-center gap-1.5">
            <WalletIco width={13} height={13} /> {t('price')}
          </p>
          <span className="mx-2 flex-1 border-b border-dotted border-gray-400" />
          <span>{price}</span>
        </div>
        <div className="flex items-baseline justify-between text-sm font-medium">
          <p className="flex items-center gap-1.5">
            <LocationIcon width={13} height={13} /> {t('district')}
          </p>
          <span className="mx-2 flex-1 border-b border-dotted border-gray-400" />
          <span>{location}</span>
        </div>
        <div className="flex items-baseline justify-between text-sm font-medium">
          <p className="flex items-center gap-1.5">
            <CalendarIcon width={13} height={13} /> {t('publication_date')}
          </p>
          <span className="mx-2 flex-1 border-b border-dotted border-gray-400" />
          <span>{date}</span>
        </div>
      </div>
      <Button
        text={t('show_number')}
        type="button"
        onClick={handleClick}
        className="ronded-lg bg-primary mt-8 flex !p-[7px_31px] text-2xl font-medium text-white"
      />
    </div>
  )
}
