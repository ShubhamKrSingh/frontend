import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetch("/api/jokes")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data received:", data);
        setJokes(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });

    // axios
    //   .get("/api/jokes")
    //   .then((response) => {
    //     setJokes(response.data);
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
  }, []);

  return (
    <>
      <h1>Full stack application</h1>
      <p>Jokes: {jokes.length}</p>
      {jokes.map((joke, index) => (
        <div key={joke.id}>
          <h3>{joke.name}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;
