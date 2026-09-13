import { X } from "lucide-react";
import type { Technology } from "../types/technology";
interface YourStackProps {
  stack: Technology[];
  onRemoveFromStack: (id: string) => void;
  onRemoveAll: () => void;
}

function YourStack({ stack, onRemoveFromStack, onRemoveAll }: YourStackProps) {
  return (
    <aside className="rounded-2xl border border-surface-border bg-surface-raised p-6 lg:sticky lg:top-24">
      <h2 className="text-lg font-semibold text-ink">Your Stack</h2>
      <p className="mt-1 text-sm text-ink-muted">
        {stack.length} {stack.length === 1 ? "Technology" : "Technologies"} Selected
      </p>

      {stack.length === 0 ? (
        <div className="mt-6 rounded-xl border border-dashed border-surface-border px-4 py-10 text-center">
          <p className="text-sm text-ink-muted">
            Your stack is empty. Add a technology to start building your
            plan.
          </p>
        </div>
      ) : (
        <>
          <ul className="mt-6 flex flex-col gap-2">
            {stack.map((technology) => (
              <li
                key={technology.id}
 className="flex items-center gap-3 rounded-xl border border-surface-border bg-white px-3 py-2.5"
        >
     <img
src={technology.icon}
      alt=""
 className="h-8 w-8 flex-shrink-0 rounded-md bg-surface-raised object-contain p-1"
    />
<div className="min-w-0 flex-1">
    <p className="truncate text-sm font-medium text-ink">
    {technology.name}
    </p>
<p className="truncate text-xs text-ink-muted">
{technology.category}
</p>
</div>
<button
 type="button"
 aria-label={`Remove ${technology.name}`}
 onClick={() => onRemoveFromStack(technology.id)}
 className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-ink-muted hover:bg-rose-50 hover:text-rose-500"
                >
 <X className="h-4 w-4" />
 </button>
</li>
 ))}

    </ul>

  <button
    type="button"
onClick={onRemoveAll}
 className="mt-5 w-full rounded-xl border border-surface-border py-2.5 text-sm font-semibold text-ink-muted hover:border-rose-300 hover:text-rose-500"
>
 Remove All
</button>
        </>
      )}
    </aside>
  );
}

export default YourStack;
