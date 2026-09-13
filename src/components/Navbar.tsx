import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo-text.png";
const NAV_LINKS = ["Home", "Technologies", "Projects", "About", "Contact"];

function Navbar() {
  // open or closed.
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 return (
 <header className="sticky top-0 z-50 border-b border-surface-border bg-surface/90 backdrop-blur">
 {/* ---------- Mobile navbar ---------- */}
      <nav className="mx-auto grid h-16 max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-3 px-4 sm:px-6 md:hidden">
<button
type="button"
aria-label="Toggle menu"
onClick={() => setIsMenuOpen(!isMenuOpen)}
 className="flex h-10 w-10 items-center justify-center rounded-lg text-ink"
>
{isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
</button>
 <a href="#top" className="justify-self-center">
   <img src={logo} alt="Dev Stack" className="h-8 w-auto" />
 </a>

<div className="flex items-center gap-2 justify-self-end">
<button className="px-2 py-2 text-sm font-medium text-ink-muted">
  Sign In
    
    </button>
    <button className="bg-gradient-brand rounded-full px-3.5 py-2 text-sm font-semibold text-white">
     Sign Up
     </button>
        </div>
 </nav>

 {/* ---------- Desktop navbar ---------- */}
 <nav className="mx-auto hidden h-16 max-w-7xl items-center justify-between px-6 md:flex lg:px-8">
 <a href="#top" className="mr-8">
 <img src={logo} alt="Dev Stack" className="h-8 w-auto" />
 </a>

  <ul className="flex flex-1 items-center justify-center gap-8">
  {NAV_LINKS.map((link) => (  <li key={link}>
    <a
         href={`#${link.toLowerCase()}`}
       className="text-sm font-medium text-ink-muted hover:text-brand-pink"
  >
   {link}
     </a>
    </li>
      ))}
        </ul>

<div className="flex items-center gap-4">
<button className="px-3 py-2 text-sm font-medium text-ink-muted hover:text-ink">
        Sign In
      </button>
        <button className="bg-gradient-brand rounded-full px-5 py-2 text-sm font-semibold text-white">
          Sign Up
         </button>
    </div>
    </nav>
{/* ---------- Mobile dropdown menu  ---------- */}
      {isMenuOpen && (
  <ul className="flex flex-col gap-1 border-t border-surface-border bg-surface px-4 py-3 md:hidden">
  {NAV_LINKS.map((link) => (
     <li key={link}>
  <a
    href={`#${link.toLowerCase()}`}
    onClick={() => setIsMenuOpen(false)}
    className="block rounded-lg px-3 py-2 text-sm font-medium text-ink-muted hover:bg-surface-raised hover:text-brand-pink"
  >
    {link}
  </a>
      </li>
  ))}
 </ul>
  )}
</header>
  );
}

export default Navbar;
