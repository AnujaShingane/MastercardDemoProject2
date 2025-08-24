import Card from "../components/Card";
import Table from "../components/Table";
import Pagination from "../components/Pagination";
import { useState } from "react";

export default function Dashboard(){
  const [page, setPage] = useState(1);
  const total = 4;
  const rows = Array.from({length:8}).map((_,i)=>[
    `USR-${(page-1)*8 + i + 1}`,"Donation","₹1,000","2025-08-01"
  ]);
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Dashboard</h2>
      <Card>
        <h3 className="font-semibold mb-2">Recent submissions</h3>
        <Table cols={["ID","Type","Amount","Date"]} rows={rows} />
        <Pagination page={page} total={total} onPage={setPage} />
      </Card>
    </div>
  );
}
