import { Button } from '@/components/uikit/Button/Button'

interface IOrderCard {
  id: number
  title: string
  description: string
  meta: {
    price: number
    location: string
    date: string
  }
  onClick: (id: number) => void
  phone: string
}

export const OrderCard = ({
  id,
  title,
  description,
  meta,
  phone,
}: IOrderCard) => {
  return (
    <div className="px-[14px] pt-[38px] pb-[26px]">
      <span>type</span>
      <h3>{title}</h3>
      <p>{description}</p>
      <div>
        <p>Цена: {meta.price}</p>
        <p>Район: {meta.location}</p>
        <p>Дата публикации: {meta.date}</p>
      </div>
      <Button text="Открыть номер" type="button" onClick={() => {}} />
    </div>
  )
}
