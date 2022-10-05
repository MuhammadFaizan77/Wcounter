import React, { useState } from 'react'



export default function TextForm(props) {
    const upperCase = () => {
        console.log("UpperCase is Clicked\n" + text)
        let Utxt = text.toUpperCase();
        setText(Utxt)
        props.showAlert('Converted to UpperCase', 'Success')
    }
    const lowerCase = () => {
        let Ltxt = text.toLowerCase();
        setText(Ltxt)
        props.showAlert('Converted to lowerCase', 'Success')
    }

    const FUletter = () => {
        let Ftext = text[0].toUpperCase() + text.slice(1);
        setText(Ftext)
        props.showAlert('Converted to First letter Capitalized', 'Success')
    }
    const reverse = () => {

        let rtext = text.split("").reverse().join("");
        setText(rtext)
        props.showAlert('Text Reversed', 'Success')
    }
    const cleartxt = () => {

        let ctext = "";
        setText(ctext)
        props.showAlert('Text Cleared', 'Success')
    }

    const copytxt = () => {

        navigator.clipboard.writeText(text)
        props.showAlert('Text Copied', 'Success')
    }

    const rexs = () => {

        let rextext = text.split(/[ ]+/);
        setText(rextext.join(" "))
        props.showAlert('Removed Extra Spaces', 'Success')
    }


    const handleonChange = (event) => {
        console.log("onChange click")
        setText(event.target.value)
    }

    const [text, setText] = useState('');

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>

                <div className="mb-3">
                    <div className="icon" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                        <i id="cross" class="bi bi-x-circle" onClick={cleartxt}></i>
                        <i id="copy" class="bi bi-clipboard2" onClick={copytxt}></i>
                    </div>

                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? '#252239' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} value={text} placeholder="Enter your text " onChange={handleonChange} id="mybox" rows="10"></textarea>

                </div>
                <button disabled={text.length === 0} className="btn btn-primary " onClick={upperCase}>UPPERCASE</button>
                <button disabled={text.length === 0} className="btn btn-warning mx-2" onClick={lowerCase}>lowercase</button>
                <button disabled={text.length === 0} className="btn btn-success mx-2" onClick={FUletter}> Sentence case</button>
                <button disabled={text.length === 0} className="btn btn-danger mx-2" onClick={reverse}> esrever order</button>
                <button disabled={text.length === 0} className="btn btn-dark mx-2" onClick={rexs}> Remove extra Spaces</button>



            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Text Summary</h2>
                <p>Total {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>Total Read Time: {0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} </p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Please Enter Text to Preview"}</p>


            </div>



        </>
    )
}
