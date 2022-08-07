import React from "react";

const B = () => {
  
  return <h1>
    sdf
  </h1>
}
const Fun: React.FC = () => {
  const [s, st] = React.useState(1021);

  return (
    <div
      style={{
        width: 100,
        height: 100,
        border: "1px solid green",
      }}
      onClick={
        () => {
          st(pre => pre + 1)
        }
      }
    >
      <h1>this is fu1222n</h1>
      <div>
      {s}
      <B/>
      </div>
    </div>
  );
};


export {Fun}