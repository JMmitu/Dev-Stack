import { Check, Star } from "lucide-react";
import type { Technology } from "../types/technology";
interface TechnologyCardProps {
  technology: Technology;
  isAdded: boolean;
  onAddToStack: (technology: Technology) => void; 
}
function getDifficultyColor(difficulty: string) {
  if (difficulty === "Beginner-Friendly") return "text-emerald-600";
  if (difficulty === "Intermediate") return "text-amber-600";
  return "text-rose-600";
}

function TechnologyCard({ technology, isAdded, onAddToStack }: TechnologyCardProps) {
return (
<article className="flex flex-col rounded-2xl border border-surface-border bg-white p-6 shadow-sm">
    {/* Icon + badge */}
    <div className="flex items-start justify-between">
    <img
      src={technology.icon}
      alt=""
      className="h-10 w-10 rounded-lg bg-surface-raised object-contain p-1.5"
    />
    <span className="text-xs font-semibold text-brand-pink">
     {technology.badge}
    </span>
    </div>

    {/* Name + description */}
    <h3 className="mt-4 text-lg font-semibold text-ink">{technology.name}</h3>
    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
        {technology.description}
      </p>

    {/* Category chip + difficulty */}
      <div className="mt-4 flex flex-wrap items-center gap-3">
     <span className="rounded-full border border-surface-border bg-surface-raised px-3 py-1 text-xs font-medium text-ink-muted">
       {technology.category}
     </span>
     <span className={`text-xs font-medium ${getDifficultyColor(technology.difficulty)}`}>
    {technology.difficulty}
     </span>
      </div>

    {/* Rating */}
      <div className="mt-4 flex items-center gap-1 text-sm font-medium text-ink">
        <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
        {technology.rating.toFixed(1)}
      </div>

      {/* Add to Stack button */}
      <button
        type="button"
        disabled={isAdded}
        onClick={() => onAddToStack(technology)}
        className={`mt-5 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold ${
          isAdded
            ? "cursor-not-allowed bg-emerald-50 text-emerald-600"
            : "bg-ink text-white hover:opacity-90"
        }`}
      >
        {isAdded ? (
          <>
            <Check className="h-4 w-4" />
            Added to Stack
          </>
     ) : (
          "Add to Stack"
      )}
      </button>
</article>
  );
}

export default TechnologyCard;
