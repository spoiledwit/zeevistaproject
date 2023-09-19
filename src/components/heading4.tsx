export default function Heading4({ className = "", children = "" }) {
  return (
    <h4 className={`text-3xl tracking-tight leading-snug ${className}`}>
      {children}
    </h4>
  );
}
