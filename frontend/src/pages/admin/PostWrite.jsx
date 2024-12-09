import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const PostWrite = () => {
  return (
    <Container>
      <h3 className="pt-5 text-center">포스팅</h3> 
      <Row className="mt-5">
        <Col md="2" className="text-end">포스트</Col>
        <Col md="10">
           <input type="text" className="form-control" name="post" value="" />
        </Col>  
        <Col md="2" className="mt-3 text-end">카테고리</Col>
        <Col md="5" className="mt-3">
           <select name="category" className="form-control category">
              <option value="1">dd</option> 
              <option value="2">dd</option> 
              <option value="3">dd</option> 
              <option value="4">dd</option> 
           </select> 
        </Col>    
        <Col md="5" className="mt-3"></Col>

        <Col md="2" className="mt-3 text-end">제목</Col>
        <Col md="10" className="mt-3">
           <input type="text" name="title" className="form-control" value="" />
        </Col>  
        <Col md='2' className="mt-3 text-end">내용</Col>
        <Col md="10" className="mt-3">
            <ReactQuill
               theme="snow"
               modules={{
                  toolbar: [
                    [{ header: [1, 2, false]}],
                    ['bold', 'italic', 'underline', 'strike'],
                    [{ list: 'ordered'}, {list: 'bullet'}],
                    ['link', 'image'],
                    ['clean']
                  ]
               }}
            />
        </Col>
      </Row>
    </Container>    
  )
}

export default PostWrite