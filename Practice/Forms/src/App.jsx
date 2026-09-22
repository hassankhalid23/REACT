import { useState } from "react";
import "./App.css";
// import { useForm } from "react-hook-form";

// -----------------------Controlled component------------------------------
// function App() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();

//     console.log("name : ", name);
//     console.log("email : ", email);
//   }

//   return (
//     <div>
//       <h1>Registration Form</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter ur name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />

//         <input
//           type="email"
//           placeholder="Enter ur email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// }
// export default App;

// ------------------------------Lifting state up------------------------------------

// // Child Component 1
// function InputBox({ username, setName }) {
//   return (
//     <input
//       type="text"
//       value={username}
//       onChange={(e) => setName(e.target.value)}
//       placeholder="Enter your name"
//     />
//   );
// }

// // Child Component 2
// function Display({ abc }) {
//   return <h2>Hello {abc}</h2>;
// }

// // Parent Component
// function App() {
//   // State yahan Parent mein rakhi hai
//   const [name, setName] = useState("");

//   return (
//     <div>
//       <h1>Lifting State Up</h1>

//       {/* Parent se data + setter Input ko */}
//       <InputBox username={name} setName={setName} />

//       {/* Parent se data Display ko */}
//       <Display abc={name} />
//     </div>
//   );
// }

// export default App;

// ------------------Component Compstion----------------

// Input component
function InputBox({ name, setName }) {
  return (
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Enter your name"
    />
  );
}

// Display component
function Display({ name }) {
  return <h2>Hello {name}</h2>;
}

// Reusable container component
function Card({ children }) {
  return <div>{children}</div>;
}

// Parent component
function App() {
  const [name, setName] = useState("");

  return (
    <Card>
      {/* Passing state to InputBox */}
      <InputBox name={name} setName={setName} />

      {/* Passing state to Display */}
      <Display name={name} />
    </Card>
  );
}

export default App;
