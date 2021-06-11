import React from "react";
import PhotoLoader from "./components/PhotoLoader";

function App() {
  return (
    <div
      style={{
        maxWidth: "600px",
        width: "95%",
        margin: "auto",
        fontFamily: "Noto Sans JP",
      }}
    >
      <h2>
        This is minimal implementation of Infinite Loader using Intersection
        Observer API in reactJS
      </h2>
      <p>
        Read more about it <a href="https://gulamhussain.dev">here</a>
      </p>
      <PhotoLoader />
    </div>
  );
}

export default App;
