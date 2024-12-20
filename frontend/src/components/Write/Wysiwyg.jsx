import React, { useMemo, useRef } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';

const Wysiwyg = ({ content, setContent , ntime }) => {  
  const quillRef = useRef(null);

  const handleImageUpload = async() => {
    const inputFile = document.createElement("input");
    inputFile.setAttribute("type", "file");
    inputFile.setAttribute("accept", "image/*");
    inputFile.click();

    inputFile.addEventListener("change", async()=>{
       const file = inputFile.files?.[0];
       if(!file) return; //파일선택이 없을 경우 함수 빠져나가기
       try{

          //1.formData 생성
           const formData = new FormData();
           formData.append("files", file);
           formData.append('ntime', ntime);

          //2.서버로 이미지 업로드
          const response = await axios.post(`http://localhost:8080/api/posts/files`, formData, {
                headers : { "Content-Type" : "multipart/form-data"}
          });

          //3.반환된 이미지 URL 가져오기
          const imageUrl = response.data.url;

          //4. Quill에 이미지 삽입
          const editor = quillRef.current.getEditor();
          const range = editor.getSelection();
          editor.insertEmbed(range.index, "image", imageUrl);

       }catch(error){
         console.error("이미지 업로드중 오류 발생 :" , error );
         alert("이미지 업로드중 오류가 발생했습니다.");
       }
    });
 }


 //quill 디자인
 const modules = useMemo(()=>{
    return {
       toolbar: {
          container: [
             [{ header : [1, 2, false]}],
             ['bold', 'italic', 'underline', 'strike'],
             [{ list: 'ordered'}, { list: 'bullet'}],
             ['link', 'image'],
             ['clean']
          ],
          handlers : {
             image: handleImageUpload
          }
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

export default Wysiwyg