import docImg from '@/assets/images/executor/main/document.webp'
import coworkersImg from '@/assets/images/executor/main/coworkers.webp'
import womanImg from '@/assets/images/executor/main/woman.webp'
import { ProcessCard } from './ProcessCard/ProcessCard'
import { Button } from '@/components/uikit/Button/Button'

interface IData {
  id: number
  title: string
  descripion: string
  img: string
}

const data: IData[] = [
  {
    id: 1,
    title: 'Просматривайте и выбирайте подходящие заказы.',
    descripion: 'Связываетесь с клиентом напрямую и уточняете детали и цену',
    img: docImg,
  },
  {
    id: 2,
    title: 'Просматривайте и выбирайте подходящие заказы.',
    descripion: 'Связываетесь с клиентом напрямую и уточняете детали и цену',
    img: coworkersImg,
  },
  {
    id: 3,
    title: 'Выполняйте работу и получайте оплату',
    descripion:
      'После завершения заказа деньги поступают на ваш счет напрямую от клиента',
    img: womanImg,
  },
]

export const Process = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-[50px] leading-[1.3] font-semibold">
        Как это работает?
      </h2>
      <div>
        {data.map(({ id, title, descripion, img }) => (
          <ProcessCard
            key={id}
            title={title}
            description={descripion}
            img={img}
            id={id}
          />
        ))}
      </div>
      <Button
        text="Зарегистрироваться"
        type="button"
        onClick={() => {}}
        className="bg-primary hover:bg-secondary hover:text-primary text-[20px] font-medium text-white transition-colors duration-300 ease-in-out"
      />
    </div>
  )
}
