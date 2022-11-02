import React,{useState} from 'react'

export default function Textform(props) {

    const [text, setText] = useState("");
    // text = "new text" wrong way to change the state 
    //setText = "new text" Correct way to change the state
    
    const handleUpClick = () => {  
        console.log("up button click");
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = () => {  
        console.log("up button click");
        let newtext = text.toLowerCase();
        setText(newtext);
    }

    const handleOnChange  = (event) => {
        console.log("On Change");
        setText(event.target.value);
    }

    const handleCopy = ()=>{
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExreaSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    return ( 
        <>
        <div className="my-3" style={{color: props.mode==='light'?'black':'white'}}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'grey', color:props.mode==='light'?'black':'white'}} id="mybox" rows="12"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick} >UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick} >LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy} >Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExreaSpaces} >Remove Extra Spaces</button>
            
        </div>
        <div className="container py-3" style={{color: props.mode==='light'?'black':'white'}}>
        <h3 className={`text-${props.mode==='light'?'dark':'light'}`}>Your Text Suymmery</h3>
        <p>you have {text.split(" ").length} word and {text.length} characters</p>
        <p>you have {0.008 * text.split(" ").length} Minuts to read</p>
        <p>{text.length>0? text : "Enter Your Text To Preview"}</p>
      </div>
      </>
  )
}
