import { Board } from '@/components/shared/Board/Board'
import { Page } from '@/components/shared/Page/Page'
import { useTranslation } from 'react-i18next'
import { profileData } from './profileData'
import { StarRaiting } from '@/components/uikit/StarRaiting/StarRaiting'
import profileAvatar from '@/assets/images/executor/app/profile-avatar.webp'
import PenIcon from '@/assets/svg/pen.svg?react'

export const Profile = () => {
  const { t } = useTranslation()
  return (
    <Page heading={t('profile')} className="mx-auto max-w-[850px] py-10">
      <Board className="">
        <div className="relative">
          <div className="flex flex-col gap-5 border-b-[1px] border-black/15 px-12.5 py-5 pt-12.5">
            <div className="flex items-center gap-13">
              <img src={profileAvatar} width={123} height={123} alt="avatar" />
              <StarRaiting raiting={4} />
            </div>
            <h2 className="text-3xl font-medium text-[#1E1E1E]">
              {profileData.firstName} {profileData.secondName}
            </h2>
            <p className="font-monts flex items-center justify-between text-[28px] font-medium">
              {t('direction')}:{' '}
              <span className="text-xl text-black/60">
                {profileData.department.join(', ')}
              </span>
            </p>
          </div>
          <div className="gap5 flex flex-col gap-5 border-b-[1px] border-black/15 px-12.5 py-5">
            <p className="font-monts text-3xl font-medium">
              {t('contact_details')}:
            </p>
            <div className="font-monts flex justify-between font-medium">
              <span className="text-xl text-black/60">
                {profileData.contactInfo.email}
              </span>
              <span className="text-xl text-black/60">
                {profileData.contactInfo.phone}
              </span>
            </div>
          </div>
          <div className="font-monts flex flex-col gap-5 px-12.5 py-5 font-medium">
            <div className="flex flex-col gap-5">
              <p className="text-3xl">{t('address')}</p>
              <span className="text-xl text-black/60">
                {profileData.address}:
              </span>
            </div>
            <div className="flex flex-col gap-5">
              <p className="font-monts text-3xl font-medium">
                {t('work_schedule')}
              </p>
              <span className="text-xl text-black/60">
                {profileData.schedule}:
              </span>
            </div>
          </div>
          <button
            type="button"
            className="bg-primary absolute top-10 right-9 px-4 py-3"
          >
            <PenIcon width={18} height={18} />
          </button>
        </div>
      </Board>
    </Page>
  )
}
