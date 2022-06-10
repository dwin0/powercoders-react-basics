import { useState } from "react";

const Title = (props) => {
  const [textColor, setTextColor] = useState("blue");

  const handleClick = () => {
    console.log("clicked on title");

    if (textColor === "red") {
      setTextColor("blue");
    } else {
      setTextColor("red");
    }
  };

  return (
    <h1 onClick={handleClick} style={{ color: textColor }}>
      {props.children}
    </h1>
  );
};

export default Title;
