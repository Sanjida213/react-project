import { useState } from "react";
import "./Counter.scss";

type CounterProps = {
  heading: string;
}

const Counter = ({heading} : CounterProps) => {
  const [counter, setCounter] = useState<number>(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    if (counter > 0) {
    setCounter(counter - 1);
    }
  };

  return (
    <div className="counter">
      <h1 className="counter__heading">{heading}</h1>
      <p className="counter__number">{[counter]}</p>
      <button className="counter__decrement" aria-label="Navigate left"
        onClick={handleDecrement}> 
        -
      </button>
      
      <button className="counter__increment" aria-label="Navigate right"
        onClick={handleIncrement}> 
        +
      </button>
    </div>
  )
}

export default Counter;