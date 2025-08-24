import Button from "../components/Button";
import { Input } from "../components/Input";

export default function SignIn(){
  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-semibold">Sign in</h2>
      <p className="text-slate-600 mb-6">For demo, this form does not authenticate.</p>
      <form className="space-y-3">
        <Input placeholder="Email" />
        <Input placeholder="Password" type="password" />
        <Button className="btn-primary w-full">Continue</Button>
      </form>
      <button className="mt-3 text-sm link">Forgot password?</button>
    </div>
  );
}
