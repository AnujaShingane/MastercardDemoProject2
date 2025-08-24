export default function Progress({ value=0 }){
  return (
    <div className="w-full h-2 rounded-full bg-slate-200">
      <div className="h-2 rounded-full bg-brand-accent transition-all" style={{width:`${Math.min(100,Math.max(0,value))}%`}}/>
    </div>
  );
}
