import { useState } from "react";

const MyButton = (props) => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <p>Button was clicked {counter} times</p>
      <button onClick={handleClick}>Name: {props.name}</button>
    </>
  );
};

export default MyButton;
