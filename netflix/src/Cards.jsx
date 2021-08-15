import React from 'react';
import Heading from "./Heading";
import Images from "./Images";


// props
function Cards(props){
    // we can give any name to place of props
//     console.log(props);
//     OUTPUT - {category: "A Netflix Original Series"
//   imgscr: ""
// link: "https://www.netflix.com/in/title/80100172"
// title: "DARK"}
  return (
    <>
    <div className="cards">
      <div className="card">
        {/* <img src="https://wallpapercave.com/wp/wp6799259.jpg" alt="Dark Series" className="poster" /> */}
        {/* using props */}
        {/* <div className="card2"> */}
        

        {/* <img src={props.imgscr} alt="Dark Series" className="poster" /> */}
       <Images imgscr={props.imgscr} />
        <div className="info">
        {/* <span className="category">A Netflix Original Series</span> */}
        {/* using props */}
          <span className="category">{props.category}</span>

          {/* <h3 className="title">DARK</h3> */}
          {/* using props */}
          {/* <h3 className="title">{props.title}</h3> */}
          <Heading title={props.title} />
          {/* <a href="https://www.netflix.com/in/title/80100172" target="_blank"> */}
          {/* using props */}
          <a href={props.link} target="_blank">
            <button>Watch Now</button>
          </a>
          </div>
        {/* </div> */}
      </div>
    </div>
    </>
  );
}

export default Cards;