import type { Technology } from "../types/technology";
import TechnologyCard from "./TechnologyCard";
interface TechnologySectionProps {
  technologies: Technology[];
  isLoading: boolean;
  stack: Technology[];
  onAddToStack: (technology: Technology) => void;
}

function TechnologySection({
  technologies,
  isLoading,
  stack,
  onAddToStack,
}: TechnologySectionProps) {

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-24 text-ink-muted">
        <span className="h-10 w-10 animate-spin rounded-full border-2 border-surface-border border-t-brand-pink" />
        <p className="text-sm">Loading technologies…</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {technologies.map((technology) => {

        const isAdded = stack.some((item) => item.id === technology.id);

        return (
          <TechnologyCard
            key={technology.id}
            technology={technology}
            isAdded={isAdded}
            onAddToStack={onAddToStack}
          />
        );
      })}
    </div>
  );
}

export default TechnologySection;
