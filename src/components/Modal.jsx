export default function Modal({ open, onClose, title, children, actions }) {
  return (
    <div className={`fixed inset-0 z-50 ${open ? "" : "pointer-events-none"}`}>
      <div onClick={onClose} className={`absolute inset-0 bg-black/60 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}/>
      <div className={`absolute left-1/2 top-1/2 w-[92%] max-w-lg -translate-x-1/2 -translate-y-1/2 app-card p-6 transition-all ${open ? "animate-pop opacity-100" : "opacity-0"}`}>
        {title && <h3 className="text-lg font-semibold mb-3">{title}</h3>}
        <div>{children}</div>
        {actions && <div className="mt-5 flex justify-end gap-2">{actions}</div>}
      </div>
    </div>
  );
}
