import { getWorkouts } from "../lib/api";
import WorkoutCard from "./WorkoutCard";

export default async function WorkoutLibrary() {
  const workouts = await getWorkouts();

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
        {workouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </section>
  );
}