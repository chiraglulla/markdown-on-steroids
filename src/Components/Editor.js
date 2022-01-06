import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react";
import marked from "marked";
import DOMPurify from "dompurify";
import Preview from "./Preview";
import Logo from "./Logo";

const Editor = () => {
  const { id } = useParams();
  const defaultText = "# Start by writing some markup!";
  const [text, setText] = useState("");
  const [preview, setPreview] = useState("");
  const [name, setName] = useState("Untitled Document");
  const [saving, isSaving] = useState(false);
  const [saved, isSaved] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/document/${id}`, {
      mode: "cors",
      credentials: "omit",
    })
      .then((res) => {
        if (!res.ok) throw Error("Cannot fetch data.");
        return res.json();
      })
      .then((data) => {
        const dataText = data.data.document.text;
        const name = data.data.document.name;
        if (dataText === "") setText(defaultText);
        else setText(dataText);
        setName(name);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  useEffect(() => {
    const html = marked(text);
    const sanitizedHtml = DOMPurify.sanitize(html);
    setPreview(sanitizedHtml);
  }, [text]);

  const handleChange = (e) => {
    const value = e.target.value;
    if (e.target.id === "editor") setText(value);
    else if (e.target.id === "name") setName(value);

    if (saved) isSaved(false);
  };

  const handleSave = (e) => {
    isSaving(true);
    const changes = {
      name,
      text,
    };
    fetch(`http://localhost:5000/api/v1/document/${id}`, {
      method: "PATCH",
      mode: "cors",
      credentials: "omit",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(changes),
    })
      .then((res) => {
        if (!res.ok) throw Error("Cannot update data.");
        isSaving(false);
        isSaved(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <React.Fragment>
      <div className="col-12 d-flex align-items-center py-3">
        <div>
          <Logo />
          <input
            title="name"
            placeholder="Untitled Document"
            type="text"
            value={name}
            id="name"
            onChange={handleChange}
          />
        </div>
        <button
          className="btn btn-sm btn-primary d-flex ml-auto"
          onClick={handleSave}
        >
          {saving ? "Saving.." : saved ? "Saved" : "Save"}
        </button>
      </div>
      <div className="card col-6 p-0 full-height">
        <label className="card-header lead">Input</label>
        <div className="card-body p-0 form-group">
          <textarea
            className="editor form-control full-height"
            onChange={handleChange}
            value={text}
            name="editor"
            id="editor"
            style={{
              resize: "none",
              borderRadius: 0,
            }}
          ></textarea>
        </div>
      </div>
      <Preview preview={preview} />
    </React.Fragment>
  );
};

export default Editor;
