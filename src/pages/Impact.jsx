import Card from "../components/Card";
import Progress from "../components/Progress";

export default function Impact(){
  const metrics = [
    { label:"Meals Served", value: 82000, goal: 100000 },
    { label:"Trees Planted", value: 4800, goal: 6000 },
    { label:"Patients Helped", value: 2300, goal: 3000 },
  ];
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Impact</h2>
      <div className="grid md:grid-cols-3 gap-5">
        {metrics.map(m=>(
          <Card key={m.label}>
            <p className="text-sm text-slate-600">{m.label}</p>
            <p className="text-3xl font-bold mt-1">{m.value.toLocaleString()}</p>
            <div className="mt-3">
              <Progress value={Math.round((m.value/m.goal)*100)} />
              <p className="text-xs text-slate-500 mt-1">{Math.round((m.value/m.goal)*100)}% of {m.goal.toLocaleString()}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
