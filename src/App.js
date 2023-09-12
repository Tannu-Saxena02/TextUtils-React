// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const setAlertDialog = (message, type) => {
    setAlert({
      msg: message,
      typ: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      setAlertDialog("Dark Mode has been enabled", "success");
      document.title = "TextUtils - DarkMode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setAlertDialog("Light Mode has been enabled", "success");
      document.title = "TextUtils - LightMode";
    }
  };

  // let name="Tannu";
  return (
    //JSX fragment and JSX
    //basicallly html with embedded js class->className,for->htmlFor,tabindex=>tabIndex
    // <Routes>
    //   <div className="container">
    //     {/* <Switch>
    //   </Switch> */}
    //     <Route path="/about">
    //       <About />
    //     </Route>
    //     <Route path="/">
    //       <TextForm mode={mode} alert={setAlertDialog} />
    //     </Route>
    //   </div>
    // </Routes>
    <BrowserRouter>
    {/* // ======================= use exact for exact matching of the router path======================
    /users=>component1
    /users/home=>component2*/}
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
    <Routes>
        <Route exact path="/" element={<TextForm mode={mode} alert={setAlertDialog} />} />
      <Route exact path="/about" element={<About/>}>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
