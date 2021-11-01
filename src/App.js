import React, { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("");
  const [isTrue, setIsTrue] = useState(false);

  const onClick = () => {
    fetch("https://jfb-portfolio-api.herokuapp.com/projects")
      .then((res) => res.json())
      .then((response) => {
        setData(response.data[0]);
        console.log(response.data[0]);
        setIsTrue(true);
      });
  };
  return (
    <div className="App">
      <h1>Hello World</h1>
      <button onClick={onClick}>Click Me</button>

      {isTrue ? (
        <div>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
          <img src={data.img_url} alt={data.title} />
          <a href={data.repo} target="_blank" rel="noreferrer">
            Source Code
          </a>
          <a href={data.demo} target="_blank" rel="noreferrer">
            Demo
          </a>
        </div>
      ) : (
        <p>Press the button.</p>
      )}

      {/* <div>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <img src={data.img_url} alt={data.title} />
        <a href={data.repo} target="_blank" rel="noreferrer">
          Source Code
        </a>
        <a href={data.demo} target="_blank" rel="noreferrer">
          Demo
        </a>
      </div> */}
    </div>
  );
}

export default App;
