export function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-bold uppercase tracking-[0.28em] text-emerald-300">{eyebrow}</p>
      <h2 className="mt-3 font-heading text-4xl leading-tight text-white md:text-6xl">{title}</h2>
      {copy && <p className="mt-4 text-base leading-8 text-silver md:text-lg">{copy}</p>}
    </div>
  );
}
