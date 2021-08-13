import React, { useState } from 'react';


function App() {
  let time = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(time);
  const UpdateTime = () =>{
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };
  // callback function which call UpdateTime() after 1s(1000ms)
  // in other words automatic loop
  setInterval(UpdateTime,1000);
  return (
  <>
  <div className="out"></div>
    <div className="clock">
    <h1>{ctime} </h1>
    {/* <button onClick={UpdateTime}>Get Time</button> */}
    </div>
    
  </>
  );
}

export default App;
