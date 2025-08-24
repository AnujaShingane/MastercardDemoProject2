import { useEffect, useRef, useState } from "react";
import Button from "./Button";

const KEY = "chat_msgs";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState(()=>{
    try { return JSON.parse(localStorage.getItem(KEY)) || [{from:"bot", text:"Hi! I’m here to help with donations, volunteers, and events."}]; }
    catch { return [{from:"bot", text:"Hi! I’m here to help with donations, volunteers, and events."}]; }
  });
  const [text, setText] = useState("");
  const endRef = useRef(null);

  useEffect(()=>{ localStorage.setItem(KEY, JSON.stringify(msgs)); }, [msgs]);
  useEffect(()=>{ endRef.current?.scrollIntoView({behavior:'smooth'}); }, [open, msgs]);

  const send = () => {
    const t = text.trim();
    if (!t) return;
    setMsgs(m => [...m, { from:"user", text:t }, { from:"bot", text: autoReply(t) }]);
    setText("");
  };

  const autoReply = (t) => {
    const s = t.toLowerCase();
    if (s.includes("donate")) return "Great! You can donate on the Donate page. Choose a cause and amount.";
    if (s.includes("volunteer")) return "Awesome! Head to Volunteers → see roles and apply.";
    if (s.includes("event")) return "Upcoming events are listed on the Events page.";
    return "Thanks! I’ve noted that. For more, use the pages above.";
  };

  const onKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <>
      <button onClick={()=>setOpen(v=>!v)} className="fixed bottom-6 right-6 rounded-full p-4 bg-brand-accent text-white shadow-glow">
        {open ? "—" : "Chat"}
      </button>

      <div className={`fixed bottom-20 right-6 w-[86vw] max-w-sm ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"} transition`}>
        <div className="app-card p-4 max-h-[70vh] flex flex-col">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">NGO Assistant</h3>
            <button onClick={()=>setOpen(false)} className="p-1 rounded-lg hover:bg-slate-100">✕</button>
          </div>
          <div className="mt-2 flex-1 overflow-y-auto space-y-2 pr-1">
            {msgs.map((m,i)=>(
              <div key={i} className={`text-sm flex ${m.from==="user" ? "justify-end" : "justify-start"}`}>
                <span className={`inline-block px-3 py-2 rounded-xl ${m.from==="user" ? "bg-brand-accent text-white" : "bg-slate-100"}`}>
                  {m.text}
                </span>
              </div>
            ))}
            <div ref={endRef} />
          </div>
          <div className="mt-3 flex gap-2">
            <textarea value={text} onChange={e=>setText(e.target.value)} onKeyDown={onKey}
              placeholder="Type a message…" rows={2}
              className="flex-1 input resize-none"/>
            <Button className="btn-primary" onClick={send}>Send</Button>
          </div>
        </div>
      </div>
    </>
  );
}
