import "../index.css";

export default function Home() {
  return (
    <div className="bg-[#243B1E] min-h-screen text-white flex items-center flex-col px-10">
      <header className="flex flex-col items-center gap-4 bg-slate-300 h-60">
        <div className="bg-[#58854C] h-32 w-full absolute z-0 left-0 top 0"></div>
        <div className="flex items-center gap-5 absolute left-4 mt-20">
          <div className="w-40 h-40 bg-white rounded-full border-[6px] border-[#59CC5C] flex-1"></div>
          <div>
            <div className="flex gap-2 pt-4">
              <p className="text-2xl text-[#D5EFCD]">Nelson</p>
              <p className="text-base mt-[7px] text-[#91B188]">70 anos</p>
            </div>

            <p className="text-2xl text-[#AAFF90]">Olá, tudo bem?</p>
          </div>
        </div>
      </header>
      <main className="flex-1 w-full">
        <section className="w-full mt-10 rounded-lg grid grid-cols-3 gap-3 items-center justify-center">
          <div className="bg-[#58854C] border-2 border-[#85D186] h-[105px] rounded-3xl flex justify-center items-center text-[#DCFFDC] text-center">
            <p className="text-[11px] uppercase leading-3 font-semibold">
              Meta e <br />
              Progresso
            </p>
          </div>
          <div className="bg-[#58854C] border-2 border-[#85D186] h-[105px] rounded-3xl flex justify-center items-center text-[#DCFFDC] text-center">
            <p className="text-[11px] uppercase leading-3 font-semibold">
              Agradecimentos
            </p>
          </div>
          <div className="bg-[#58854C] border-2 border-[#85D186] h-[105px] rounded-3xl flex justify-center items-center text-[#DCFFDC] text-center">
            <p className="text-[11px] uppercase leading-3 font-semibold">
              Fotos e Vídeos
            </p>
          </div>
          <div className="bg-[#58854C] border-2 border-[#85D186] h-[105px] rounded-3xl flex justify-center items-center text-[#DCFFDC] text-center">
            <p className="text-[11px] uppercase leading-3 font-semibold">
              História <br />
              Pessoal
            </p>
          </div>
          <div className="bg-[#58854C] border-2 border-[#85D186] h-[105px] rounded-3xl flex justify-center items-center text-[#DCFFDC] text-center">
            <p className="text-[11px] uppercase leading-3 font-semibold">
              Depoimentos
            </p>
          </div>
          <div className="bg-[#58854C] border-2 border-[#85D186] h-[105px] rounded-3xl flex justify-center items-center text-[#DCFFDC] text-center">
            <p className="text-[11px] uppercase leading-3 font-semibold">
              Transparência
            </p>
          </div>
        </section>
        <section className="w-full bg-gradient-to-b from-[#C7FFC8] to-[#6C986D] mt-5 min-h-20 flex justify-center items-center border-4 border-[#59CC5C] rounded-full">
          <p className="uppercase text-[#2C4725] text-xl font-bold">Doar</p>
        </section>
      </main>
      <footer className="w-full from-[#C7FFC8] to-[#6C986D] mt-5 mb-10 min-h-20 text-center">
        <p className="text-[#B5EBB6] text-lg">Ajude a chegar até mais pessoas</p>
        <div className="flex justify-between items-center mt-5">
          <div className="w-16 h-16 rounded-xl bg-[#58854C] flex justify-center items-center">
            <p>F</p>
          </div>
          <div className="w-16 h-16 rounded-xl bg-[#58854C] flex justify-center items-center">
            <p>I</p>
          </div>
          <div className="w-16 h-16 rounded-xl bg-[#58854C] flex justify-center items-center">
            <p>W</p>
          </div>
          <div className="w-16 h-16 rounded-xl bg-[#58854C] flex justify-center items-center">
            <p>G</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
