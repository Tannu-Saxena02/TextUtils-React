import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleOnPress = (event) => {
    setText(event.target.value);
  };
  const handleOnLowCase = (event) => {
    let lowerCase = text.toLowerCase();
    setText(lowerCase);
    props.alert("Converted to LowerCase !", "success");
  };
  const handleOnCapital = (event) => {
    let lowerCase = text.charAt(0).toUpperCase() + text.slice(1);
    setText(lowerCase);
    props.alert("Converted to CapitalizeCase !", "success");
  };
  const handleOnUpCase = () => {
    let upperCase = text.toUpperCase();
    setText(upperCase);
    props.alert("Converted to UpperCase !", "success");
  };
  const handleOnClear = () => {
    let clearText = "";
    setText(clearText);
    props.alert("Text Cleared !", "success");
  };
  const handleOnCopy = () => {
    // let copyText = document.getElementById("myBox");
    // copyText.select();
    // copyText.setSelectionRange(0, 99999);
    // Copy the text inside the text field
    //use navigator api
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges();
    props.alert("Copied to Clipboard !", "success");
  };
  const RemoveExtraSpaces = () => {
    let newString = text.replace(/\s+/g, " ").trim();
    setText(newString);
    props.alert("Extra Spaces Removed !", "success");
  };
  return (
    <div
      className={"container mb-3"}
      style={{
        backgroundColor: props.mode === "dark" ? "#042743" : "white",
        color: props.mode === "dark" ? "white" : "black",
      }}
    >
      <div className="mb-3 my-2">
        <h1>Enter Text Here</h1>
        <textarea
          style={{
            backgroundColor: props.mode === "dark" ? "grey" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
          type="email"
          value={text}
          className="form-control"
          id="myBox"
          aria-describedby="emailHelp"
          rows="8"
          onChange={handleOnPress}
        />
      </div>
      <button
        disabled={text.length === 0}
        type="submit"
        className="btn btn-primary mt-2 mx-1"
        onClick={handleOnUpCase}
      >
        Convert To UpperCase
      </button>
      <button
        disabled={text.length === 0}
        type="submit"
        className="btn btn-primary mt-2 mx-1"
        onClick={handleOnLowCase}
      >
        Convert To LowerCase
      </button>
      <button
        disabled={text.length === 0}
        type="submit"
        className="btn btn-primary mt-2 mx-1"
        onClick={handleOnCapital}
      >
        Capatalize Text
      </button>
      <button
        disabled={text.length === 0}
        type="submit"
        className="btn btn-primary mt-2 mx-1"
        onClick={handleOnClear}
      >
        Clear Text
      </button>
      <button
        disabled={text.length === 0}
        type="submit"
        className="btn btn-primary mt-2 mx-1"
        onClick={handleOnCopy}
      >
        Copy Text
      </button>
      <button
        disabled={text.length === 0}
        type="submit"
        className="btn btn-primary mt-2 mx-1"
        onClick={RemoveExtraSpaces}
      >
        Remove Extra Spaces
      </button>
      <div className="my-3">
        <h2>Your Text Summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words {text.length} chaaracters
        </p>
        <p>
          {0.08 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Write Something in the Textbox above to preview it here"}
        </p>
      </div>
    </div>
  );
}
