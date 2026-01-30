import { Footer } from '@/components/Footer/Footer'
import { CustomerHeader } from '@/components/Header/CustomerHeader/CustomerHeader'
import { Hero } from '../Hero/Hero'
import { Services } from '../Services/Services'
import { HowItsWork } from '../HowItsWork/HowItsWork'
import { Feedbacks } from '../Feedbacks/Feedbacks'

export const MainLandingCustomer = () => {
  return (
    <>
      <CustomerHeader />
      <main className="site-container">
        <Hero />
        <Services />
        <HowItsWork />
        <Feedbacks />
      </main>
      <Footer />
    </>
  )
}
