import React from "react";
import Cdata from './Cdata';
import Card from './Cards';
const Amazone = () => {
    return(
        <Card
              // keys={val.id}-error bcs you can only write key
              key={Cdata[3].id}
              imgscr={Cdata[3].imgscr} 
              category={Cdata[3].category} 
              title={Cdata[3].title} 
              link={Cdata[3].link} 
        
        />
        
          );
    }
    export default Amazone;