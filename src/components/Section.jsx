import { useEffect, useRef } from "react";

export default function Section({ children, className='' }){
  const ref = useRef(null);
  useEffect(()=>{
    const el = ref.current;
    const io = new IntersectionObserver(([e])=>{
      if(e.isIntersecting){
        el.classList.add("reveal-show");
        io.disconnect();
      }
    }, { threshold:.1 });
    io.observe(el);
    return ()=>io.disconnect();
  },[]);
  return <section ref={ref} className={`reveal ${className}`}>{children}</section>;
}
