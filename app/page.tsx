import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Philosophy } from '@/components/Philosophy'
import { Experience } from '@/components/Experience'
import { Skills } from '@/components/Skills'
import { Impact } from '@/components/Impact'
import { Education } from '@/components/Education'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Philosophy />
        <Experience />
        <Skills />
        <Impact />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
