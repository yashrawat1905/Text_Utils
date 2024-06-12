import React, {useState} from 'react'

export default function TextForm(props) {
const handleUpClick = ()=>{
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
}
const handleLowClick = ()=>{
    console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
}
const handleClearClick = ()=>{
    console.log(" " + text);
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared!", "success");
}
const handleCopyClick = ()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied to clipboard!", "success");
}  
const handleExtraSpaces = ()=>{
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces cleared!", "success");
}      


const handleOnChange = ()=>{
    console.log("OnChange");
    // eslint-disable-next-line no-restricted-globals
    setText(event.target.value);
}

const [text, setText] = useState('');
return (
    <> 
    <div className='container' style ={{color: props.mode ==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value = {text} onChange={handleOnChange}  style ={{backgroundColor: props.mode ==='dark'?'#13466e':'white', color: props.mode ==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled = {text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled = {text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLowClick}>Convert to Lowercase</button>
        <button disabled = {text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleClearClick}>Clear</button>
        <button disabled = {text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCopyClick}>Copy</button>
        <button disabled = {text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}>Remove Extra Space</button>
    </div>
    <div className='container my-3' style ={{color: props.mode ==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text: "Enter text to preview it here"}</p>
    </div>
</>
)
}