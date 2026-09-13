import logo from "../assets/logo-text.png";

const LINK_GROUPS = [
  { title: "Product", links: ["Technologies", "Projects", "Pricing", "Changelog"] },
  { title: "Company", links: ["About", "Careers", "Blog", "Contact"] },
  { title: "Legal", links: ["Privacy", "Terms", "Security"] },
];

function Footer() {
  return (
 <footer className="border-t border-surface-border bg-surface-raised">
 <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
 <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
   {/* Brand block */}
  <div>
   <img src={logo} alt="Dev Stack" className="h-8 w-auto" />
 <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
       Pick the languages, frameworks, and tools you want, and Dev
       Stack helps you shape them into one clear plan.
 </p>
    <div className="mt-5 flex gap-3 text-sm text-ink-muted">
         <a href="https://github.com" target="_blank" rel="noreferrer">
                GitHub
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          Twitter
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
         LinkedIn
              </a>
        </div>
          </div>

          {/* Product / Company / Legal link groups */}
          {LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold text-ink">{group.title}</h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#top" className="text-sm text-ink-muted hover:text-ink">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

    {/* Bottom bar */}
<div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-surface-border pt-6 text-sm text-ink-muted sm:flex-row">
     <p>© {new Date().getFullYear()} Dev Stack. All rights reserved.</p>
     <div className="flex gap-6">
     <a href="#top" className="hover:text-ink">Privacy</a>
     <a href="#top" className="hover:text-ink">Terms</a>
     </div>
 </div>
     </div>
    </footer>
  );
}
export default Footer;
