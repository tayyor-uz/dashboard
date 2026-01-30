import { Main } from '@/components/Executor/Landing/Main/Main'
import { Footer } from '@/components/Footer/Footer'
import { ExecutorHeader } from '@/components/Header/ExecutorHeader/ExecutorHeader'

export const ExecutorLanding = () => {
  return (
    <>
      <ExecutorHeader />
      <main className="site-container flex w-full flex-col gap-[40px] py-[40px]">
        <Main />
      </main>
      <Footer />
    </>
  )
}
