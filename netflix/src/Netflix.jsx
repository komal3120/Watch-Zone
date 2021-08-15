import React from "react";
import Cdata from './Cdata';
import Card from './Cards';
const Netflix = () => {
return(
    <Card
          // keys={val.id}-error bcs you can only write key
          key={Cdata[1].id}
          imgscr={Cdata[1].imgscr} 
          category={Cdata[1].category} 
          title={Cdata[1].title} 
          link={Cdata[1].link} 
    
    />
    
      );
    }
    export default Netflix;