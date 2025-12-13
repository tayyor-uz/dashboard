interface ICardProps {
  icon: React.FC<React.SVGProps<SVGSVGElement>>
  title: string
  description: string
}

export const AdvantagesCard = ({ icon, title, description }: ICardProps) => {
  const Icon = icon

  return (
    <div className="flex h-fit flex-col">
      <Icon className="mb-[18px]" />
      <p className="mb-[7px] text-[23px] leading-[1.6] font-semibold">
        {title}
      </p>
      <span className="block text-[15px] text-gray-500">{description}</span>
    </div>
  )
}
