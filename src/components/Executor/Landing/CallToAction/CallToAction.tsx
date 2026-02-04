import { useState } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import qrImage from '@/assets/images/executor/main/qr.webp'

export const CallToAction = () => {
  const { t } = useTranslation()
  const [number, setNumber] = useState('')
  return (
    <section id="call-to-action" className="bg-primary">
      <div className="site-container flex justify-between py-10">
        <div className="flex flex-col">
          <h2 className="text-4xl leading-[1.1] font-semibold text-white">
            <Trans i18nKey="register_by_phone_number" />
          </h2>
          <input
            value={number}
            placeholder="+998 .. ... .. .."
            onChange={(e) => setNumber(e.target.value)}
            className="font-regular mt-10 w-full max-w-[460px] rounded-xl bg-white p-[15px_20px] text-2xl outline-none"
          />
          <button
            type="button"
            className="mt-6 w-full max-w-[280px] !rounded-2xl border-[2px] border-white py-3 text-2xl font-semibold text-white"
          >
            {t('continue')}
          </button>
        </div>
        <div className="flex flex-col items-center gap-6.5">
          <img
            src={qrImage}
            alt="qr-code"
            width={180}
            height={180}
            className=""
          />
          <p className="font-regular text-md max-w-[286px] text-center leading-[1] text-white">
            Наведите камеру телефоа, чтобы отсканировать QR - код и скачать
            приложение
          </p>
        </div>
      </div>
    </section>
  )
}
