import { useState } from "react";
import marked from "marked";
import Editor from "./Editor";
import Preview from "./Preview";

function App() {

  const [ text, setText ] = useState("")
  const [ preview, setPreview ] = useState("")
 
  const handleChange = e => {
    const text = e.target.value
    setText(text)
    setPreview(marked(text))
  }

  return (
    <div className="App">
      <h1 style={{textAlign:"center"}}>Markdown On Steroids</h1>

      <Editor text={text} handleChange={handleChange}></Editor>

      <Preview preview={preview} />
    </div>
  );
  
}

export default App;
