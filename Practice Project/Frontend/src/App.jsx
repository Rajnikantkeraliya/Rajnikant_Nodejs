import { useState, useEffect } from 'react'; // Import useEffect for fetching data
import './App.css';
import axios from "axios"

function App() {

  const [json, setJson] = useState([])

  useEffect(() => {
    axios.get("/api/json").then(response => {
      setJson(response.data)
      console.log(response.data)
    }).catch((error) => console.log(error))
  }, [])

  return (
    <>
      <h1>Hello World</h1>
      <h2>json:{json.length}</h2>

      {json.map((jsondata) => (
        <div key={jsondata.id}>
          <h2>{jsondata.title}</h2>
          <h2>{jsondata.body}</h2>
        </div>
      ))}
    </>
  );
}

export default App;
