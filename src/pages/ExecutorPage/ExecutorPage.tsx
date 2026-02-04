import { Main } from '@/components/Executor/Landing/Main'
import { ExecutorAppFooter } from '@/components/Footer/ExecutorAppFooter/ExecutorAppFooter'
import { ExecutorHeader } from '@/components/Header/ExecutorHeader/ExecutorHeader'

export const ExecutorPage = () => {
  return (
    <>
      <ExecutorHeader />
      <Main />
      <ExecutorAppFooter />
    </>
  )
}
