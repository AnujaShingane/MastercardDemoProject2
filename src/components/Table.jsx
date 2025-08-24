export default function Table({ cols=[], rows=[] }){
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="text-left bg-slate-50">
            {cols.map((c,i)=>(<th key={i} className="px-3 py-2 font-semibold text-slate-700 border-b">{c}</th>))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r,i)=>(
            <tr key={i} className="odd:bg-white even:bg-slate-50">
              {r.map((cell,j)=>(<td key={j} className="px-3 py-2 border-b">{cell}</td>))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
