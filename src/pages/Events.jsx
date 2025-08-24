import Card from "../components/Card";
import events from "../data/events";
import { useEffect, useMemo, useState } from "react";
import { Api } from "../lib/api";
import Badge from "../components/Badge";

export default function Events(){
  const [q, setQ] = useState("");
  useEffect(()=>{ Api.seedEvents(events); },[]);
  const all = Api.listEvents();
  const filtered = useMemo(()=> all.filter(e => (e.title+e.location+e.tag).toLowerCase().includes(q.toLowerCase())), [all,q]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-2xl font-semibold">Events</h2>
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search events…" className="input max-w-sm"/>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {filtered.map(ev=>(
          <Card key={ev.id}>
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-semibold">{ev.title}</h3>
                <p className="text-sm text-slate-600 mt-1">{ev.location} · {new Date(ev.date).toLocaleDateString()}</p>
              </div>
              <Badge>{ev.tag}</Badge>
            </div>
            <p className="text-sm text-slate-600 mt-2">Spots: {ev.spots}</p>
            <button className="mt-3 btn-primary">Register</button>
          </Card>
        ))}
      </div>
    </div>
  );
}
