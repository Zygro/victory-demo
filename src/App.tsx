import React, { useState } from "react";
import {
  VictoryChart,
  VictoryLine,
  VictoryZoomContainerProps,
  createContainer,
  VictoryVoronoiContainerProps,
} from "victory";

const App = () => {
  const [zoomDomain, setZoomDomain] =
    useState<VictoryZoomContainerProps["zoomDomain"]>();
  const VictoryZoomVoronoiContainer = createContainer(
    "zoom",
    "voronoi"
  ) as React.ComponentType<
    VictoryVoronoiContainerProps & VictoryZoomContainerProps
  >;

  return (
    <div style={{ height: 400, width: 1000 }}>
      <VictoryChart
        width={550}
        height={300}
        containerComponent={
          <VictoryZoomVoronoiContainer
            zoomDomain={zoomDomain}
            onZoomDomainChange={setZoomDomain}
            labels={({ datum }) => `y: ${datum.y}`}
          />
        }
      >
        <VictoryLine
          style={{
            data: { stroke: "tomato" },
            labels: { fill: "tomato" },
          }}
          name="Chart"
          data={[
            { x: new Date(1982, 1, 1), y: 125 },
            { x: new Date(1987, 1, 1), y: 257 },
            { x: new Date(1993, 1, 1), y: 345 },
            { x: new Date(1997, 1, 1), y: 515 },
            { x: new Date(2001, 1, 1), y: 132 },
            { x: new Date(2005, 1, 1), y: 305 },
            { x: new Date(2011, 1, 1), y: 270 },
            { x: new Date(2015, 1, 1), y: 470 },
          ]}
        />
      </VictoryChart>
    </div>
  );
};
export default App;
