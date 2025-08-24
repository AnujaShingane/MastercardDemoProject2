export default function Button({ as:Comp='button', className='', children, ...props }) {
  const C = Comp;
  return (
    <C className={`btn ${className}`} {...props}>{children}</C>
  );
}
