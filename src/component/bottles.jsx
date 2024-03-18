// import { useState } from "react";
// import { useEffect } from "react";
// import Bottle from "./bottle";
// // import Bottle from "../Bottle/Bottle";

// const Bottles = () => {
//   const [bottles, setBottles] = useState([]);

//   useEffect(() => {
//     fetch("bottles.json")
//       .then(res => res.json())
//       .then(data => setBottles(data));
//   }, []);
//   return (
//     <div>
        
//       <h2>Bottles care {bottles.length} </h2>
//       {
//         bottles.map(bottle => <Bottle bottle={bottle}></Bottle>)
//       }
//     </div>
//   );
// };

// export default Bottles;

import { useState } from "react";
import { useEffect } from "react";
import Bottle from "./bottle";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);

  useEffect(() => {
    fetch("bottles.json")

      .then(res => res.json())
      .then(data => setBottles(data));
  }, []);
  return (
    <div>
      <h2>Bottles care {bottles.length} </h2>
      {
      bottles.map(bottle =>  <Bottle
         key={bottle.recipe_id} 
         bottle={bottle}
         ></Bottle>)}
    </div>
  );
};

export default Bottles;