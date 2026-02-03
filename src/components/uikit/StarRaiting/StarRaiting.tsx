import StarTealIcon from '@/assets/svg/star-teal.svg?react'
import StarGrayIcon from '@/assets/svg/star-gray.svg?react'

interface IStarRaitingProps {
  raiting: number
}

export const StarRaiting = ({ raiting }: IStarRaitingProps) => {
  const totalStars = 5

  return (
    <div>
      <ul className="flex gap-5.5">
        {Array.from({ length: totalStars }, (_, idx) => (
          <li key={idx}>
            {Math.round(raiting) > idx ? (
              <StarTealIcon width={35} height={35} />
            ) : (
              <StarGrayIcon width={35} height={35} />
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
