const Editor = ({ text, handleChange }) => {
    return ( 
        <div className="card col-6 p-0 mh-100 mw-100">
            <div className="card-header lead">Input</div>
            <div className="card-body p-0 form-group">
                <textarea 
                    className="editor w-100 h-100 form-control border-0"
                    value={text}
                    onChange={handleChange}
                    name="editor" 
                    id="editor"
                >
                    {text}
                </textarea>
            </div>
        </div>
    );
}
 
export default Editor;