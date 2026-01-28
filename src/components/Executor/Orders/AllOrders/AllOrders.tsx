import { useState } from 'react'
import { ordersData } from '../ordersData'
import { OrderCard } from '../OrderCard/OrderCard'

export const AllOrders = () => {
  const [inputValue, setInputValue] = useState('')

  return (
    <div className='flex flex-col gap-8'>
      <div className="flex gap-[40px]">
        <div className="flex w-[40%] flex-col gap-[8px]">
          <h2 className="font-monts text-[30px] leading-[1.3] font-semibold">
            Все заказы
          </h2>
          <p className="font-monts font-regular text-[12px] leading-[1.2]">
            Выберите подходящий заказ или используйте поиск и фильтры для
            быстрого доступа.
          </p>
        </div>
        <div className="flex w-[60%] w-full items-end">
          <input
            value={inputValue}
            placeholder="Поиск..."
            className="w-[40%] rounded-[8px] border-[1px] border-gray-300 p-[10px] outline-none"
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
      </div>
      <div>
        <ul className='grid grid-cols-2 gap-5'>
          {ordersData.map((item) => {
            return (
              <li key={item.id}>
                <OrderCard
                  id={item.id}
                  title={item.serviceName}
                  description={item.description}
                  price={item.price}
                  location={item.district}
                  date={item.publishedDate}
                  firstName={item.firstName}
                  lastName={item.lastName}
                  number={item.phone}
                />
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
