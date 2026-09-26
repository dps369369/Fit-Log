export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b border-zinc-800 bg-zinc-950 px-6 py-4 text-white">
      {/* Logo */}
      <div className="font-bold tracking-wide">FITLOG</div>

      {/* Navigation links */}
      <div className="flex gap-8">
        <a href="/" className="font-medium text-lime-400">
          Workout
        </a>

        <a href="/my-plan" className="font-medium text-zinc-400">
          My Plan
        </a>
      </div>

      {/* Status badges */}
      <div className="flex gap-3">
        <span className="rounded-full bg-lime-400 px-4 py-2 text-sm font-bold text-black">
          Plan 0
        </span>

        <span className="rounded-full border border-zinc-600 px-4 py-2 text-sm font-bold">
          Saved 0
        </span>
      </div>
    </nav>
  );
}