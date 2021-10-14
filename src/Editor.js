const Editor = ({ text, handleChange }) => {
    return ( 
    <textarea 
        className="editor"
        value={text}
        onChange={handleChange}
        name="editor" 
        id="editor"
    >
        {text}
    </textarea>
    );
}
 
export default Editor;