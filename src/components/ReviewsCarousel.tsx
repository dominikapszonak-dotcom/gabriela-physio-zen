import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

type Review = { author: string; service: string; text: string };

export function ReviewsCarousel({ reviews }: { reviews: Review[] }) {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const onScroll = () => {
      const card = el.firstElementChild as HTMLElement | null;
      if (!card) return;
      const step = card.offsetWidth + 16;
      setActive(Math.min(reviews.length - 1, Math.round(el.scrollLeft / step)));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [reviews.length]);

  const go = (index: number) => {
    const el = track.current;
    const card = el?.children[index] as HTMLElement | undefined;
    if (el && card) el.scrollTo({ left: card.offsetLeft - el.offsetLeft - (el.scrollLeft ? 0 : 0) - parseFloat(getComputedStyle(el).paddingLeft), behavior: "smooth" });
  };
  const by = (dir: number) => {
    const el = track.current;
    const card = el?.firstElementChild as HTMLElement | null;
    if (el && card) el.scrollBy({ left: dir * (card.offsetWidth + 16), behavior: "smooth" });
  };

  return (
    <div className="mt-14">
      <div
        ref={track}
        role="region"
        aria-label="Opinie pacjentów"
        tabIndex={0}
        className="hide-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 pb-4 sm:-mx-8 sm:scroll-px-8 sm:px-8 lg:mx-0 lg:scroll-px-0 lg:px-0"
      >
        {reviews.map((review) => (
          <figure key={review.author} className="flex w-[84vw] shrink-0 snap-start flex-col border border-border bg-card p-7 sm:w-[25rem] lg:w-[calc((100%-2rem)/3)]">
            <Quote className="size-7 text-primary/55" aria-hidden="true" />
            <blockquote className="mt-8 flex-1 font-display text-xl leading-8 text-foreground">„{review.text}”</blockquote>
            <figcaption className="mt-8 border-t border-border pt-5">
              <p className="text-sm font-semibold text-foreground">{review.author}</p>
              <p className="mt-1 text-xs leading-5 text-muted-foreground">{review.service}</p>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-between gap-6">
        <div className="flex flex-wrap gap-2">
          {reviews.map((r, i) => (
            <button key={r.author} type="button" onClick={() => go(i)} aria-label={`Opinia ${i + 1} z ${reviews.length}`} className="flex h-6 items-center">
              <span className={`block h-px transition-all duration-300 ${i === active ? "w-8 bg-primary" : "w-4 bg-border"}`} />
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <button type="button" onClick={() => by(-1)} aria-label="Poprzednie opinie" className="flex size-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary"><ArrowLeft className="size-4" /></button>
          <button type="button" onClick={() => by(1)} aria-label="Następne opinie" className="flex size-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary"><ArrowRight className="size-4" /></button>
        </div>
      </div>
    </div>
  );
}
