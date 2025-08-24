export default function Pagination({ page, total, onPage }){
  const prev = () => onPage(Math.max(1, page-1));
  const next = () => onPage(Math.min(total, page+1));
  return (
    <div className="flex items-center gap-2 mt-3">
      <button onClick={prev} className="btn-ghost">Prev</button>
      <span className="text-sm">Page {page} / {total}</span>
      <button onClick={next} className="btn-ghost">Next</button>
    </div>
  );
}
