import PanZoom, { Element } from "@sasza/react-panzoom";

import img from "@/assets/geometric-shapes-rectangle-icon-illustration-vector.jpg";

function ChipWorkspace() {
  return (
    <PanZoom>
      <Element id="orange" x={50} y={60}>
        <div style={{ width: 100, height: 200, backgroundColor: "orange" }} />
      </Element>
      <Element id="red" x={120} y={150}>
        <div style={{ width: 100, height: 100, backgroundColor: "red" }} />
      </Element>
    </PanZoom>
  );
}

export default ChipWorkspace;
