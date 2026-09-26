import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Instagram, MapPin, Quote } from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import portrait from "@/assets/gabriela-zieba.jpg.asset.json";
import certBuccal from "@/assets/certyfikat-masaz-transbukalny.jpg.asset.json";
import certKobido from "@/assets/certyfikat-physio-kobido.jpg.asset.json";
import certDeep from "@/assets/certyfikat-deep-tissue.jpg.asset.json";
import certGuaSha from "@/assets/certyfikat-gua-sha.jpg.asset.json";
import certRakowski from "@/assets/dyplom-terapia-manualna-rakowskiego.jpg.asset.json";
import certCcat from "@/assets/certyfikat-ccat.jpg.asset.json";
import certUro from "@/assets/certyfikat-uroginekologia.jpg.asset.json";

const BOOKING_URL = "https://www.znanylekarz.pl/gabriela-zieba/fizjoterapeuta/krakow";
const INSTAGRAM_URL = "https://www.instagram.com/physio.gabi/";

const concerns = [
  "Migreny i bóle głowy",
  "Bruksizm i napięcie żuchwy",
  "Problemy w obrębie stawów skroniowo-żuchwowych",
  "Napięcia twarzy, szyi i karku",
  "Porażenie nerwu twarzowego",
  "Problemy związane z napięciem i stresem",
  "Bóle kręgosłupa",
  "Bóle bioder i miednicy",
  "Rwa kulszowa i rwa udowa",
  "Przygotowanie do zabiegów chirurgicznych",
  "Fizjoterapia pooperacyjna",
];

const specialties = [
  {
    number: "01",
    title: "Fizjoterapia stomatologiczna",
    text: "Praca z napięciem mięśni żwaczy, stawami skroniowo-żuchwowymi, bruksizmem, bólami głowy oraz dolegliwościami w obrębie twarzy i szyi.",
  },
  {
    number: "02",
    title: "Fizjoterapia twarzowo-szczękowa",
    text: "Wsparcie pacjentów przed i po zabiegach chirurgicznych oraz terapia problemów w obrębie twarzy, szczęki i szyi.",
  },
  {
    number: "03",
    title: "Fizjoterapia estetyczna",
    text: "Połączenie terapii manualnej, pracy z napięciami i technik modelowania twarzy w podejściu holistycznym.",
  },
];

const certificates = [
  { src: certBuccal.url, title: "Masaż transbukalny twarzy", shape: "portrait" },
  { src: certKobido.url, title: "PhysioKOBIDO", shape: "landscape" },
  { src: certDeep.url, title: "Masaż tkanek głębokich w ujęciu klinicznym", shape: "portrait" },
  { src: certGuaSha.url, title: "Gua Sha — face massage", shape: "portrait" },
  { src: certRakowski.url, title: "Terapia Manualna Rakowskiego", shape: "portrait" },
  { src: certCcat.url, title: "Dysfunkcje kompleksu CCAT", shape: "portrait" },
  { src: certUro.url, title: "Diagnostyka i terapia w uroginekologii", shape: "portrait" },
];

const services = [
  { name: "Fizjoterapia stawów skroniowo-żuchwowych", price: "220 zł", detail: "Wizyta dla osób z bólem lub zaburzeniami pracy stawów skroniowo-żuchwowych." },
  { name: "Fizjoterapia stomatologiczna", price: "220 zł", detail: "Praca z napięciem mięśni twarzy, żuchwy i skroni, także podczas leczenia stomatologicznego lub ortodontycznego." },
  { name: "Fizjoterapia szczękowo-twarzowa", price: "220–250 zł", detail: "Indywidualnie dobrane wsparcie w dolegliwościach obszaru twarzy, szczęki i szyi." },
  { name: "Masaż twarzy Kobido", price: "250 zł", detail: "Manualna praca z tkankami twarzy w spokojnej, komfortowej atmosferze." },
  { name: "Fizjoterapia estetyczna", price: "220 zł", detail: "Terapia manualna i techniki pracy z napięciami dobrane do potrzeb pacjenta." },
  { name: "Masaż Kobido", price: "250 zł", detail: "Wielowymiarowy masaż twarzy oparty na technikach manualnych." },
  { name: "Masaż Kobido + taping", price: "280 zł", detail: "Masaż Kobido uzupełniony indywidualnie dobraną aplikacją tapingu." },
  { name: "Masaż relaksacyjny całego ciała", price: "300 zł", detail: "Spokojna sesja nastawiona na rozluźnienie i odpoczynek." },
];

