import React from 'react';
import Heading from "./Heading";
import Images from "./Images";


// props
function Cards(props){
   
  return (
    <>
    <div className="cards">
      <div className="card">
       
       <Images imgscr={props.imgscr} />
        <div className="info">
        {/* using props */}
          <span className="category">{props.category}</span>

          
          <Heading title={props.title} />
        
          {/* using props */}
          <a href={props.link} target="_blank">
            <button>Watch Now</button>
          </a>
          </div>
     
      </div>
    </div>
    </>
  );
}

export default Cards;
