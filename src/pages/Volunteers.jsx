import Card from "../components/Card";
import { Input, Textarea, Select } from "../components/Input";
import Button from "../components/Button";
import roles from "../data/volunteers";
import { useState } from "react";
import { Api } from "../lib/api";
import { useToastStore } from "../hooks/useToast";

export default function Volunteers(){
  const [form, setForm] = useState({ name:"", email:"", role: roles[0].title, notes:"" });
  const { add } = useToastStore();

  const submit = (e) => {
    e.preventDefault();
    Api.addVolunteer(form);
    add({ title:"Application submitted", desc:"We will reach out soon!" });
    setForm({ name:"", email:"", role: roles[0].title, notes:"" });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Volunteers</h2>

      <div className="grid lg:grid-cols-3 gap-5">
        <Card className="lg:col-span-2">
          <form onSubmit={submit} className="grid sm:grid-cols-2 gap-3">
            <Input placeholder="Full Name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})}/>
            <Input placeholder="Email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})}/>
            <Select value={form.role} onChange={e=>setForm({...form, role:e.target.value})}>
              {roles.map(r=>(<option key={r.id} value={r.title}>{r.title}</option>))}
            </Select>
            <Textarea className="sm:col-span-2" rows={4} placeholder="Notes (availability, skills…)" value={form.notes} onChange={e=>setForm({...form, notes:e.target.value})}/>
            <Button className="btn-primary sm:col-span-2">Apply</Button>
          </form>
        </Card>

        <div className="space-y-3">
          {roles.map(r=>(
            <Card key={r.id}>
              <h3 className="font-semibold">{r.title}</h3>
              <p className="text-sm text-slate-600">{r.desc}</p>
              <p className="text-xs text-slate-500 mt-1">Time: {r.time}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