const reviews = [
  { author: "Ewelina", service: "Fizjoterapia stomatologiczna", text: "Przyszłam na wizytę z bardzo silnymi bólami głowy, które są moim problemem od lat… Dostałam kilka ćwiczeń, które robię codziennie w domu, i pierwszy raz od lat budzę się bez spiętej szczęki i zaciśniętych zębów." },
  { author: "A.P.", service: "Fizjoterapia stomatologiczna", text: "Już pierwsza wizyta przyniosła mi dużo nadziei na poprawę! Dowiedziałam się wielu nowych rzeczy. Mamy plan działania. Bardzo profesjonalne i przyjazne pacjentowi podejście." },
  { author: "Julia", service: "Fizjoterapia stomatologiczna", text: "Bardzo ciepła i empatyczna osoba. Dużo tłumaczy i ma kompleksowe podejście do leczenia! Już dwie wizyty zrobiły dużą różnicę." },
  { author: "Natalia Habigier", service: "Fizjoterapia stawów skroniowo-żuchwowych", text: "Pani Gabriela mocno zainteresowana problemem pacjenta, z pełnym zaangażowaniem szuka rozwiązania i doradza, jakie kroki podjąć w dalszej perspektywie." },
  { author: "Darek", service: "Fizjoterapia stawów skroniowo-żuchwowych", text: "Bardzo profesjonalne i — co najważniejsze — niezwykle uczciwe podejście do pacjenta. Pani Gabriela przeprowadziła dokładne badanie… Największy plus za rzetelność." },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "mgr Gabriela Zięba — Fizjoterapia stomatologiczna i twarzowo-szczękowa | Kraków" },
      { name: "description", content: "Fizjoterapia stomatologiczna, twarzowo-szczękowa i estetyczna w Krakowie. Poznaj podejście mgr Gabrieli Zięby i umów wizytę." },
      { property: "og:title", content: "mgr Gabriela Zięba — Fizjoterapia w Krakowie" },
      { property: "og:description", content: "Fizjoterapia stomatologiczna, twarzowo-szczękowa i estetyczna w Krakowie — spokojnie, uważnie i indywidualnie." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function BookingButton({ label = "Umów wizytę", className = "" }: { label?: string; className?: string }) {
  return (
    <Button asChild size="lg" className={`h-12 rounded-full px-6 text-[0.72rem] font-semibold uppercase tracking-[0.16em] shadow-none ${className}`}>
      <a href={BOOKING_URL} target="_blank" rel="noreferrer">{label}<ArrowUpRight aria-hidden="true" /></a>
    </Button>
  );
}

function SectionIntro({ eyebrow, title, text, light = false }: { eyebrow: string; title: string; text?: string; light?: boolean }) {
  return (
    <div className="max-w-3xl">
      <p className={`eyebrow ${light ? "text-primary-foreground/65" : "text-primary"}`}>{eyebrow}</p>
      <h2 className={`mt-5 font-display text-4xl leading-[1.06] sm:text-5xl lg:text-6xl ${light ? "text-primary-foreground" : "text-foreground"}`}>{title}</h2>
      {text ? <p className={`mt-6 max-w-2xl text-base leading-8 sm:text-lg ${light ? "text-primary-foreground/78" : "text-muted-foreground"}`}>{text}</p> : null}
    </div>
  );
}

function HomePage() {
  return (
    <div className="overflow-x-clip bg-background pb-20 md:pb-0">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto grid h-[4.5rem] max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:px-10">
          <a href="#top" className="min-w-0 font-display text-xl text-foreground sm:text-2xl">Gabriela Zięba</a>
          <nav aria-label="Główna nawigacja" className="hidden min-w-0 items-center justify-center gap-8 lg:flex">
            <a className="nav-link" href="#pomoc">Zakres pomocy</a>
            <a className="nav-link" href="#o-mnie">O mnie</a>
            <a className="nav-link" href="#kwalifikacje">Kwalifikacje</a>
            <a className="nav-link" href="#cennik">Cennik</a>
            <a className="nav-link" href="#opinie">Opinie</a>
          </nav>
          <BookingButton className="hidden sm:inline-flex" />
          <Button asChild size="sm" className="h-10 rounded-full px-4 text-[0.65rem] font-semibold uppercase tracking-[0.12em] shadow-none sm:hidden">
            <a href={BOOKING_URL} target="_blank" rel="noreferrer">Umów wizytę</a>
          </Button>
        </div>
      </header>

      <section id="top" className="relative">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-12 sm:px-8 sm:py-16 lg:min-h-[48rem] lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:py-20">
          <div className="relative z-10 max-w-3xl animate-soft-rise">
            <p className="eyebrow text-primary">Fizjoterapia <span aria-hidden="true">•</span> Kraków</p>
            <h1 className="mt-6 max-w-3xl font-display text-[clamp(3rem,6vw,5.8rem)] leading-[0.98] text-foreground">Fizjoterapia, która zaczyna się od <em className="font-normal text-primary">zrozumienia</em> Twojego ciała.</h1>
            <div className="mt-8 max-w-xl border-l border-primary/40 pl-5 sm:pl-7">
              <p className="font-display text-2xl text-foreground">mgr Gabriela Zięba</p>
              <p className="mt-3 text-base leading-7 text-muted-foreground">Fizjoterapia stomatologiczna, twarzowo-szczękowa i estetyczna. Pomagam pracować z napięciem, bólem i dyskomfortem, łącząc terapię manualną z indywidualnie dobranymi ćwiczeniami.</p>
            </div>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <BookingButton />
              <Button asChild variant="ghost" size="lg" className="h-12 rounded-full px-5 text-sm text-foreground hover:bg-secondary">
                <a href="#o-mnie">Poznaj mnie <ArrowRight aria-hidden="true" /></a>
              </Button>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[34rem] lg:mr-0">
            <div className="portrait-frame relative aspect-[4/5] overflow-hidden bg-secondary">
              <img src={portrait.url} alt="mgr Gabriela Zięba, fizjoterapeutka w Krakowie" className="h-full w-full object-cover object-[50%_25%]" fetchPriority="high" />
            </div>
            <div className="absolute -bottom-5 -left-2 border border-border bg-background px-5 py-4 shadow-soft sm:-left-8 sm:px-6">
              <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Specjalizacja</p>
              <p className="mt-1 font-display text-lg text-foreground">twarz, głowa i szyja</p>
            </div>
          </div>
        </div>
        <div className="border-y border-border bg-secondary/55">
          <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-border px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8 lg:px-10">
            {["mgr fizjoterapii", "specjalizacja: twarz, głowa i szyja", "Kraków"].map((item, index) => (
              <div key={item} className="flex min-h-20 items-center gap-4 py-4 sm:justify-center sm:px-5"><span className="font-display text-xl text-primary">0{index + 1}</span><span className="text-xs uppercase tracking-[0.13em] text-foreground">{item}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section id="pomoc" className="section-space scroll-mt-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
            <SectionIntro eyebrow="Zakres pomocy" title="Z czym możesz się do mnie zgłosić?" text="Pracuję przede wszystkim z dolegliwościami związanymi z napięciem, bólem i funkcjonowaniem obszaru twarzy, głowy, szyi oraz całego układu ruchu." />
            <div className="grid sm:grid-cols-2">
              {concerns.map((item, index) => <div key={item} className="group flex min-h-20 items-center gap-4 border-b border-border py-5 sm:px-5"><span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary transition-transform group-hover:scale-150" /><p className="text-sm leading-6 text-foreground">{item}</p>{index % 2 === 0 ? null : null}</div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-secondary/65">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionIntro eyebrow="Moje specjalizacje" title="Obszary, w których pracuję" />
          <div className="mt-14 grid border-y border-border lg:grid-cols-3 lg:divide-x lg:divide-border">
            {specialties.map((item) => <article key={item.number} className="group border-b border-border py-9 last:border-b-0 lg:border-b-0 lg:px-8 lg:first:pl-0 lg:last:pr-0"><p className="font-display text-2xl text-primary/65">{item.number}</p><h3 className="mt-10 max-w-xs font-display text-3xl leading-tight text-foreground">{item.title}</h3><p className="mt-5 text-sm leading-7 text-muted-foreground">{item.text}</p></article>)}
          </div>
          <Button asChild variant="link" className="mt-8 h-auto px-0 py-2 text-xs uppercase tracking-[0.15em] no-underline hover:no-underline"><a href={BOOKING_URL} target="_blank" rel="noreferrer">Umów wizytę <ArrowRight aria-hidden="true" /></a></Button>
        </div>
      </section>

      <section id="o-mnie" className="section-space scroll-mt-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-start lg:gap-24 lg:px-10">
          <div className="relative lg:sticky lg:top-28">
            <div className="aspect-[4/5] overflow-hidden rounded-t-[9rem] bg-secondary sm:rounded-t-[13rem]"><img src={portrait.url} alt="Gabriela Zięba — fizjoterapeutka" className="h-full w-full object-cover object-[48%_25%]" loading="lazy" /></div>
            <p className="mt-4 text-xs uppercase tracking-[0.16em] text-muted-foreground">Uważność · wiedza · indywidualne podejście</p>
          </div>
          <div>
            <SectionIntro eyebrow="O mnie" title="Poznajmy się" />
            <div className="mt-9 space-y-6 text-base leading-8 text-muted-foreground">
              <p className="text-lg leading-8 text-foreground">Studia magisterskie na kierunku fizjoterapia ukończyłam z wyróżnieniem. Podczas studiów realizowałam praktyki zawodowe w licznych placówkach ochrony zdrowia na terenie Krakowa, co pozwoliło mi szczególnie zainteresować się tematyką problemów w obrębie twarzy, głowy i szyi — fizjoterapią stomatologiczną oraz estetyczną.</p>
              <p>Pomagam pacjentom z częstymi migrenami, bruksizmem, napięciowymi bólami głowy, permanentnym stresem, problemami logopedycznymi oraz w przypadku porażenia nerwu twarzowego, łącząc terapię manualną z indywidualnie dobranymi ćwiczeniami.</p>
              <p>Zajmuję się również przygotowaniem pacjentów do zabiegów chirurgicznych w obrębie twarzy i szyi oraz fizjoterapią pooperacyjną.</p>
              <div className="my-9 h-px bg-border" />
              <p>Ukończyłam 4-modułowy kurs terapii manualnej dr. Rakowskiego w nurcie dynamicznym. Pozwala mi to prowadzić holistyczną terapię dolegliwości bólowych w obrębie kręgosłupa, żeber, stawów biodrowych czy miednicy.</p>
              <p>W fizjoterapii estetycznej łączę różne techniki z zakresu liftingu i modelowania twarzy, opierając się na podejściu, według którego praca z napięciami całego organizmu może korzystnie wspierać zdrowy wygląd.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
            <SectionIntro eyebrow="Moje podejście" title="Terapia to nie tylko miejsce, które boli." text="Patrzę na organizm jako całość. Podczas wizyty ważne jest dla mnie nie tylko miejsce występowania bólu, ale również napięcia, codzienne nawyki, stres i sposób, w jaki ciało funkcjonuje jako całość." light />
            <p className="self-end text-base leading-8 text-primary-foreground/78">Łączę terapię manualną z indywidualnie dobranymi ćwiczeniami, tak aby pacjent otrzymał nie tylko terapię w gabinecie, ale również wiedzę i narzędzia do samodzielnej pracy.</p>
          </div>
          <div className="mt-16 grid border-t border-primary-foreground/20 md:grid-cols-3 md:divide-x md:divide-primary-foreground/20">
            {[{t:"Uważność",d:"Dokładny wywiad i badanie."},{t:"Indywidualne podejście",d:"Terapia dopasowana do konkretnej osoby."},{t:"Wiedza",d:"Wyjaśniam, co może stać za problemem i jak możesz pracować z nim również poza gabinetem."}].map((v,i)=><div key={v.t} className="border-b border-primary-foreground/20 py-8 md:border-b-0 md:px-8 md:first:pl-0"><span className="font-display text-xl text-primary-foreground/50">0{i+1}</span><h3 className="mt-6 font-display text-3xl">{v.t}</h3><p className="mt-3 text-sm leading-6 text-primary-foreground/70">{v.d}</p></div>)}
          </div>
        </div>
      </section>

      <section id="kwalifikacje" className="section-space scroll-mt-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionIntro eyebrow="Certyfikaty i kwalifikacje" title="Wiedza, która stoi za terapią" text="Nieustannie rozwijam swoją wiedzę i umiejętności, aby jeszcze lepiej odpowiadać na potrzeby moich pacjentów." />
          <p className="mt-8 text-xs uppercase tracking-[0.13em] text-muted-foreground md:hidden">Przesuń, aby zobaczyć więcej →</p>
          <div className="hide-scrollbar -mx-5 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:-mx-8 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-12 lg:gap-5 lg:overflow-visible lg:px-0">
            {certificates.map((cert, index) => (
              <Dialog key={cert.title}>
                <DialogTrigger asChild>
                  <button type="button" aria-label={`Powiększ certyfikat: ${cert.title}`} className={`certificate-tile group relative shrink-0 snap-start overflow-hidden border border-border bg-card text-left ${index < 2 ? "w-[82vw] sm:w-[28rem] lg:col-span-6 lg:w-auto" : "w-[74vw] sm:w-[22rem] lg:col-span-4 lg:w-auto"}`}>
                    <div className={`${index < 2 ? "aspect-[4/3]" : "aspect-[3/4]"} overflow-hidden bg-secondary`}><img src={cert.src} alt={`Certyfikat: ${cert.title}`} loading="lazy" className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.025]" /></div>
                    <div className="flex min-h-16 items-center justify-between gap-4 px-4 py-3"><span className="text-xs uppercase tracking-[0.11em] text-foreground">{cert.title}</span><ArrowUpRight className="size-4 shrink-0 text-primary" aria-hidden="true" /></div>
                  </button>
                </DialogTrigger>
                <DialogContent className="max-h-[92svh] max-w-[94vw] border-none bg-background p-3 shadow-2xl sm:max-w-5xl sm:p-6">
                  <DialogTitle className="pr-10 font-display text-xl font-normal">{cert.title}</DialogTitle>
                  <DialogDescription className="sr-only">Powiększony widok certyfikatu Gabrieli Zięby</DialogDescription>
                  <img src={cert.src} alt={`Powiększony certyfikat: ${cert.title}`} className="max-h-[78svh] w-full object-contain" />
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      <section id="cennik" className="section-space bg-secondary/65 scroll-mt-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24 lg:px-10">
          <div><SectionIntro eyebrow="Oferta" title="Wizyty i zabiegi" /><p className="mt-6 max-w-sm text-sm leading-7 text-muted-foreground">Wybierz usługę najbliższą Twoim potrzebom. Szczegóły i dostępne terminy znajdziesz w kalendarzu wizyt.</p></div>
          <Accordion type="single" collapsible className="border-t border-border">
            {services.map((service, index) => <AccordionItem key={service.name} value={`service-${index}`}><AccordionTrigger className="gap-5 py-6 hover:no-underline"><span className="flex min-w-0 flex-1 items-baseline justify-between gap-4 pr-3"><span className="text-left font-display text-xl font-normal leading-tight sm:text-2xl">{service.name}</span><span className="shrink-0 text-sm font-semibold text-primary">{service.price}</span></span></AccordionTrigger><AccordionContent className="max-w-xl pr-10 text-sm leading-7 text-muted-foreground">{service.detail}</AccordionContent></AccordionItem>)}
          </Accordion>
          <div className="lg:col-start-2 border-l border-primary/40 pl-6"><h3 className="font-display text-2xl text-foreground">Nie wiesz, która forma wizyty będzie odpowiednia?</h3><p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">Jeśli nie masz pewności, którą usługę wybrać, podczas konsultacji wspólnie ustalimy najlepszy kierunek terapii.</p><BookingButton className="mt-6" /></div>
        </div>
      </section>

      <section id="opinie" className="section-space scroll-mt-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><SectionIntro eyebrow="53 opinie na ZnanymLekarzu" title="Pacjenci o mojej pracy" /><Button asChild variant="link" className="h-auto w-fit px-0 text-xs uppercase tracking-[0.13em]"><a href={BOOKING_URL} target="_blank" rel="noreferrer">Zobacz wszystkie opinie <ArrowUpRight aria-hidden="true" /></a></Button></div>
          <div className="hide-scrollbar -mx-5 mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:-mx-8 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-3 lg:px-0">
            {reviews.map((review, index) => <figure key={review.author} className={`flex w-[84vw] shrink-0 snap-start flex-col border border-border bg-card p-7 sm:w-[25rem] lg:w-auto ${index >= 3 ? "lg:col-span-1" : ""}`}><Quote className="size-7 text-primary/55" aria-hidden="true" /><blockquote className="mt-8 flex-1 font-display text-xl leading-8 text-foreground">„{review.text}”</blockquote><figcaption className="mt-8 border-t border-border pt-5"><p className="text-sm font-semibold text-foreground">{review.author}</p><p className="mt-1 text-xs leading-5 text-muted-foreground">{review.service}</p></figcaption></figure>)}
          </div>
          <p className="mt-5 text-xs leading-5 text-muted-foreground">Opinie pochodzą z publicznego profilu ZnanyLekarz. Rezultaty terapii mogą różnić się u poszczególnych osób.</p>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/45">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 md:grid-cols-[1fr_auto] md:items-center lg:px-10">
          <div><p className="eyebrow text-primary">Instagram</p><h2 className="mt-4 font-display text-4xl text-foreground sm:text-5xl">Zajrzyj za kulisy</h2><p className="mt-4 text-base text-muted-foreground">Wiedza o fizjoterapii, pracy z ciałem i trochę codzienności gabinetu.</p></div>
          <Button asChild variant="outline" size="lg" className="h-12 w-fit rounded-full border-primary/40 bg-transparent px-6 shadow-none"><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer"><Instagram aria-hidden="true" /> Instagram @physio.gabi</a></Button>
        </div>
      </section>

      <section className="bg-foreground py-24 text-background sm:py-32">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <p className="eyebrow text-background/55">Umów wizytę</p>
          <h2 className="mt-6 font-display text-5xl leading-[1.02] text-background sm:text-6xl lg:text-7xl">Zadbajmy o większy komfort Twojego ciała.</h2>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-background/70">Jeśli chcesz lepiej zrozumieć swoje dolegliwości i rozpocząć indywidualnie dobraną terapię, zapraszam na wizytę.</p>
          <Button asChild size="lg" className="mt-9 h-14 rounded-full bg-background px-7 text-xs uppercase tracking-[0.14em] text-foreground shadow-none hover:bg-background/90"><a href={BOOKING_URL} target="_blank" rel="noreferrer">Umów wizytę na ZnanymLekarzu <ArrowUpRight aria-hidden="true" /></a></Button>
        </div>
      </section>

      <footer className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 md:grid-cols-[1fr_auto_auto] md:items-end lg:px-10">
          <div><p className="font-display text-2xl text-foreground">mgr Gabriela Zięba</p><p className="mt-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">Fizjoterapia <span aria-hidden="true">•</span> Kraków</p></div>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-foreground hover:text-primary"><Instagram className="size-4" aria-hidden="true" /> @physio.gabi</a>
          <BookingButton />
          <p className="text-xs text-muted-foreground md:col-span-3">© 2026 Gabriela Zięba</p>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur-xl md:hidden">
        <Button asChild size="lg" className="h-12 w-full rounded-full text-xs uppercase tracking-[0.14em] shadow-none"><a href={BOOKING_URL} target="_blank" rel="noreferrer">Umów wizytę <ArrowUpRight aria-hidden="true" /></a></Button>
      </div>
    </div>
  );
}
