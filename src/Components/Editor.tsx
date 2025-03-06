import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useState } from 'react';
import marked from 'marked';
import DOMPurify from 'dompurify';
import Preview from './Preview';
import Header from './Header';
import Popup from './Popup';

const Editor = () => {
  const { id } = useParams<{id: string}>();
  const defaultText = '# Start by writing some markup!';
  const [text, setText] = useState('');
  const [preview, setPreview] = useState('');
  const [docName, setDocName] = useState('Untitled Document');
  const [saving, isSaving] = useState(false);
  const [saved, isSaved] = useState(false);
  const [error, setError] = useState();
  const [isError, setIsError] = useState(false);
  const [popup, showPopup] = useState(false);

  useEffect(() => {
    if (id !== undefined) {
      fetch(`http://localhost:5000/api/v1/document/${id}`, {
        mode: 'cors',
        credentials: 'include',
      })
        .then((res) => {
          return res.json();
        })
        .then((payload) => {
          if (payload.status !== 'success') {
            if (payload.statusCode === 404 || payload.statusCode === 500) {
              setIsError(true);
              setError(payload.message);
            }
          } else {
            const dataText = payload.data.document.text;
            const docName = payload.data.document.name;
            if (dataText === '') setText(defaultText);
            else setText(dataText);
            setDocName(docName);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);

  useEffect(() => {
    const html = marked(text);
    const sanitizedHtml = DOMPurify.sanitize(html);
    setPreview(sanitizedHtml);
  }, [text]);

  const handleChange = (e: { target: { value: string; id: string; }; }) => {
    const value = e.target.value;
    if (e.target.id === 'editor') {
      setText(value);
    } else if (e.target.id === 'docName') {
      setDocName(value);
    }

    if (saved) isSaved(false);
  };

  const handleSave = () => {
    if (id === undefined) {
      const recover = {
        text,
        name: docName,
        siteName: window.location.origin,
      }
      localStorage.setItem('recover', JSON.stringify(recover))
      showPopup(true);
    } else {
      isSaving(true);
      const changes = {
        name: docName,
        text,
      };
      fetch(`http://localhost:5000/api/v1/document/${id}`, {
        method: 'PATCH',
        mode: 'cors',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(changes),
      })
        .then((res) => {
          if (!res.ok) throw Error('Cannot update data.');
          isSaving(false);
          isSaved(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleClose = () => {
    showPopup(false);
  };

  return (
    <>
      <Header profile={false} logout={false} />
      <div className="col-12 d-flex align-items-center py-3">
        <div>
          <input
            title="docName"
            placeholder="Untitled Document"
            type="text"
            value={docName}
            id="docName"
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button className="btn btn-white d-flex ml-auto" onClick={handleSave}>
          {saving ? 'Saving..' : saved ? 'Saved' : 'Save'}
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
              resize: 'none',
              borderRadius: 0,
            }}
          ></textarea>
        </div>
      </div>
      <Preview preview={preview} />
      {popup && <Popup handleClose={handleClose} />}
    </>
  );
};

export default Editor;
