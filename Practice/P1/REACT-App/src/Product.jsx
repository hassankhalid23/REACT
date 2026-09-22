// import React from "react";

// function Product({ age ,data }) {
//   return (
//     <div className="text-white w-full h-60 bg-zinc-800">
//       <h1>{age}</h1>
//       {/* value print ho gi */}
//       <h2>{data.age}</h2>
//       <h2>{data.name}</h2>
      
//     </div>
//   );
// }

// export default Product;
// -----------------------------------------------------------------

import React, { useState } from "react";

function Product({ age ,data }) {
   const [a,b]= useState(false);
  return (
    <div className="text-white w-full h-60 bg-zinc-800">
      
      <h4 className={a === false ? "text-red-600" : "text-blue-600"}>
  {a === false ? "hello" : "Hey"}</h4>

      <button onClick={()=>b(!a)}>Change</button>
      {/* (!) isliye use kiya ku k agr sirf true use krte to sirf 1 time change hota */}
    </div>
  );
}

export default Product;