import { useState } from "react";
import marked from "marked";
import Editor from "./Editor";
import Preview from "./Preview";

function App() {

  let initialText = `
    # This is the biggest text you can ever write.
    ## This is the second biggest text you can write.
    ###### This is the smallest text you can write.
    
    ### **Grab the reader's attention with some Bold text.**
    ### *Love for italic text never ends.*
    ### ~~Strikethrough the text you wish to.~~
    
    ### **You can also _nest_ italic inside bold text.**
    
    ### ***Italic and bold at the same time.***
    
    Normal Text
    > Quoted Text
    
    ### \`Add text which look like real <code></code> as in your editor.\` 
    
    \`\`\`
      const Editor = () => {
          return "Convert me to some code looking text.";
      }
    \`\`\`
  `

  const [ text, setText ] = useState(initialText)
  const [ preview, setPreview ] = useState(marked(initialText))
 
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
