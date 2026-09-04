import Hero from './_partials/hero'
import Skills from './_partials/skills'

export default function Home() {
  return (
    <div className='flex w-full px-4 pb-4'>
      <div className='container flex flex-col pt-36'>
        <Hero />
        <section className='mt-8'>
          <Skills />
        </section>
      </div>
    </div>
  )
}
