import { Link } from "react-router-dom";
export default function NotFound(){
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold">404</h2>
      <p className="text-slate-600 mt-2">Page not found.</p>
      <Link to="/" className="mt-4 inline-block btn-ghost">Go home</Link>
    </div>
  );
}
