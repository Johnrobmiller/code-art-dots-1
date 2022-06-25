import _ from "lodash";
import { useEffect, useState } from "react";

const iMax = 70;
const jMax = 40;

const Three = () => {
  const [now, setNow] = useState<number>(20);

  useEffect(() => {
    const nowInterval = setInterval(() => {
      setNow((prev) => prev + 0.01);
    }, 75);
    return () => clearInterval(nowInterval);
  }, []);

  const xArray = _.times(iMax);
  const yArray = _.times(jMax);

  const dots = xArray.map((x, i) => {
    const x1 = i;
    const x2 = i + Math.sin(now * i);
    // Math.sin(x) === Math.sin(x +/- (Math.PI / 2))
    const x2_left = i - 1 + Math.sin(now * (i - 3.14159));
    const x2_right = i + 1 + Math.sin(now * (i + 3.14159));
    const x2_diff_right = Math.abs(0.5 + x2 / 2 - (0.5 + x2_right / 2));
    const x2_diff_left = Math.abs(0.5 + x2_left / 2 - (0.5 + x2 / 2));
    const x2_diff_avg = 1 - (x2_diff_left + x2_diff_right) / 2;

    // const pendulumColor = `hsl(${x2_diff_avg * 300 + 200}, ${Math.min(25 + x2_diff_avg * 75, 100)}%, ${Math.min(10 + x2_diff_avg * 50, 75)}%)`
    const pendulumColor = `hsl(${0}, ${0}%, ${Math.min(
      15 + x2_diff_avg * 60,
      75
    )}%)`;

    return (
      <>
        {/* <defs>
          <linearGradient id={`x-grad-${i}`}>
            <stop offset='0%' stop-color={`hsl(${x2_diff_left * 70 + 270}, 20%, ${x2_diff_left * 70}%)`} />
            <stop offset='100%' stop-color={`hsl(${x2_diff_right * 70 + 270}, 20%, ${x2_diff_left * 70}%))`} />
          </linearGradient>
        </defs> */}
        {/* <rect
          x={i}
          width={1}
          height={30}
          // fill={`url("#x-grad-${i}")`}
          fill={`black`}
        /> */}
        {yArray.map((y, j) => {
          const y1 = j;
          const y2 = j + 1;
          // const slope = (y2 - y1) / (x2 - x1)
          const xDiff = x2 - x1;
          const yDiff = y2 - y1;
          const qualifier = Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2));

          return (
            <>
              <line
                x1={x1}
                // x2={x1 + (xDiff / qualifier) * 1.414}
                // x2={x1 + (0.85 * xDiff / qualifier)}
                x2={x1 + (0.85 * xDiff) / qualifier}
                y1={y1}
                // y2={y1 + (yDiff / qualifier) * 1.414}
                // y2={y1 + (0.85 * yDiff / qualifier)}
                y2={y1 + (0.85 * yDiff) / qualifier}
                // r={(Math.sin(now + ((i & j) - (j / 100))) + 1) / 5}
                stroke={pendulumColor}
                strokeWidth={0.05 + Math.abs(x2_diff_avg) / 12}
                strokeLinecap="round"
              />
              <circle
                r={0.13 + Math.abs(x2_diff_avg) / 12}
                // r={0.2}
                cx={x1 + (0.85 * xDiff) / qualifier}
                // cx={x1 + xDiff}
                cy={y1 + (0.85 * yDiff) / qualifier}
                // cy={y1 + yDiff}
                fill={pendulumColor}
                stroke="#111111"
                // strokeWidth={0.1 + Math.abs(x2_diff_right) / 30}
                strokeWidth={0.1}
              />
            </>
          );
        })}
      </>
    );
  });

  return (
    <div style={{ backgroundColor: "black" }}>
      <svg viewBox={`0 0 ${iMax} ${jMax}`} xmlns="http://www.w3.org/2000/svg">
        {dots}
      </svg>
    </div>
  );
};

export default Three;
