import { Link } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Container } from "./Layout";

export type Feature = {
  icon: LucideIcon;
  title: string;
  copy: string;
};

export function EditorialIntro({
  eyebrow,
  title,
  copy,
  image,
  imageAlt,
  reverse = false,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
}) {
  return (
    <section className="bg-ivory text-ivory-foreground">
      <Container className="grid items-center gap-10 py-14 md:grid-cols-2 md:gap-16 md:py-24">
        <div className={reverse ? "md:order-2" : ""}>
          <p className="eyebrow text-wine">{eyebrow}</p>
          <h2 className="mt-4 max-w-xl text-3xl uppercase leading-tight sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-7 text-ivory-foreground/75 sm:text-base">
            {copy}
          </p>
        </div>
        <div className={`overflow-hidden ${reverse ? "md:order-1" : ""}`}>
          <img src={image} alt={imageAlt} className="aspect-[4/3] w-full object-cover" />
        </div>
      </Container>
    </section>
  );
}

export function FeatureGrid({ eyebrow, title, items }: { eyebrow: string; title: string; items: Feature[] }) {
  return (
    <section className="border-y border-border bg-background py-14 sm:py-20">
      <Container>
        <div className="max-w-2xl">
          <p className="eyebrow text-gold">{eyebrow}</p>
          <h2 className="mt-3 text-3xl uppercase sm:text-4xl">{title}</h2>
        </div>
        <div className="mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title: itemTitle, copy }, index) => (
            <article key={itemTitle} className="min-w-0 bg-background p-6 sm:p-8">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                <p className="eyebrow min-w-0 text-gold">0{index + 1}</p>
                <Icon className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              </div>
              <h3 className="mt-8 text-2xl">{itemTitle}</h3>
              <p className="mt-3 text-sm leading-7 text-foreground/65">{copy}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function ProcessSection({
  eyebrow,
  title,
  steps,
}: {
  eyebrow: string;
  title: string;
  steps: { title: string; copy: string }[];
}) {
  return (
    <section className="bg-ivory py-14 text-ivory-foreground sm:py-20">
      <Container>
        <p className="eyebrow text-wine">{eyebrow}</p>
        <h2 className="mt-3 text-3xl uppercase sm:text-4xl">{title}</h2>
        <ol className="mt-10 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="border-t border-ivory-foreground/20 pt-5">
              <span className="font-serif text-4xl text-gold">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-5 text-2xl">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-ivory-foreground/70">{step.copy}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export function Callout({
  eyebrow,
  title,
  copy,
  label,
  to,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  label: string;
  to: "/collections" | "/experience" | "/stores";
}) {
  return (
    <section className="bg-wine py-14 sm:py-20">
      <Container className="grid items-end gap-8 md:grid-cols-[minmax(0,1fr)_auto]">
        <div className="min-w-0">
          <p className="eyebrow text-gold-soft">{eyebrow}</p>
          <h2 className="mt-3 max-w-3xl text-3xl uppercase leading-tight sm:text-4xl lg:text-5xl">{title}</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-foreground/70">{copy}</p>
        </div>
        <Link to={to} className="btn-gold w-full justify-center sm:w-fit">
          {label}<ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </Container>
    </section>
  );
}