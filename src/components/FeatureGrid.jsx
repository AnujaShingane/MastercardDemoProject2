import Card from "./Card";
import Badge from "./Badge";

export default function FeatureGrid({ features=[] }){
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {features.map(f=>(
        <Card key={f.title}>
          <div className="flex items-start gap-3">
            <div className="h-10 w-10 rounded-xl bg-slate-100 flex items-center justify-center text-lg">{f.icon}</div>
            <div>
              <h3 className="font-semibold">{f.title} <Badge className="ml-2">{f.badge||"Ready"}</Badge></h3>
              <p className="text-sm text-slate-600 mt-1">{f.desc}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
