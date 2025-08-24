import Card from "../components/Card";
import Modal from "../components/Modal";
import { Input, Select } from "../components/Input";
import Button from "../components/Button";
import causes from "../data/causes";
import { useState } from "react";
import { CURRENCIES } from "../lib/constants";
import { Api } from "../lib/api";
import { useToastStore } from "../hooks/useToast";

export default function Donate(){
  const [open, setOpen] = useState(false);
  const [payload, setPayload] = useState({ name:"", email:"", cause: causes[0].title, amount: 500, currency: "INR" });
  const { add } = useToastStore();

  const submit = (e) => {
    e.preventDefault();
    Api.addDonation(payload);
    setOpen(true);
    add({ title:"Thank you for your donation!", desc:`${payload.name || "Friend"} contributed ${payload.amount} ${payload.currency}.` });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Donate</h2>
      <div className="grid lg:grid-cols-3 gap-5">
        <Card className="lg:col-span-2">
          <form onSubmit={submit} className="grid sm:grid-cols-2 gap-3">
            <Input placeholder="Full Name" value={payload.name} onChange={e=>setPayload({...payload, name:e.target.value})}/>
            <Input placeholder="Email" value={payload.email} onChange={e=>setPayload({...payload, email:e.target.value})}/>
            <Select value={payload.cause} onChange={e=>setPayload({...payload, cause:e.target.value})}>
              {causes.map(c=>(<option key={c.id} value={c.title}>{c.title}</option>))}
            </Select>
            <Select value={payload.currency} onChange={e=>setPayload({...payload, currency:e.target.value})}>
              {CURRENCIES.map(c=>(<option key={c} value={c}>{c}</option>))}
            </Select>
            <Input type="number" min="1" placeholder="Amount" value={payload.amount} onChange={e=>setPayload({...payload, amount:Number(e.target.value)})}/>
            <Button className="btn-primary">Donate now</Button>
          </form>
        </Card>

        <div className="space-y-3">
          {causes.map(c=>(
            <Card key={c.id}>
              <h3 className="font-semibold">{c.title}</h3>
              <p className="text-sm text-slate-600">{c.desc}</p>
              <div className="mt-2 flex gap-2 flex-wrap">
                {c.suggested.map(s=>(
                  <button key={s} onClick={()=>setPayload({...payload, amount:s})} className="btn-ghost">{s}</button>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Modal open={open} onClose={()=>setOpen(false)} title="Donation successful">
        <p className="text-slate-600">We appreciate your support. A confirmation will be sent to your email.</p>
        <div className="mt-4 flex justify-end">
          <Button className="btn-primary" onClick={()=>setOpen(false)}>Close</Button>
        </div>
      </Modal>
    </div>
  );
}
