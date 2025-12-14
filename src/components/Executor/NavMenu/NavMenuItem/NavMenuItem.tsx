import { Link } from 'react-router-dom'

interface INavMenuItem {
  name: string
  link: string
  icon: React.FC<React.SVGProps<SVGSVGElement>>
}

export const NavMenuItem = ({ name, link, icon: Icon }: INavMenuItem) => {
  return (
    <li className="">
      <Link
        to={link}
        className="font-regular font-monts flex flex-col items-center gap-[6px] text-[11px] leading-[1]"
      >
        <Icon
          className="h-[16px] w-[16px]"
          width={16}
          height={16}
          color="red"
        />
        {name}
      </Link>
    </li>
  )
}
