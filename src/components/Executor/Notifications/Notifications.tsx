import { Heading } from '@/components/uikit/Heading/Heading'
import { useTranslation } from 'react-i18next'
import { notificationsData } from './notificationsData'
import { NotificationCard } from './NotificationCard/NotificationCard'

export const Notifications = () => {
  const { t } = useTranslation()
  return (
    <div className="mx-auto flex max-w-[839px] flex-col gap-7 py-25">
      {notificationsData && !!notificationsData.length ? (
        <>
          <Heading title={t('notifications')} />
          <div className="flex flex-col gap-2.5">
            {notificationsData.map((item) => (
              <NotificationCard key={item.id} data={item} />
            ))}
          </div>
        </>
      ) : (
        <div className="mx-auto flex min-h-[60vh] w-full max-w-[567px] flex-col items-center justify-center gap-5">
          <Heading
            title={t('have_no_any_notifications')}
            className="leading-[1.8]"
          />
          <p className="text-center text-lg leading-[1.5] font-medium text-black/60">
            {t('no_notifications_description')}
          </p>
        </div>
      )}
    </div>
  )
}
