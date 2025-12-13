import LogoIcon from '@/assets/svg/logo.svg?react'
import { Link } from 'react-router-dom'
import { Button } from '../uikit/Button/Button'
import LinkedInIcon from '@/assets/svg/linkedIn.svg?react'
import InstagramIcon from '@/assets/svg/Instagram.svg?react'
import TelegramIcon from '@/assets/svg/telegram.svg?react'

const footerNav = [
  {
    id: 1,
    title: 'Клиентам',
    links: [
      { id: 1, name: 'Новая задача', link: '' },
      { id: 2, name: 'Все услуги', link: '' },
      { id: 3, name: 'Условия использования', link: '' },
    ],
  },
  {
    id: 2,
    title: 'Специалистам',
    links: [
      { id: 1, name: 'Сайт для специалистов', link: '' },
      { id: 2, name: 'Вход для специалистов', link: '' },
    ],
  },
  {
    id: 3,
    title: 'Компания',
    links: [
      { id: 1, name: 'О компании', link: '' },
      { id: 2, name: 'Реклама на Tayyor.uz', link: '' },
      { id: 3, name: 'Жизнь на Tayyor.uz', link: '' },
    ],
  },
]

export const Footer = () => {
  return (
    <footer className="flex h-full flex-col gap-[50px] bg-[#F4F5FA] p-[85px_48px]">
      <Link to={'/'} className="max-w-[160px]">
        <LogoIcon className="w-[160px] max-w-[160px]" />
      </Link>

      <div className="flex max-h-[220px] w-full justify-between gap-[70px]">
        <ul className="flex w-[60%] justify-between gap-[25px]">
          {footerNav.map(({ id, title, links }) => (
            <li key={id} className="flex flex-col">
              <p className="mb-[10px] text-[20px] leading-[1.6] font-medium">
                {title}
              </p>
              <ul className="flex flex-col gap-[3px]">
                {links.map((link) => (
                  <li key={link.id}>
                    <Link
                      to={link.link}
                      className="text-[16px] font-extralight text-[#1E1E1E]"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div className="h-[220px] w-[1px] bg-[#525252]" />
        <div className="flex h-full w-[40%] flex-col items-start justify-between">
          <p className="mb-[8px] text-[20px] leading-[1.6] font-medium">
            Служба поддержки
          </p>
          <Button
            text="Чат с поддержкой"
            type="button"
            onClick={() => {}}
            className="block bg-[#AEAEAE]"
          />
          <div className="mt-[12px] flex items-center gap-[16px]">
            <LinkedInIcon />
            <InstagramIcon />
            <TelegramIcon />
          </div>
        </div>
      </div>
    </footer>
  )
}
