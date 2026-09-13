import { ArrowRight } from "lucide-react";
import bannerImage from "../assets/banner-stack.png";
function Hero() {
  return (
    <section
      id="home"
     className="border-b border-surface-border bg-surface"
    >
 <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:px-8">
<div className="text-center lg:text-left">
<h1 className="text-4xl font-bold leading-tight text-ink sm:text-5xl">
 Build Your Ideal
    <br />
 <span className="text-gradient-brand">Development Stack</span>
</h1>

 <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-ink-muted lg:mx-0">
    Browse languages, frameworks, and tools, compare them side by
     side, and collect the ones that fit your next project into a
     single stack.
 </p>

<div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
 <a
 href="#technologies"
 className="bg-gradient-brand inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white"
>
  Explore Technologies
  <ArrowRight className="h-4 w-4" />
</a>
<a
  href="#about"
  className="inline-flex items-center gap-2 rounded-full border border-surface-border px-6 py-3 text-sm font-semibold text-ink"
>
 Learn More
 </a>
</div>
 </div>

 <div className="flex justify-center lg:justify-end">
  <img
    src={bannerImage}
    alt="Stylized illustration of a layered technology stack"
       className="w-64 sm:w-80 lg:w-96"
          />
     </div>
    </div>
    </section>
  );
}

export default Hero;
