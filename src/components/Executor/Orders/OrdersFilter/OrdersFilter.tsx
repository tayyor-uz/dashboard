import { Button } from '@/components/uikit/Button/Button'
import { Select } from '@/components/uikit/Select/Select'
import { districtsData } from './districtsData'
import { useFormik } from 'formik'
import { DatePicker } from 'antd'
import dayjs from 'dayjs'
import CalendarIcon from '@/assets/svg/card-calendar.svg?react'
import { t } from 'i18next'
import { RangeSlider } from '@/components/uikit/RangeSlider/RangeSlider'

const currentDate = dayjs()

const sufficsIcon = <CalendarIcon width={16} height={16} />

export const OrdersFilter = () => {
  const { values, setFieldValue, handleSubmit, resetForm } = useFormik({
    initialValues: {
      district: { id: 0, name: '' },
      startDate: '',
      endDate: '',
    },
    onSubmit: (values) => {
      console.log('values', values)
    },
  })

  return (
    <div className="w-full rounded-2xl border-[1px] border-gray-300 p-10">
      <p className="">Фильтры</p>
      <form onSubmit={handleSubmit} className="mt-11 flex flex-col gap-5">
        <Select
          label={t('districts')}
          placeholder={t('select_district')}
          value={values.district}
          options={districtsData}
          onChange={(value) => setFieldValue('district', value)}
        />
        <span className="h-[1px] w-full bg-gray-300" />
        <div className="flex flex-col gap-1">
          <span className="text-xs text-black/65">{t('date')}</span>
          <div className="flex items-center gap-1.5">
            <DatePicker
              value={values.startDate}
              placeholder={t('select_start_date')}
              format="DD-MM-YYYY"
              onChange={(value) => setFieldValue('startDate', value)}
              disabledDate={(date) =>
                (date && date.isAfter(currentDate.endOf('day'))) ||
                date.isAfter(values.endDate)
              }
              className="w-full"
            />
            <span className="h-[1px] w-3 bg-gray-300" />
            <DatePicker
              value={values.endDate}
              placeholder={t('select_end_date')}
              format="DD-MM-YYYY"
              onChange={(value) => setFieldValue('endDate', value)}
              disabledDate={(date) =>
                (date && date.isAfter(currentDate.endOf('day'))) ||
                date.isBefore(values.startDate)
              }
              className="w-full"
              suffixIcon={sufficsIcon}
            />
          </div>
        </div>
        <span className="h-[1px] w-full bg-gray-300" />
        <RangeSlider
          label={t('price')}
          maxAmount={1000}
          startValue={200}
          endValue={750}
          step={1}
        />
        <span className="h-[1px] w-full bg-gray-300" />
        <Select
          label={t('districts')}
          placeholder={t('select_district')}
          value={values.district}
          options={districtsData}
          onChange={(value) => setFieldValue('district', value)}
        />
        <span className="h-[1px] w-full bg-gray-300" />
        <Select
          label={t('districts')}
          placeholder={t('select_district')}
          value={values.district}
          options={districtsData}
          onChange={(value) => setFieldValue('district', value)}
        />
        <span className="h-[1px] w-full bg-gray-300" />
        <Select
          label={t('districts')}
          placeholder={t('select_district')}
          value={values.district}
          options={districtsData}
          onChange={(value) => setFieldValue('district', value)}
        />
        <Button
          type="submit"
          text="Применить"
          className="bg-primary text-white"
        />
        <Button
          type="button"
          text="Сбросить"
          onClick={() => resetForm()}
          className="bg-[#FFE5DD]"
        />
      </form>
    </div>
  )
}
