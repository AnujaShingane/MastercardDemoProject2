export function useLocalStorage(key, initial){
  return [
    (()=>{ try{ const v = JSON.parse(localStorage.getItem(key)); return v ?? initial; }catch{ return initial; } })(),
    (v)=>localStorage.setItem(key, JSON.stringify(v))
  ];
}
