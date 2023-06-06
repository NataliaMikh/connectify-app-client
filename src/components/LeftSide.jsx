import React from "react";
import { Image } from "react-bootstrap";

function LeftSide() {
  return (
    <div>
      <Image
        style={{ imageSize: "cover", height: "100%" }}
        fluid
        src="/img/bg1.jpg"
      />
    </div>
  );
}

export default LeftSide;
