import React, { Suspense } from "react";
import ReactDom from "react-dom";
import { Fun } from "./Fun";
const App: React.FC = () => {
  const [s, sb] = React.useState(12);

  const Lz = React.lazy(() => import("./d"));
  return (
    <div
      onClick={() => {
        sb((pre) => pre + 1);
      }}
      style={{
        border: "1px solid green",
        width: 200,
        height: 200,
      }}
    >
      <Fun />
      {s}
    </div>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
