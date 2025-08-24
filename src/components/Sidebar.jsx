import { NavLink } from "react-router-dom";

export default function Sidebar({ open, onClose }) {
  const links = [
    { to:"/", label:"Home" },
    { to:"/projects", label:"Projects" },
    { to:"/events", label:"Events" },
    { to:"/donate", label:"Donate" },
    { to:"/volunteers", label:"Volunteers" },
    { to:"/impact", label:"Impact" },
    { to:"/about", label:"About" },
    { to:"/contact", label:"Contact" },
    { to:"/dashboard", label:"Dashboard" },
    { to:"/signin", label:"Sign in" },
  ];

  return (
    <div className={`fixed inset-0 z-50 md:hidden ${open ? "" : "pointer-events-none"}`}>
      <div onClick={onClose} className={`absolute inset-0 bg-black/40 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}/>
      <aside className={`absolute left-0 top-0 h-full w-80 p-4 bg-white shadow-lg transition-transform ${open ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex items-center justify-between mb-4">
          <span className="font-semibold">Menu</span>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-slate-100">✕</button>
        </div>
        <nav className="flex flex-col gap-1">
          {links.map(l=>(
            <NavLink key={l.to} onClick={onClose} to={l.to} className="px-3 py-2 rounded-lg hover:bg-slate-100">{l.label}</NavLink>
          ))}
        </nav>
      </aside>
    </div>
  );
}
