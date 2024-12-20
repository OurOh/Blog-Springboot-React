import React from 'react'
import axios from 'axios'

const FileUploadService = ({ ntime, onFileUploadComp }) => {

    const handleFileChange = async (e) => {
        const files = Array.from(e.target.files);
        if(files.length === 0) return;
       
        try{
           const formData = new FormData();
           files.forEach((file)=>{
              formData.append("files", file); //파일 배열로 저장
           });
           //ntime도 같이 전송
           formData.append('ntime', ntime);
   
           //파일 업로드 요청
           const response = await axios.post(`api/posts/files`, formData, {
                 headers : { "Content-Type" : "multipart/form-data"}
           });
          
           const fileUrls = response.data.urls;
           onFileUploadComp(fileUrls);

        }catch(error){
           console.error('파일 업로드 실패 :', error);
           alert("파일 업로드중 오류가 발생했습니다.");
        }
     }
   

  return (
            <input type="file" 
                   name="file" 
                   className='form-control' 
                   multiple 
                   onChange={handleFileChange} />
         )
}

export default FileUploadService