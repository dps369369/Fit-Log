import Link from "next/link";
import { Workout } from "../lib/api";

type WorkoutCardProps = {
  workout: Workout;
};

export default function WorkoutCard({ workout }: WorkoutCardProps) {
  return (
    <Link href={`/workout/${workout.id}`}>
      <article className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
        <img
          src={workout.image}
          alt={workout.name}
          className="h-56 w-full object-cover"
        />

        <div className="p-5">
          <div className="mb-3 flex flex-wrap gap-2">
            {workout.muscleGroups.map((group) => (
              <span
                key={group}
                className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300"
              >
                {group}
              </span>
            ))}
          </div>

          <h3 className="text-xl font-bold">{workout.name}</h3>

          <p className="mt-2 text-sm text-zinc-400">
            {workout.equipment}
          </p>

          <div className="mt-4 flex justify-between text-sm text-zinc-400">
            <span>{workout.duration} min</span>
            <span>{workout.caloriesBurned} cal</span>
            <span>★ {workout.rating}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}