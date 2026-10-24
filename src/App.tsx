import { useState } from 'react';
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  ClipboardCheck,
  Clock3,
  Mail,
  MapPin,
  Menu,
  Pill,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  X,
} from 'lucide-react';

const services = [
  {
    icon: Pill,
    number: '01',
    title: 'Bemanning på apotek',
    text: 'Rätt farmaceut på rätt plats – vid hög belastning, sjukfrånvaro, semester eller när ni behöver växla upp.',
  },
  {
    icon: ClipboardCheck,
    number: '02',
    title: 'Kvalitet & läkemedelshantering',
    text: 'Erfarna sakkunniga som säkrar rutiner, patientsäkerhet och en trygg läkemedelshantering i vardagen.',
  },
  {
    icon: Stethoscope,
    number: '03',
    title: 'Utbildning & utveckling',
    text: 'Praktisk kompetensutveckling som stärker teamet och skapar långsiktigt hållbara apotek.',
  },
];

const benefits = [
  'Legitimerade och kvalitetssäkrade farmaceuter',
  'Snabb matchning över hela Sverige',
  'Flexibla upplägg för stora och små behov',
  'En partner som förstår apotekets vardag',
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f8f5] text-[#18302a]">
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <a href="#top" className="group flex items-center gap-3" onClick={closeMenu}>
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#18302a]/20 bg-white/70 transition group-hover:bg-[#18302a]">
              <span className="font-serif text-xl text-[#18302a] transition group-hover:text-white">V</span>
            </div>
            <div>
              <p className="text-[15px] font-semibold tracking-[0.16em] text-[#18302a]">VITAE PHARMA</p>
              <p className="hidden text-[10px] uppercase tracking-[0.18em] text-[#5d716a] sm:block">Farmaceutisk kompetens</p>
            </div>
          </a>

          <nav className="hidden items-center gap-9 text-sm font-medium text-[#385149] md:flex">
            <a className="transition hover:text-[#b35f3f]" href="#tjanster">Tjänster</a>
            <a className="transition hover:text-[#b35f3f]" href="#om-oss">Om oss</a>
            <a className="transition hover:text-[#b35f3f]" href="#kontakt">Kontakt</a>
            <a className="inline-flex items-center gap-2 rounded-full bg-[#18302a] px-5 py-3 text-white transition hover:bg-[#b35f3f]" href="#kontakt">
              Behöver ni hjälp <ArrowUpRight size={16} />
            </a>
          </nav>

          <button
            aria-label={menuOpen ? 'Stäng meny' : 'Öppna meny'}
            className="rounded-full border border-[#18302a]/15 bg-white/60 p-3 text-[#18302a] md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="mx-4 rounded-2xl border border-[#18302a]/10 bg-[#f7f8f5] p-5 shadow-xl md:hidden">
            <div className="flex flex-col gap-4 text-base font-medium">
              <a href="#tjanster" onClick={closeMenu}>Tjänster</a>
              <a href="#om-oss" onClick={closeMenu}>Om oss</a>
              <a href="#kontakt" onClick={closeMenu}>Kontakt</a>
              <a className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#18302a] px-5 py-3 text-white" href="#kontakt" onClick={closeMenu}>Behöver ni hjälp <ArrowUpRight size={16} /></a>
            </div>
          </nav>
        )}
      </header>

      <main id="top">
        <section className="relative isolate min-h-[760px] overflow-hidden bg-[#e7ede8] pt-32 lg:min-h-[820px] lg:pt-44">
          <div className="absolute -right-40 top-10 -z-10 h-[560px] w-[560px] rounded-full bg-[#d7e3db] blur-3xl" />
          <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pb-28">
            <div className="max-w-2xl">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#18302a]/15 bg-white/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#536861]">
                <Sparkles size={14} className="text-[#b35f3f]" />
                Kompetens som gör skillnad
              </div>
              <h1 className="max-w-xl font-serif text-5xl leading-[0.98] tracking-[-0.04em] text-[#18302a] sm:text-6xl lg:text-8xl">
                Ett tryggare apotek börjar med rätt <span className="italic text-[#b35f3f]">kompetens.</span>
              </h1>
              <p className="mt-8 max-w-lg text-lg leading-8 text-[#536861]">
                Vitae Pharma erbjuder sakkunniga farmaceutkonsulter till apotek och läkemedelsverksamheter i hela Sverige.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a href="#kontakt" className="inline-flex items-center justify-center gap-3 rounded-full bg-[#18302a] px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#b35f3f]">
                  Prata med oss <ArrowUpRight size={17} />
                </a>
                <a href="#tjanster" className="inline-flex items-center justify-center gap-3 rounded-full border border-[#18302a]/20 px-6 py-4 text-sm font-semibold text-[#18302a] transition hover:border-[#18302a] hover:bg-white/60">
                  Våra tjänster <ChevronDown size={17} />
                </a>
              </div>
              <div className="mt-14 flex items-center gap-4 border-t border-[#18302a]/10 pt-6 text-sm text-[#536861]">
                <div className="flex -space-x-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#e7ede8] bg-[#b35f3f] text-xs font-bold text-white">Rx</span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#e7ede8] bg-[#9db8a8] text-xs font-bold text-[#18302a]">+</span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#e7ede8] bg-[#d9b89e] text-xs font-bold text-[#18302a]">V</span>
                </div>
                <span>För apotek i hela Sverige</span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[480px]">
              <div className="absolute -left-5 top-12 z-10 rounded-2xl border border-[#18302a]/10 bg-white p-4 shadow-xl sm:-left-12">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#e7ede8] text-[#b35f3f]"><ShieldCheck size={21} /></div>
                <p className="text-xs uppercase tracking-[0.14em] text-[#71837b]">Vårt löfte</p>
                <p className="mt-1 font-serif text-xl text-[#18302a]">Trygghet först.</p>
              </div>
              <div className="relative aspect-[0.84] overflow-hidden rounded-[11rem] rounded-br-[3rem] border-[14px] border-white/70 bg-white shadow-2xl">
                <img src="/images/PHOTO-2026-10-12-11-44-29.jpg" alt="Vitae Pharmas logotyp" className="h-full w-full object-cover object-top" />
              </div>
              <div className="absolute -bottom-5 -right-2 flex items-center gap-3 rounded-2xl bg-[#18302a] px-5 py-4 text-white shadow-xl sm:-right-8">
                <Clock3 size={20} className="text-[#d9b89e]" />
                <div><p className="text-xs text-[#b7c9c0]">När ni behöver oss</p><p className="text-sm font-semibold">Snabbt. Smidigt. Säkert.</p></div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-10 bg-[#f7f8f5]" style={{ clipPath: 'ellipse(65% 100% at 50% 100%)' }} />
        </section>

        <section id="tjanster" className="mx-auto max-w-7xl scroll-mt-10 px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#b35f3f]">Det vi gör</p>
              <h2 className="max-w-md font-serif text-4xl leading-tight tracking-[-0.03em] text-[#18302a] sm:text-5xl">Kompetens när och där den behövs.</h2>
              <p className="mt-6 max-w-md text-base leading-7 text-[#647770]">Vi möter apotekets verklighet med lyhördhet, erfarenhet och ett genuint engagemang för läkemedel och människor.</p>
            </div>
            <div className="divide-y divide-[#18302a]/10 border-y border-[#18302a]/10">
              {services.map(({ icon: Icon, number, title, text }) => (
                <article key={number} className="group grid gap-5 py-8 sm:grid-cols-[72px_1fr_auto] sm:items-start sm:gap-8">
                  <div className="flex items-center gap-4"><span className="text-sm text-[#b35f3f]">{number}</span><div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e7ede8] text-[#18302a] transition group-hover:bg-[#18302a] group-hover:text-white"><Icon size={19} /></div></div>
                  <div><h3 className="font-serif text-2xl text-[#18302a]">{title}</h3><p className="mt-2 max-w-xl leading-7 text-[#647770]">{text}</p></div>
                  <ArrowUpRight className="hidden text-[#b35f3f] transition group-hover:translate-x-1 group-hover:-translate-y-1 sm:block" size={22} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="om-oss" className="scroll-mt-10 bg-[#18302a] text-[#f7f8f5]">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[1fr_1fr] lg:items-center lg:px-10 lg:py-32">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#d9b89e]">Vår roll</p>
              <h2 className="max-w-xl font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-5xl">Vi hjälper er att övervinna vardagens utmaningar.</h2>
              <p className="mt-7 max-w-xl text-lg leading-8 text-[#b7c9c0]">När trycket ökar ska ni kunna fokusera på det viktigaste – era kunder och patienter. Vi ser till att rätt kompetens finns på plats, utan krångel.</p>
              <a href="#kontakt" className="mt-9 inline-flex items-center gap-3 border-b border-[#d9b89e] pb-2 text-sm font-semibold text-[#f7f8f5] transition hover:text-[#d9b89e]">Låt oss hitta en lösning <ArrowUpRight size={17} /></a>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {benefits.map((benefit) => <div key={benefit} className="rounded-2xl border border-white/10 bg-white/5 p-5"><Check size={19} className="mb-8 text-[#d9b89e]" /><p className="text-base leading-6 text-[#e1e9e4]">{benefit}</p></div>)}
            </div>
          </div>
        </section>

        <section id="kontakt" className="scroll-mt-10 px-6 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 rounded-[2rem] bg-[#e7ede8] p-8 sm:p-12 lg:grid-cols-[1fr_0.85fr] lg:p-20">
            <div><p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#b35f3f]">Kontakta oss</p><h2 className="max-w-lg font-serif text-4xl leading-tight tracking-[-0.03em] text-[#18302a] sm:text-5xl">Behöver ni förstärka ert team?</h2><p className="mt-6 max-w-md leading-7 text-[#647770]">Berätta vad ni behöver hjälp med så återkommer vi med en lösning som passar er verksamhet.</p></div>
            <div className="flex flex-col justify-center gap-4">
              <a href="mailto:kontakt@vitaepharma.se" className="group flex items-center justify-between rounded-2xl bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg"><span className="flex items-center gap-4"><Mail className="text-[#b35f3f]" size={21} /><span><span className="block text-xs uppercase tracking-[0.14em] text-[#8a9992]">E-post</span><span className="mt-1 block font-medium text-[#18302a]">kontakt@vitaepharma.se</span></span></span><ArrowUpRight className="text-[#18302a] transition group-hover:translate-x-1 group-hover:-translate-y-1" size={20} /></a>
              <div className="flex items-center gap-4 rounded-2xl border border-[#18302a]/10 p-5"><MapPin className="text-[#b35f3f]" size={21} /><span><span className="block text-xs uppercase tracking-[0.14em] text-[#8a9992]">Vi finns nära er</span><span className="mt-1 block font-medium text-[#18302a]">Hela Sverige</span></span></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#18302a]/10 px-6 py-8 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-[#647770] sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} Vitae Pharma</p><p>Sakkunniga farmaceuter för ett liv med läkemedel</p></div></footer>
    </div>
  );
}

export default App;
