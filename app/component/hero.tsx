export default function Hero() {
  return (
    <section className="px-6 py-20 text-white">
      <p className="mb-4 text-sm font-semibold tracking-widest text-lime-400">
        WORKOUT LIBRARY
      </p>

      <h1 className="max-w-3xl text-5xl font-bold leading-tight">
        TRAIN WITH INTENT. LOG EVERY SET.
      </h1>

      <p className="mt-6 max-w-2xl text-zinc-400">
        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into
        today's plan, and watch the week's work add up.
      </p>

      <a
        href="#library"
        className="mt-8 inline-block rounded-full bg-lime-400 px-6 py-3 font-bold text-black"
      >
        BROWSE WORKOUTS →
      </a>
    </section>
  );
}