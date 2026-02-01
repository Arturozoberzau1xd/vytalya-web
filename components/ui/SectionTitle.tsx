type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export default function SectionTitle({ eyebrow, title, subtitle }: Props) {
  return (
    <div className="mb-10">
      {eyebrow && (
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-[color:var(--gold)]" />
          {eyebrow}
        </div>
      )}
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/70">
          {subtitle}
        </p>
      )}
    </div>
  );
}
