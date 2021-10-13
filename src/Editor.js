const Editor = ({ text, handleChange }) => {
    return ( 
    <textarea 
        value={text}
        onChange={handleChange}
        name="editor" 
        id="editor" 
        cols="90" 
        rows="10"
    >
        {text}
      </textarea>
    );
}
 
export default Editor;