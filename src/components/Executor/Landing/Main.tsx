import { Hero } from './Hero/Hero'
import { CallToAction } from './CallToAction/CallToAction'
import { HowItsWork } from './HowItsWork/HowItsWork'
import { ExecutorsFeedbacks } from './ExecutorsFeedbacks/ExecutorsFeedbacks'

export const Main = () => {
  return (
    <main className="">
      <Hero />
      <CallToAction />
      <HowItsWork />
      <ExecutorsFeedbacks />
    </main>
  )
}
