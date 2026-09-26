import { getWorkout } from "../../lib/api";

type WorkoutDetailsProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function WorkoutDetails({
  params,
}: WorkoutDetailsProps) {
  const { id } = await params;

  const workout = await getWorkout(id);

  return (
    <main className="min-h-screen bg-black p-8 text-white">
      <h1 className="text-4xl font-bold">{workout.name}</h1>

      <p className="mt-4 text-zinc-400">
        {workout.description}
      </p>
    </main>
  );
}