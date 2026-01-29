import { InputBar } from '@/components/uikit/InputBar/InputBar'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { servicseData } from './servicesData'

export const Services = () => {
  const { t } = useTranslation()
  const [value, setValue] = useState('')

  return (
    <section id="services">
      <div className="flex flex-col gap-10 pt-10 pb-15">
        <InputBar
          name="service"
          palceholder={t('what_u_looking')}
          value={value}
          onChange={setValue}
        />
        <div>
          <ul className="grid grid-cols-3 items-stretch gap-5">
            {servicseData.map((item, idx) => {
              const isHonest = idx % 2 === 0
              return (
                <li key={item.id} className="h-full">
                  <div
                    className={`flex h-[228px] flex-col gap-2.5 rounded-2xl p-6 shadow-md ${isHonest ? 'bg-primary' : 'bg-white'}`}
                  >
                    <h3
                      className={`text-2xl font-semibold ${isHonest ? 'text-white' : 'text-black'}`}
                    >
                      {item.name}
                    </h3>
                    <ul className="flex flex-col">
                      {item.services.map((el) => {
                        return (
                          <li key={el.id}>
                            <p
                              className={`text-md font-regular ${isHonest ? 'text-white' : 'text-black'}`}
                            >
                              {el.name}
                            </p>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
