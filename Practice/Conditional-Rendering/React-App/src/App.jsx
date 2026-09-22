import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

// -------------------------------------Conditional Rendering--------------------------------
// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   function toggleLogin() {
//     setIsLoggedIn(!isLoggedIn);
//   }

//   return (
//     <>
//       {isLoggedIn ? (
//         <h1>Welcome Hassan!</h1>
//       ) : (
//         <h1>Please Login</h1>
//       )}

//       <button onClick={toggleLogin}>
//         Login / Logout
//       </button>
//     </>
//   );
// }
// export default App;

// --------------------------------------LIST-----------------------------------------------------

// function Lists(){
//   const students=[ "Hassan", "Faraz", "Helly","Shapater"];


// return(
//   <>
//   {students.map((stuken)=>(
//     <h2>
//       {stuken}
//     </h2>
//   ))}
//   </>
//   // map() ka kaam hai ek array ke har single element par ek hi function baar-baar chalana aur results ki ek nayi array bana kar dena.
// )
// }
// export default Lists;


// -----------------------------------------KEYS using ID------------------------------------------------

// function KEYS() {
//   const students = [
//     { id: 1, name: "Hassan" },
//     { id: 2, name: "Helly" },
//     { id: 3, name: "Shapater" }
//   ];

//   return (
//     <>
//       {students.map((student) => (
//         <h2 key={student.id}>
//           {student.name}
//         </h2>
//       ))}
//     </>
//   );
// }
// export default KEYS;


// import { useState, useEffect } from "react";

// function App() {
//   const [name, setName] = useState("");

//   // useEffect(() => {
//   //   document.title = name;
//   // }, [name]);

//   return (
//     <>
//       <input
//         type="text"
//         value={name}
//         onChange={(event) => setName(event.target.value)}
//         placeholder="Enter your name"
//       />

//       <h1>Hello {name}</h1>
//     </>
//   );
// }

// export default App;
