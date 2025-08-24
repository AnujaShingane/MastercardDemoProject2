export function formatCurrency(amount, cur='INR'){
  const m = Number(amount||0);
  try{ return new Intl.NumberFormat('en-IN', { style:'currency', currency: cur }).format(m); }
  catch{ return `${cur} ${m.toFixed(2)}`; }
}
