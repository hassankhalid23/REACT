// import React from 'react'
// import Product from './Product'


// function App() {
//   return (
  //  <>
  //  {/* 2 div ko 1 hi return mein ni rakh skte, usk liye empty div or empt bracket lagani pre gii */}
    
  //   <div className="main"></div>
  //   <h1>HASSAN</h1>
  //  </>
  
  // -----------------------------------

{/* <>
<p1 />
  <div className='w-full h-screen bg-zinc-700 p-4'>
  <div className='w-44 h-32 rounded-xl bg-red-700 p-3 text-white'>
    <h1>Hi Am HASSAN</h1>
  </div>
    <Product />
</div>
</>
  );
}

export default App */}


// ----------------------------------------------

import React, { useState } from 'react'
import Product from './product'

function App() {
  const [a,b] = useState(69)

  return (
    <div className='w-full h-screen bg-zinc-700 text-white p-4'>
      {/* <h1>{a}</h1>
      <button onClick={()=>b(a+1)}className='px-3 py-1 bg-green-500 rounded-md text-xs'>Click it</button> */}
   <Product  age="25"/>
    </div>
  )
}

export default App