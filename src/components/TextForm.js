import React,{useState} from 'react'

export default function Textform(props) {
    const handleUpClick = ()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "Success")

    }
    const handleLoClick = ()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "Success")

    }
    const handleClearClick = ()=>{
        let newText=("");
        setText(newText);
        props.showAlert("Textbox clear", "Success")

    }
    const handleOnChange = (event)=>{
        setText(event.target.value)



    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Speaking..", "Success")

      }
    const handleCopy = () =>{
        var text =document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Coppied!", "Success")

    }
    const handleExtraSpaces = () => {
        let newText =text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extraspace removed", "Success")
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className='container' style={{color :props.mode==='dark'? 'white' : '#042743'}}>
        <h1>{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor :props.mode==='dark'? 'grey' : 'white' , color:props.mode==='dark'? 'white' : '#042743'}} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UppperCase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
            <button type="submit" onClick={speak} className="btn btn-primary mx-1">Speak</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>




    </div>
    <div className="container my-3" style={{color :props.mode==='dark'? 'white' : '#042743'}}>
        <h1>Your text summary </h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something into textbox above to preview it here"}</p>
    </div>
    </>
  )
}
