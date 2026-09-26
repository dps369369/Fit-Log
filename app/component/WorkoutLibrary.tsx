export default function WorkoutLibrary() {
  return (
    <section id="library" className="px-6 py-16 text-white">
      <div className="mb-10">
        <p className="text-sm font-semibold tracking-widest text-lime-400">
          THE LIBRARY
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          Twelve lifts covering every major muscle group.
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border border-zinc-800 p-6">
          <h3 className="text-xl font-bold">Workout Card</h3>
          <p className="mt-2 text-zinc-400">API workout will appear here.</p>
        </div>
      </div>
    </section>
  );
}