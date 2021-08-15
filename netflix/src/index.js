import React from "react";
import ReactDom from "react-dom";


// for single card of dark series infomation
// function Card(){
  
// // props
//   function Card(props){
//     // we can give any name to place of props
// //     console.log(props);
// //     OUTPUT - {category: "A Netflix Original Series"
// //   imgscr: ""
// // link: "https://www.netflix.com/in/title/80100172"
// // title: "DARK"}
//   return (
//     <>
//     <div className="cards">
//       <div className="card">
//         {/* <img src="https://wallpapercave.com/wp/wp6799259.jpg" alt="Dark Series" className="poster" /> */}
//         {/* using props */}
//         <img src={props.imgscr} alt="Dark Series" className="poster" />

//         <div className="info">
//         {/* <span className="category">A Netflix Original Series</span> */}
//         {/* using props */}
//           <span className="category">{props.category}</span>

//           {/* <h3 className="title">DARK</h3> */}
//           {/* using props */}
//           <h3 className="title">{props.title}</h3>
          
//           {/* <a href="https://www.netflix.com/in/title/80100172" target="_blank"> */}
//           {/* using props */}
//           <a href={props.link} target="_blank">
//             <button>Watch Now</button>
//           </a>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// }

// using cards.jsx component
// import Card from './Cards';

import "./index.css";
import App from "./App";

// import Cdata from './Cdata';
// console.log(Cdata[0]);
// map function defination
// function ncard(val){
//       console.log(val);
//       return(
//       <Card imgscr={val.imgscr} 
//       category={val.category} 
//       title={val.title} 
//       link={val.link} 

// />
//       );
// }

ReactDom.render(
<>
{/* for single card of dark series infomation */}
{/* <Card />
<Card />
<Card /> */}
{/* props */}

{/* <h1 className="heading">Top Netflix Series</h1> */}



{/* before array */}
{/* <Card imgscr="https://wallpapercave.com/wp/wp6799259.jpg" 
      category="A Netflix Original Series"
      title="DARK"
      link="https://www.netflix.com/in/title/80100172" */}

{/* after array */}
{/* <Card imgscr={Cdata[0].imgscr} 
      category={Cdata[0].category} 
      title={Cdata[0].title} 
      link={Cdata[0].link} 

/> */}

{/* <Card imgscr={Cdata[1].imgscr} 
      category={Cdata[1].category} 
      title={Cdata[1].title} 
      link={Cdata[1].link} 
/>
<Card imgscr={Cdata[2].imgscr} 
      category={Cdata[2].category} 
      title={Cdata[2].title} 
      link={Cdata[2].link} 
/>
<Card imgscr={Cdata[0].imgscr} 
      category={Cdata[0].category} 
      title={Cdata[0].title} 
      link={Cdata[0].link} 
/>
<Card imgscr={Cdata[0].imgscr} 
      category={Cdata[0].category} 
      title={Cdata[0].title} 
      link={Cdata[0].link} 
/>
<Card imgscr={Cdata[0].imgscr} 
      category={Cdata[0].category} 
      title={Cdata[0].title} 
      link={Cdata[0].link} 
/> */}

{/* by this map function, we required only 1 time */}
{/* {Cdata.map(ncard)} */}

{/* by fat arrow function  */}
{/* {Cdata.map((val,index) => {
      console.log(index);
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
})} */}

{/* App.jsx */}
<App />


</>,
document.getElementById("root")
);
