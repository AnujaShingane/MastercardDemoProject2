export default function Footer() {
  return (
    <footer className="mt-16">
      <div className="border-t border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 text-sm text-slate-600">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <p>© {new Date().getFullYear()} NGO Hack Base · React + Tailwind</p>
            <p>Swap content fast for hackathon problem statements.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
