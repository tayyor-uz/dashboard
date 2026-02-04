import { t } from 'i18next'
import { Link } from 'react-router-dom'

export const HowItsWork = () => {
  const steps = [
    {
      number: 1,
      title: 'Регистрируйтесь и заполняйте профиль',
      description:
        'После регистрации специалист видит список заказов, подходящих под его навыки',
      position: 'left',
    },
    {
      number: 2,
      title: 'Выбирайте подходящие заказы',
      description: 'Связываетесь с клиентом напрямую и уточняете детали и цену',
      position: 'right',
    },
    {
      number: 3,
      title: 'Выполняйте работу и получайте оплату',
      description:
        'Деньги поступают на ваш счет напрямую от клиента после завершения заказа',
      position: 'left',
    },
  ]

  return (
    <section id="how-its-work" className="bg-[#f5f5f5]">
      <div className="site-container flex flex-col py-16">
        <h2 className="mb-16 text-center text-5xl font-semibold">
          Как это работает?
        </h2>

        <div className="relative">
          <div className="flex flex-col gap-30">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex items-center">
                {/* Левый контент */}
                <div className="flex w-1/2 items-center">
                  {step.position === 'left' && (
                    <>
                      <div className="max-w-[415px]">
                        <h3 className="text-4xl font-semibold">{step.title}</h3>
                        <p className="text-md text-text-primary mt-6">
                          {step.description}
                        </p>
                      </div>
                    </>
                  )}
                </div>

                {/* Номер шага */}
                <div
                  className={`z-10 flex items-center justify-center bg-[#f5f5f5] ${step.number === 1 ? 'pr-4' : 'px-2'}`}
                >
                  <span className="text-primary text-9xl font-semibold">
                    {step.number}
                  </span>
                </div>

                {/* Правый контент */}
                <div className="flex w-1/2 items-center justify-end">
                  {step.position === 'right' && (
                    <>
                      <div className="max-w-[415px] text-right">
                        <h3 className="text-4xl font-semibold">{step.title}</h3>
                        <p className="text-md text-text-primary mt-6 ml-auto max-w-[319px]">
                          {step.description}
                        </p>
                      </div>
                    </>
                  )}
                </div>

                {/* Вертикальные сегменты линии (до и после цифры) */}
                {index > 0 && (
                  <div className="bg-primary absolute bottom-full left-1/2 h-30 w-[2px] -translate-x-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
        <Link
          to={''}
          className="bg-primary mx-auto mt-30 flex w-full max-w-[312px] items-center justify-center rounded-xl p-2.5 text-2xl text-white"
        >
          {t('find_orders')}
        </Link>
      </div>
    </section>
  )
}
