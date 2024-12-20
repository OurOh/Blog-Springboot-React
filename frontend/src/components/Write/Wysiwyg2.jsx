import React, { useMemo, useRef } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Wysiwyg2 = ({ content, setContent }) => {  
  const quillRef = useRef(null);

   //quill 디자인
 const modules = useMemo(()=>{
    return {
       toolbar: {
          container: [
             [{ header : [1, 2, false]}],
             ['bold', 'italic', 'underline', 'strike'],
             [{ list: 'ordered'}, { list: 'bullet'}],
             ['link'],
             ['clean']
          ]
       }
     }
    }, []);

  return (
    <ReactQuill
    ref={quillRef}
    theme="snow"
    modules={modules}
    value={content}
    onChange={setContent} />
  )
}

export default Wysiwyg2