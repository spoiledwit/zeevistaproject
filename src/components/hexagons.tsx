export default function Hexagons({
  className = "",
  rows = 6,
  cols = 5,
  fontSize = "104px",
  lineHeight = "104px",
}) {
  return (
    <div className={`flex gap-3 select-none ${className}`}>
      {Array(cols)
        .fill(0)
        .map((_, c) => (
          <div key={c} className=" flex justify-center flex-col">
            {Array(c % 2 === 0 ? rows - 1 : rows)
              .fill(0)
              .map((_, r) => (
                <span
                  key={r}
                  style={{ fontSize: fontSize, lineHeight: lineHeight }}
                >
                  &#x2B22;
                </span>
              ))}
          </div>
        ))}
    </div>
  );
}
