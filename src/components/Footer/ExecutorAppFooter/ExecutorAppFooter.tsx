import LogoIcon from '@/assets/svg/logo.svg?react'
import { Link } from 'react-router-dom'
import InfocomIcon from '@/assets/svg/footer/uzinfocom.svg?react'
import ItParkIcon from '@/assets/svg/footer/it-park.svg?react'
import { useTranslation } from 'react-i18next'
import TelegramIcon from '@/assets/svg/social-icons/telegram.svg?react'
import InstagramIcon from '@/assets/svg/social-icons/instagram.svg?react'
import AtIcon from '@/assets/svg/social-icons/at.svg?react'
import LinkedInIcon from '@/assets/svg/social-icons/linked-in.svg?react'
import { footerNavData } from './footerNavData'

const socialLinks = [
  { id: 1, link: '', icon: TelegramIcon },
  { id: 2, link: '', icon: InstagramIcon },
  { id: 3, link: '', icon: AtIcon },
  { id: 4, link: '', icon: LinkedInIcon },
]

export const ExecutorAppFooter = () => {
  const { t } = useTranslation()
  return (
    <footer className="bg-secondary py-7.5">
      <div className="site-container flex flex-col">
        <Link to="/executor" className="block w-fit">
          <LogoIcon />
        </Link>

        <div className="mt-13 flex justify-between">
          <div>
            <ul className="flex gap-10">
              {footerNavData.map((item) => (
                <li key={item.id} className="flex flex-col gap-2.5">
                  <p className="text-text-primary text-xl leading-[1.6] font-medium">
                    {item.title}
                  </p>
                  <ul className="flex flex-col gap-0.25">
                    {item.links.map((link) => (
                      <li key={link.id}>
                        <Link
                          to={link.link}
                          className="font-sans leading-[1.6] font-extralight"
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-7.5">
            <Link
              to={''}
              className="bg-primary rounded-xl px-13 py-3 text-center text-white"
            >
              {t('customer_support')}
            </Link>
            <div className="flex items-center justify-center gap-10">
              {socialLinks.map((item) => {
                const Icon = item.icon
                return (
                  <Link to={item.link}>
                    <Icon width={20} height={20} />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>

        <span className="bg-primary mt-11 block h-[1px] w-full" />

        <div className="mt-7 flex items-end justify-between">
          <div className="font-regular font-monts flex flex-col gap-4 text-sm">
            <span>© Tayyor.uz. Все права защищены.</span>
            <div className="flex gap-10">
              <Link to="/policy">Политика конфиденциальности</Link>
              <Link to="/conditions">Условия и положения</Link>
            </div>
          </div>
          <div className="flex gap-12">
            <Link to={'https://uzinfocom.uz'}>
              <InfocomIcon />
            </Link>
            <Link to={'https://www.it-park.uz'}>
              <ItParkIcon />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
