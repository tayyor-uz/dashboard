import { NavMenuItem } from './NavMenuItem/NavMenuItem'

interface INaMenuProps {
  menu: { id: number, name: string, link: string, icon: React.FC<React.SVGProps<SVGSVGElement>> }[]
}

export const NavMenu = ({ menu }: INaMenuProps) => {
  return (
    <nav>
      <ul className="flex gap-[12px]">
        {menu.map(({ id, name, link, icon }) => (
          <NavMenuItem key={id} name={name} link={link} icon={icon} />
        ))}
      </ul>
    </nav>
  )
}
