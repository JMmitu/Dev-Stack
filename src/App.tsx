import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologySection from "./components/TechnologySection";
// import YourStack from "./components/YourStack";
import type { Technology } from "./types/technology";
import YourStack from "./components/YourStack";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [stack, setStack] = useState<Technology[]>([]);

  useEffect(() => {
    fetch("/technologies.json")
      .then((response) => response.json())
      .then((data: Technology[]) => {
        setTechnologies(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Failed to load technologies:", error);
        setIsLoading(false);
      });
  }, []);

  function handleAddToStack(technology: Technology) {
    const alreadyAdded = stack.some((item) => item.id === technology.id);

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    setStack([...stack, technology]);
    toast.success(`${technology.name} added to your stack.`);
  }

  function handleRemoveFromStack(id: string) {
    const technology = stack.find((item) => item.id === id);

    setStack(stack.filter((item) => item.id !== id));

    if (technology) {
      toast.info(`${technology.name} removed from your stack.`);
    }
  }

  function handleRemoveAll() {
    if (stack.length > 0) {
      toast.info("Your stack has been cleared.");
    }

    setStack([]);
  }

  return (
    <div id="top" className="min-h-screen bg-surface">
      <Navbar />

      <Hero />

      <main
        id="technologies"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mb-10 max-w-xl">
          <h2 className="text-3xl font-bold text-ink">
            Explore the{" "}
            <span className="text-gradient-brand">Technologies</span>
          </h2>

          <p className="mt-3 text-ink-muted">
            Pick the languages, frameworks, and tools that fit your next
            project and add them to your stack.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
          <TechnologySection
            technologies={technologies}
            isLoading={isLoading}
            stack={stack}
            onAddToStack={handleAddToStack}
          />

           <YourStack
            stack={stack}
            onRemoveFromStack={handleRemoveFromStack}
            onRemoveAll={handleRemoveAll}
          /> 
        </div>
      </main>

      <ToastContainer />
    </div>
  );
}

export default App;