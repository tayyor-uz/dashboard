import { executorNavigation } from './navigation'
import { NavMenuItem } from './NavMenuItem/NavMenuItem'

export const NavMenu = () => {
  return (
    <nav>
      <ul className="flex gap-[12px]">
        {executorNavigation.map(({ id, name, link, icon }) => (
          <NavMenuItem key={id} name={name} link={link} icon={icon} />
        ))}
      </ul>
    </nav>
  )
}
