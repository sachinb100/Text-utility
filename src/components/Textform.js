import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick=()=>{
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UpperCase","success");
  }
  const handleLoClick=()=>{
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to LowerCase","success");
  }
  const handleCopy=()=>{
    var text=document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied","success");
    document.getSelection().removeAllRanges();
  }

  const handleClearClick=()=>{
    let newText='';
    setText(newText);
    props.showAlert("Text cleared!","success");
  }

  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(""))
    props.showAlert("Extra space removed","success");
  }
  const handleOnChange=(event)=>{
    setText(event.target.value)
  }

  const[text,setText] = useState("Enter text here2")
  return (
    <>
      <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
          <h1>{props.heading}</h1>
        <div className="mb-3">
          <label for="" className="form-label"></label>
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'blue':'white'}}></textarea>
        </div>
        <button className='btn btn-primary mx-1 my-1' onClick={handleUpClick} disabled={text.length===0}>Convert to UpperCase</button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleLoClick} disabled={text.length===0}>Convert to LowerCase</button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleClearClick} disabled={text.length===0}>Clear Text</button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleCopy} disabled={text.length===0}>Copy Text</button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces} disabled={text.length===0}>Remove Extra Space</button>
        
      </div>
      <div className='container my-3'>
            <h2>Your text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008*text.split("").filter((element)=>{return element.length!==0}).length}Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
      </div>
    </>
  )
}
