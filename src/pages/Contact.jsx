import Card from "../components/Card";
import { Input, Textarea } from "../components/Input";
import Button from "../components/Button";
import { useToastStore } from "../hooks/useToast";
import { useState } from "react";

export default function Contact(){
  const [form, setForm] = useState({ name:"", email:"", message:"" });
  const { add } = useToastStore();

  const submit = (e) => {
    e.preventDefault();
    add({ title:"Message sent", desc:"Thanks for contacting us!" });
    setForm({ name:"", email:"", message:"" });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <Card>
        <form onSubmit={submit} className="grid sm:grid-cols-2 gap-3">
          <Input placeholder="Full Name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})}/>
          <Input placeholder="Email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})}/>
          <Textarea className="sm:col-span-2" rows={5} placeholder="Your message" value={form.message} onChange={e=>setForm({...form, message:e.target.value})}/>
          <Button className="btn-primary sm:col-span-2">Send message</Button>
        </form>
      </Card>
    </div>
  );
}
