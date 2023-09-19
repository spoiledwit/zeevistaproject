export default function Heading2({ className = "", children = "" }) {
  return (
    <h2 className={`text-slate-400 text-3xl font-serif ${className}`}>
      {children}
    </h2>
  );
}
