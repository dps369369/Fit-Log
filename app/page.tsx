import Navbar from "./component/Navbar"; 
import Hero from "./component/hero";
import WorkoutLibrary from "./component/WorkoutLibrary";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero/>
      <WorkoutLibrary/>

      <main>
        <h1>FitLog</h1>
        <p>Workout Library</p>
      </main>
    </>
  );
}