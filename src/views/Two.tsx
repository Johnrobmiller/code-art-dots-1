import _ from "lodash";
import { useEffect, useState } from "react";

const Two = () => {
  const [now, setNow] = useState<number>(79);

  useEffect(() => {
    const nowInterval = setInterval(() => {
      setNow((prev) => prev + 0.012);
    }, 100);
    return () => clearInterval(nowInterval);
  }, []);

  const xArray = _.times(100);
  const yArray = _.times(70);

  const dots = xArray.map((x, i) => {
    return yArray.map((y, j) => {
      // range between 0 and 1
      const o1 = (Math.sin(now + ((i & j) - j / 100)) + 1) / 2;
      const o10 = (Math.sin(now * 10 + ((i & j) - j / 100)) + 1) / 2;
      return (
        <circle
          cx={i}
          cy={j}
          r={o10 / 2}
          fill={`hsl(${(((o1 * 100) & now) + 180) * (now / 4)}, ${
            ((o1 / 2 + 0.5) * 100) & now
          }%, ${((o1 / 2 + 0.5) * 100) & now}%)`}
        />
      );
    });
  });

  return (
    <div style={{ backgroundColor: "#000000" }}>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        {dots}
      </svg>
    </div>
  );
};

export default Two;
