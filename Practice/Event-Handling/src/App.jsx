import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [name, setname] = useState("Hassan")
  const [form, setForm] = useState({ email: "", phone: "" });


  const handleClick = () => alert("Hey i am clicked");

  const handleMouseOver = () => alert("Hey i am a mouseover");

   // const handleChange = (e) => setname(e.target.value);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  };
console.log(form)




  return (
    <>
      <div className="Button">
        <button onClick={handleClick}> Click me</button>
      </div>

      {/* <div className="red"  onMouseOver={handleMouseOver}>
        I am a red div </div> */}

        <input type="text"  name='email' value={form.email} onChange={handleChange} />
                <input type="text" name='phone' value={form.phone} onChange={handleChange} />


    </>
  );
}

export default App;
