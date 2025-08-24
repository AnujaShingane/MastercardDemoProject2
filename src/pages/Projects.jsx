import Card from "../components/Card";
import Badge from "../components/Badge";
import Progress from "../components/Progress";
import projects from "../data/projects";
import { useState } from "react";

export default function Projects(){
  const [q, setQ] = useState("");
  const filtered = projects.filter(p => (p.title+p.tag+p.desc).toLowerCase().includes(q.toLowerCase()));
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search projects…" className="input max-w-sm"/>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map(p=>(
          <Card key={p.id} className="group">
            <div className="aspect-[16/10] w-full rounded-xl bg-slate-100 overflow-hidden">
              <img src={p.image} alt="" className="w-full h-full object-cover group-hover:scale-[1.02] transition" onError={(e)=>{e.currentTarget.style.display='none'}}/>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <h3 className="font-semibold">{p.title}</h3>
              <Badge>{p.tag}</Badge>
            </div>
            <p className="text-sm text-slate-600 mt-1">{p.desc}</p>
            <div className="mt-3">
              <Progress value={Math.round((p.raised/p.goal)*100)} />
              <p className="text-xs text-slate-500 mt-1">{Math.round((p.raised/p.goal)*100)}% funded</p>
            </div>
            <button className="mt-3 btn-ghost">View details</button>
          </Card>
        ))}
      </div>
    </div>
  );
}
