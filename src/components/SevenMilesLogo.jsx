export default function SevenMilesLogo({ height = 32, onDark = true }) {
  const milesColor = onDark ? '#f0f4ff' : '#2d3f55';
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'baseline',
        lineHeight: 1,
        userSelect: 'none',
        fontFamily: 'var(--font-sans)',
        letterSpacing: '-0.03em',
      }}
    >
      <span
        style={{
          fontSize: height,
          fontWeight: 900,
          color: '#3dada0',
          lineHeight: 1,
        }}
      >
        Seven
      </span>
      <span
        style={{
          fontSize: height,
          fontWeight: 600,
          color: milesColor,
          lineHeight: 1,
        }}
      >
        Miles
      </span>
    </div>
  );
}
