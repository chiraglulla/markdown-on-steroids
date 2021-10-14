import { useState } from "react";
import marked from "marked";
import Editor from "./Editor";
import Preview from "./Preview";

function App() {

  const initialText = "# This is the biggest text you can ever write.\n## This is the second biggest text you can write.\n###### This is the smallest text you can write.\n\n### **Grab the reader's attention with some Bold text.**\n### *Love for italic text never ends.*\n### ~~Strikethrough the text you wish to.~~\n\n### **You can also _nest_ italic inside bold text.**\n\n### ***Italic and bold at the same time.***\n\nNormal Text\n> Quoted Text\n\n### `Add text which look like real <code></code> as in your editor.`\n\n```\n  const Editor = () => {\n      return 'Convert me to some code looking text.';\n  }\n```\n"

  const initialPreview = marked(initialText)
  
  const [ text, setText ] = useState(initialText)
  const [ preview, setPreview ] = useState(initialPreview)
 
  const handleChange = e => {
    const text = e.target.value
    setText(text)
    setPreview(marked(text))
  }

  return (
    <div className="App">
      <h1 className="title">Markdown on steroids</h1>
      <Editor text={text} handleChange={handleChange}></Editor>
      <Preview preview={preview} />
    </div>
  );
  
}

export default App;
