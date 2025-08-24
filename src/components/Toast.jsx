import { useToastStore } from "../hooks/useToast";

export default function Toast(){
  const { toasts, remove } = useToastStore();
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 space-y-2">
      {toasts.map(t=>(
        <div key={t.id} className="app-card px-4 py-3 shadow-glow animate-fadeUp">
          <div className="flex items-start gap-3">
            <div className="text-lg">🔔</div>
            <div className="text-sm">
              <p className="font-medium">{t.title}</p>
              {t.desc && <p className="text-slate-600">{t.desc}</p>}
              <button onClick={()=>remove(t.id)} className="mt-1 text-sm link">Dismiss</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
