import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react";
import marked from "marked";
import DOMPurify from "dompurify";
import Preview from "./Preview"

const Editor = () => {

    const { id } = useParams()
    
    const [text, setText] = useState("")
    const [preview, setPreview] = useState("")

    useEffect(() => {
        fetch(`http://localhost:8000/markdowns/${id}`)
            .then(res => {
                if(!res.ok)
                    throw Error("Cannot fetch data.")
                return res.json()
            })
            .then(data => {
                setText(data.text)
            })
            .catch(err => {
                console.log(err)
            })
    }, [id])

    useEffect(() => {
        const html = marked(text)
        const sanitizedHtml = DOMPurify.sanitize(html)
        setPreview(sanitizedHtml)
    }, [text])

    const handleChange = e => {
        const text = e.target.value
        setText(text)
    }

    return (

        <React.Fragment>
            <div className="card col-6 p-0 full-height">
                <div className="card-header lead">Input</div>
                <div className="card-body p-0 form-group">
                    <textarea
                        className="editor form-control full-height"
                        value={text}
                        onChange={handleChange}
                        name="editor"
                        id="editor"
                        style={{
                            resize: "none",
                            borderRadius: 0
                        }}
                    >
                        {text}
                    </textarea>
                </div>
            </div>
            <Preview preview={preview} />
        </React.Fragment>
    );
}

export default Editor;