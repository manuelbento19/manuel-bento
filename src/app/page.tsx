import Hero from './_partials/hero';
import Skills from './_partials/skills';

export default function Home() {
  return (
    <div className='flex w-full px-4'>
      <div className='container flex flex-col pt-32'>
        <Hero />
        <Skills/>
      </div>
    </div>
  )
}