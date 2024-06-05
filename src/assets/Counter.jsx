import { useState } from "react";
import "./Counter.css";

function Count() {
  const [value, setValue] = useState(0);

  return (
    <>
      <div className="container">
        <div className="value-div">{value}</div>
        <div className="btn">
          <button onClick={() => setValue(value + 1)}>Increment</button>
          <button onClick={() => setValue(value - 1)}>Decrement</button>
        </div>
      </div>
    </>
  );
}
export default Count;
