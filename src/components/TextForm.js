import React,{useState} from 'react'
import copy from "copy-to-clipboard"; 
export default function TextForm(props) {
    // using hook => useState   helps in creating state variable
    const [text, setText] = useState(''); // state variable
    // text = "new text"; wrong way to change the state use function
    // setText("new text"); //correct way to change the state 

    const handleOnChange = (event)=>{ // to change text 
        // console.log("OnChange");
        setText(event.target.value); // setText is updating text used in hook above, using this user can change text value so, state of text is also updating
    }

    const handleUpClick = ()=>{
        // console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!!!!", "success");
    }
    const handleLoClick = ()=>{
        // console.log("UpperCase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!!!!", "success");
    }
    const handleClear = ()=>{
        // console.log("UpperCase was clicked" + text);
        let newText = '';
        setText(newText);
        props.showAlert("Text is cleared!!!!", "success");
    }
    const handleCopy = ()=>{
        // install library    npm install save copy-to-clipboard  
        copy(text);
        props.showAlert("Text is copied!!!!", "success");
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/); // split(separator, limit) method splits a string into an array of substrings, and returns the new array.
        setText(newText.join(" ")); //The str.join(separator) method returns an array as a string. The elements will be separated by a specified separator. The default separator is comma (,). join() does not change the original array.
        props.showAlert("Extra spaces removed!!!!", "success");
    }

    const handleToJsx = () =>{
        let newText = text.replace(/class=/g, "className=").replace(/for=/g, "htmlFor=");// string.replace(searchvalue, newvalue) searchvalue can be value of regular expression to replace global use regular expression
        setText(newText);
        props.showAlert("Converted to JSX!!!!", "success");
    }
    
    return (
        <>
        <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button className={`btn btn-outline-black me-md-1`} type="button" onClick={handleCopy}>Copy</button>
                </div>
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'#042743'}} id="myBox" rows="10">
                </textarea>
            
            </div>
            
            <button className="btn btn-outline-light my-2 my-2" onClick={handleUpClick}>Convert text to UpperCase</button>
            <button className="btn btn-outline-light mx-2 my-2" onClick={handleLoClick}>Convert text to LowerCase</button>
            <button className="btn btn-outline-light mx-2 my-2" onClick={handleClear}>Clear text</button>
            <button className="btn btn-outline-light mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-outline-light mx-2 my-2" onClick={handleToJsx}>Convert to JSX</button>
        </div>
        <div className="container my-4" style={{color: props.mode === 'dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.length === 0 ? 0 : text.trim().split(" ").length} words and {text.trim().length} characters</p>
            <p>{0.008 * text.trim().split(" ").length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the above textbox to preview it here "}</p>
        </div>
        </>
    )
}
