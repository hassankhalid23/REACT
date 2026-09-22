import React, { useState } from 'react'

function P1() {
    var[a,b]=useState(69);
  return (
<div className='w-full h-screen bg-zinc-700 p-4'>
{/* <h1>a</h1> */}
<h1>{a}</h1>

</div>
  );
}

export default P1