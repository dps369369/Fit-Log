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
            <div className="mx-auto max-w-6xl">
                <img
                    src={workout.image}
                    alt={workout.name}
                    className="h-96 w-full rounded-2xl object-cover"
                />

                <h1 className="mt-8 text-4xl font-bold">
                    {workout.name}
                </h1>

                <p className="mt-4 max-w-3xl text-zinc-400">
                    {workout.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                    {workout.muscleGroups.map((group) => (
                        <span
                            key={group}
                            className="rounded-full bg-zinc-800 px-4 py-2 text-sm text-zinc-300"
                        >
                            {group}
                        </span>
                    ))}
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
                    <div>
                        <p className="text-sm text-zinc-500">Equipment</p>
                        <p className="mt-1 font-semibold">{workout.equipment}</p>
                    </div>

                    <div>
                        <p className="text-sm text-zinc-500">Difficulty</p>
                        <p className="mt-1 font-semibold">{workout.difficulty}</p>
                    </div>

                    <div>
                        <p className="text-sm text-zinc-500">Sets</p>
                        <p className="mt-1 font-semibold">{workout.sets}</p>
                    </div>

                    <div>
                        <p className="text-sm text-zinc-500">Reps</p>
                        <p className="mt-1 font-semibold">{workout.reps}</p>
                    </div>

                    <div>
                        <p className="text-sm text-zinc-500">Duration</p>
                        <p className="mt-1 font-semibold">{workout.duration} min</p>
                    </div>

                    <div>
                        <p className="text-sm text-zinc-500">Calories</p>
                        <p className="mt-1 font-semibold">{workout.caloriesBurned} cal</p>
                    </div>

                    <div>
                        <p className="text-sm text-zinc-500">Rating</p>
                        <p className="mt-1 font-semibold">★ {workout.rating}</p>
                    </div>
                </div>
                <div className="mt-12">
                    <h2 className="text-2xl font-bold">INSTRUCTIONS</h2>

                    <ol className="mt-6 space-y-4">
                        {workout.instructions.map((instruction, index) => (
                            <li key={index} className="flex gap-4">
                                <span className="font-bold text-lime-400">
                                    {index + 1}.
                                </span>

                                <p className="text-zinc-400">
                                    {instruction}
                                </p>
                            </li>
                        ))}
                    </ol>
                </div>
                <div className="mt-12 flex flex-wrap gap-4">
                    <button
                        type="button"
                        className="rounded-full bg-lime-400 px-6 py-3 font-bold text-black"
                    >
                        Add to Today&apos;s Plan
                    </button>

                    <button
                        type="button"
                        className="rounded-full border border-zinc-700 px-6 py-3 font-bold text-white"
                    >
                        Save for Later
                    </button>
                </div>
            </div>
        </main>
    );
}