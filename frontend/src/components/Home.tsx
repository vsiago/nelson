export default function Home() {
  return (
    <div className='bg-red-500 min-h-screen text-white flex items-center pt-20 flex-col p-5'>
      <header className="flex flex-col items-center gap-4">
        <div className="w-44 h-44 bg-white rounded-full"></div>
        <p className="tracking-widest text-2xl">HOME</p>
      </header>
      <main className="w-full bg-red-400 mt-10 min-h-60 rounded-lg flex flex-1 justify-center items-center">
      <p className="">Corpo</p>

      </main>
      <footer className="w-full bg-red-400 mt-5 min-h-20 rounded-lg flex justify-center items-center">
        <p className="">Obrigado por tudo!</p>
      </footer>
    </div>
  )
}