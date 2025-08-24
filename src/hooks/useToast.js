import { useState } from "react";

let listeners = [];
let id = 1;
let store = {
  toasts: [],
  add: (t) => {
    const item = { id:id++, ...t };
    store.toasts = [...store.toasts, item];
    listeners.forEach(l=>l(store.toasts));
    setTimeout(()=>store.remove(item.id), 4000);
  },
  remove: (tid) => {
    store.toasts = store.toasts.filter(t=>t.id!==tid);
    listeners.forEach(l=>l(store.toasts));
  }
};

export function useToastStore(){
  const [toasts, setToasts] = useState(store.toasts);
  if(!listeners.includes(setToasts)) listeners.push(setToasts);
  return { toasts, add:store.add, remove:store.remove };
}
