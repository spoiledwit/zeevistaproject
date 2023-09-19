export default function Heading3({ className = "", children = "" }) {
  return (
    <h3
      className={`text-4xl md:text-5xl leading-snug tracking-tight ${className}`}
    >
      {children}
    </h3>
  );
}
