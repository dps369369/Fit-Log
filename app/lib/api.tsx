export type Workout = {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
};

export async function getWorkouts(): Promise<Workout[]> {
  const response = await fetch(
    "https://api.api-store.workers.dev/api/fitlog"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch workouts");
  }

  return response.json();
}

export async function getWorkout(id: string): Promise<Workout> {
  const response = await fetch(
    `https://api.api-store.workers.dev/api/fitlog/${id}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch workout");
  }

  return response.json();
}