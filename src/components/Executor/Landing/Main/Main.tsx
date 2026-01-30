import { Hero } from './Hero'
import { Advantages } from './Advantages/Advantages'
import { Process } from './Process/Process'
import { Feedbacks } from './Feedbacks/Feedbacks'

export const Main = () => {
  return (
    <main className="site-container">
      <section id="hero" className="mt-[30px]">
        <Hero />
      </section>
      <section id="advantages" className="mt-[40px]">
        <Advantages />
      </section>
      <section id="process">
        <Process />
      </section>
      <section>
        <Feedbacks />
      </section>
    </main>
  )
}
