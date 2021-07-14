import "./App.css";
import { Fragment } from "react";
import Titulo from "./components/Titulo";

const amigo='my friend!'

function App() {
  return (
    <Fragment>
      <Titulo amigo={amigo}/>
    </Fragment>
  );
}

export default App;
