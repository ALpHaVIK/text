import React, {useState} from "react";

export default function Textarea(props) {
  const handleUpClick = () => {
    //console.log("Uppercase was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to upper case", "success");
  };
  const handleLoClick = () => {
    //console.log("Uppercase was Clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to Lower case", "success");
  };
  const handleOnChange = (event) => {
    //console.log("on change ");
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div classNamae="mb-6">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows={10}
            defaultValue={""}
          />
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-success my-4 mx-2"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-secondary my-4 mx-2"
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
      </div>

      <div className="container my-3">
        <h2 className="my-2">Your text summary </h2>

        <p>
          <b>
            {
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
            words, {text.length} characters
          </b>
        </p>
        <p>
          <b>{0.008 * text.split(" ").length} minutes read</b>
        </p>
      </div>
    </>
  );
}
