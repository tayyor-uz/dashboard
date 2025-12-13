interface ICard {
  title: string
  description: string
  img: string
  id: number
}

export const ProcessCard = ({ title, description, img, id }: ICard) => {
  const isEven = id % 2 === 0

  return (
    <div
      className={`flex ${isEven ? 'flex-row-reverse' : 'flex-row'} items-center justify-center gap-[40px]`}
    >
      <div
        className={`flex w-[60%] flex-col gap-[26px] ${isEven ? 'items-end' : 'items-start'}`}
      >
        <h3
          className={`text-[43px] leading-[1.1] font-semibold ${isEven ? 'text-right' : 'text-left'}`}
        >
          {title}
        </h3>
        <p className="font-regular flex items-center gap-[12px] text-[17px] leading-[1]">
          <span className="block h-[6px] w-[6px] rounded-full bg-black" />{' '}
          {description}
        </p>
      </div>
      <div className="w-[40%]">
        <img src={img} />
      </div>
    </div>
  )
}
