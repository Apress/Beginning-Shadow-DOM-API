import React from "react";
import { ShadowRoot } from "./components/ShadowRoot";
import BasicButtons from "./components/Button";
import "./App.css";

function App() {
  return (
    <>
      <BasicButtons />

      <ShadowRoot>
        <BasicButtons />
      </ShadowRoot>
    </>
  );
}

export default App;
