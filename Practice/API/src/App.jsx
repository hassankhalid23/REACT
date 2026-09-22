import { useState, useEffect } from 'react'
import axios from "axios";
import './App.css'

// --------------------API , LOADING AUR ERROR HANDLING --------------------
function App() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  // error handling

  useEffect(() => {
// use effect = Component load hote hi code run karo.

    fetch("https://jsonplaceholder.typicode.com/users")

    // converting text api form to JS form
      .then((response) => response.json())
      .then((data) => {

        setUsers(data);
        // API ko response aane mein time lag sakta hai.
        setLoading(false);      
      })
      .catch((error) => {
          setError("Failed to fetch data");
         });
         

    }, []);
  

  if (loading) {
    return <h1>Loading...</h1>;
  }
if (error) {
  return <h1>{error}</h1>;
}

  return (
    <div>

      {
        users.map((user) => (
          <h3 key={user.id}>
            {user.name}
          </h3>
        ))
      }

    </div>
  );
}


export default App
