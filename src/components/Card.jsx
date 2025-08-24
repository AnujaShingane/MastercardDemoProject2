export default function Card({ children, className='' }) {
  return <div className={`app-card p-5 ${className}`}>{children}</div>;
}
