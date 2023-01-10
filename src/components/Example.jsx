import "./Example.css"
import { useState } from "react"

const Example = () => {

    const [title, setTitle] = useState("Moj prvy title")
    const [buttonText, setButtonText] = useState("primary text of button")
    

    const buttonHandler = () => {
        setTitle("my new title")
    }
   const buttonHandlerTwo = () => {
    setTitle("again new title")
   }
   const deleteAll = () => {
    setTitle("")
   }
   const changeButton = () => {
    setButtonText("New Text")
   }
    
   return (
        <div>
            <h1>{title}</h1>
            <button onClick={buttonHandler}>Zmenit title</button>
            <button onClick={buttonHandlerTwo}>Zmenit title 2</button>
            <button onClick={deleteAll}>Delete All</button>
            <button onClick={changeButton}>{buttonText}</button>
        </div>
    )
}

export default Example