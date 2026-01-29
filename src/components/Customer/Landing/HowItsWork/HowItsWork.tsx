import { useTranslation } from 'react-i18next'

export const HowItsWork = () => {
  const { t } = useTranslation()

  return (
    <section id="how-its-work">
      <div className="flex flex-col items-center justify-center py-15">
        <h2>{t('how_its_work')}</h2>
      </div>
    </section>
  )
}
