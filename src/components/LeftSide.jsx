import React from "react";
import { Image } from "react-bootstrap";

function LeftSide() {
  return (
    <div className="leftSide">
      <Image style={{imageSize: "cover"}} fluid src="/img/bg1.png" />
    </div>
  );
}

export default LeftSide;
