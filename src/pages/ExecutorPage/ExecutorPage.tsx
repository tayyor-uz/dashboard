import { Main } from '@/components/Executor/Main/Main'
import { Footer } from '@/components/Footer/Footer'
import { ExecutorHeader } from '@/components/Header/ExecutorHeader/ExecutorHeader'

export const ExecutorPage = () => {
  return (
    <>
      <ExecutorHeader />
      <main className="flex w-full flex-col gap-[40px] px-[10px] py-[40px] md:px-[52px]">
        <Main />
      </main>
      <Footer />
    </>
  )
}
