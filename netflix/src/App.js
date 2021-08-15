import React from "react";
// import Card from './Cards';
// import Cdata from './Cdata';
import Netflix from "./Netflix";
import Amazone from "./Amazone";
const fav = 'netfli';
const FavS = () => {
  // console.log(Cdata[1]);
if(fav==='netflix')
{
  // return(
  //   <Card
  //         // keys={val.id}-error bcs you can only write key
  //         key={Cdata[1].id}
  //         imgscr={Cdata[1].imgscr} 
  //         category={Cdata[1].category} 
  //         title={Cdata[1].title} 
  //         link={Cdata[1].link} 
    
  //   />
    
  //     );

 return <Netflix />;
}
else{
  // return(
  //   <Card
  //         // keys={val.id}-error bcs you can only write key
  //         key={Cdata[3].id}
  //         imgscr={Cdata[3].imgscr} 
  //         category={Cdata[3].category} 
  //         title={Cdata[3].title} 
  //         link={Cdata[3].link} 
    
  //   />
    
  //     );
  return <Amazone />
}
};
const App = () => (
  <>
    <h1 className="heading">Top Netflix Series</h1>
    {/* {Cdata.map((val,index) => {
      // console.log(index);
      return(
<Card
      // keys={val.id}-error bcs you can only write key
      key={val.id}
      imgscr={val.imgscr} 
      category={val.category} 
      title={val.title} 
      link={val.link} 

/>

  ); 


})}*/}
<FavS />

{/* Using ternary operator */}
{ (fav === "netflix")? <Netflix />: <Amazone /> }
</>
);
  
export default App;
