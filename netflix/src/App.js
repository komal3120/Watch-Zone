import React from "react";
import Netflix from "./Netflix";
import Amazone from "./Amazone";
const fav = 'netfli';
const FavS = () => {
  // console.log(Cdata[1]);
if(fav==='netflix')
{
 return <Netflix />;
}
else{
  
  return <Amazone />
}
};
const App = () => (
  <>
    <h1 className="heading">Top Netflix Series</h1>

<FavS />

{/* Using ternary operator */}
{ (fav === "netflix")? <Netflix />: <Amazone /> }
</>
);
  
export default App;
