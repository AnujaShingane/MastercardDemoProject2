import { Link, NavLink } from "react-router-dom";

export default function Navbar({ onMenu }) {
  const nav = [
    { to:"/projects", label:"Projects" },
    { to:"/events", label:"Events" },
    { to:"/donate", label:"Donate" },
    { to:"/volunteers", label:"Volunteers" },
    { to:"/impact", label:"Impact" },
    { to:"/about", label:"About" },
    { to:"/contact", label:"Contact" },
  ];

  return (
    <header className="fixed left-1/2 top-6 -translate-x-1/2 z-40 w-[min(92%,1100px)]">
      {/* Stronger frosted look */}
      <div className="rounded-2xl bg-white/70 supports-[backdrop-filter]:bg-white/55 backdrop-blur-md ring-1 ring-slate-200/70 shadow-lg">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <button
              className="md:hidden p-2 rounded-lg hover:bg-slate-100"
              onClick={onMenu}
              aria-label="Open menu"
            >
              ☰
            </button>

            <Link to="/" className="flex items-center gap-2">
              <img
                src="/images/logo.svg"
                onError={(e)=>{e.currentTarget.style.display='none'}}
                alt=""
                className="h-7 w-7"
              />
              <span className="font-semibold">NGO Hack Base</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-2">
            {nav.map(n=>(
              <NavLink
                key={n.to}
                to={n.to}
                className={({isActive}) =>
                  `px-3 py-1.5 rounded-xl transition
                   ${isActive ? "bg-slate-100 ring-1 ring-slate-200" : "hover:bg-slate-100"}`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <NavLink
              to="/signin"
              className="px-3 py-2 rounded-xl bg-white ring-1 ring-slate-200 hover:bg-slate-100"
            >
              Sign in
            </NavLink>
            <NavLink
              to="/dashboard"
              className="px-4 py-2 rounded-xl bg-brand-accent text-white shadow-glow hover:opacity-90"
            >
              Dashboard
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}
