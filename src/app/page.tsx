import ThemeSwitcher from "@/components/ui/theme-switcher";

export default function Home() {
  return (
    <div className='h-full w-full px-2 py-5'>
      <div className='container mx-auto'>
        <header className='flex items-center justify-between'>
          <h1 className='text-xl font-bold text-gray-900 dark:text-gray-200'>MB</h1>
          <ThemeSwitcher/>
        </header>
      </div>
    </div>
  )
}
