import React,{useState} from 'react'
import PropTypes from 'prop-types'
export default function TextForm(props) {
    const handleUpClick= ()=>{
        setText(text.toUpperCase());
        props.showAlert("Text has been converted to UpperCase.","success")
    }
    const handleLoClick= ()=>{
        setText(text.toLowerCase());
        props.showAlert("Text has been converted to LowerCase.","success")
    }
    const handleClearClick= ()=>{
       
        setText('');
        props.showAlert("Text has been cleared.","success")
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard.","success")
      }
      function handelExtraSpaces() {
        setText(text.trim().replace(/\s+/g, ' '));
        props.showAlert("Extra space has been cleared.","success")
      }
    const handleOnChange=(event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    const [text,setText]=useState('');
  return (
    <>
    <div className="container my-3" style={{color: props.mode==='light'? 'black':'white'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3" >
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="MyBox"
          rows="8"
          style={{color: props.mode==='light'? 'black':'white' ,background:props.mode==='light'? 'white':'#66737fab'}}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To UpperCase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert To LowerCase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy  Text</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handelExtraSpaces}>Remove Extra Space</button>
    </div>
    <div className="container" style={{color: props.mode==='light'? 'black':'white'}}>
        <h2>Your Text Summary</h2>
        <p>{text.length!==0 ? text.trim().split(' ').length:0} {text.trim().split(' ').length>1?"words":"words"} and {text.trim().length} characters</p>
        <p>{0.008*text.trim().split(' ').length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0? text.substring(0,500):'Write in the above area to see preview'}</p>
    </div>
    </>

  );
}

TextForm.propTypes={heading: PropTypes.string.isRequired}