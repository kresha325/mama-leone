import { useId } from "react";

function getArcMetrics(text: string) {
  const normalized = text.toUpperCase();
  const length = normalized.length;
  const fontSize = length <= 7 ? 22 : length <= 11 ? 20 : length <= 15 ? 18 : 16;
  const letterSpacingEm = length <= 9 ? 0.06 : length <= 13 ? 0.04 : 0.03;
  const charUnit = fontSize * 0.74 + fontSize * letterSpacingEm;
  const textRun = length * charUnit;
  const width = Math.max(168, Math.ceil(textRun * 1.28 + 44));
  const height = 48;
  const baseline = height - 10;
  const arch = length <= 8 ? 14 : length <= 13 ? 16 : 18;
  const margin = 10;

  return {
    width,
    height,
    path: `M ${margin} ${baseline} Q ${width / 2} ${baseline - arch} ${width - margin} ${baseline}`,
    svgWidth: Math.min(Math.round(width * 0.68), 210),
    svgHeight: 38,
    fontSize,
    letterSpacing: `${letterSpacingEm}em`,
  };
}

export function MenuCurvedText({
  text,
  color,
  backgroundColor,
}: {
  text: string;
  color: string;
  backgroundColor?: string;
}) {
  const pathId = useId().replace(/:/g, "");
  const { width, height, path, svgWidth, svgHeight, fontSize, letterSpacing } =
    getArcMetrics(text);

  return (
    <div
      className="inline-flex justify-center"
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      <svg
        viewBox={`${-14} 0 ${width + 28} ${height}`}
        width={svgWidth}
        height={svgHeight}
        preserveAspectRatio="xMidYMid meet"
        className="block shrink-0"
        role="img"
        aria-label={text}
      >
        <defs>
          <path id={pathId} d={path} fill="none" />
        </defs>
        <text
          fill={color}
          fontFamily="var(--font-playfair), Georgia, serif"
          fontSize={fontSize}
          fontWeight={700}
          letterSpacing={letterSpacing}
        >
          <textPath href={`#${pathId}`} startOffset="50%" textAnchor="middle">
            {text.toUpperCase()}
          </textPath>
        </text>
      </svg>
      <span className="sr-only">{text}</span>
    </div>
  );
}
