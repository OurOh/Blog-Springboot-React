import React, {useState, useEffect} from 'react'
import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap'
import axios from 'axios'

const Git = () => {
   const [repo, setRepo] = useState([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   const [languages, setLanguages] = useState([]);

  //Git 레포지토리 가져오기
   const getRepos = async ()=> {
     setLoading(true);
     setError(null);
     try{
        const res = await axios.get("https://api.github.com/users/musecom/repos");
        //console.dir(res.data);
        setRepo(res.data);
      
        //언어목록 추출
        const langs = Array.from(
                        new Set(
                             res.data.map((repo)=>repo.language).filter(Boolean)
                        )
                      );
        console.log(langs);              
        setLanguages(langs);
     }catch(err){
        setError("에러가 발생했습니다.");
     }finally{
        setLoading(false);
     }
   }   

   useEffect(()=>{
     getRepos();
   },[]);

   return (
    <Container>
       <Row>
         <Col>
           {loading && <p>로딩중...</p>}
           {error && <p>{error}</p>}
           {!loading && !error && (
              <Container className="mt-5">
                <Tabs defaultActiveKey={"all"}>
                   <Tab eventKey={"all"} title="all">
                      
                      <Row className="pt-5">
                         <Col md="3">
                            <a href="#" class="repobox">
                               fdsfdsf
                            </a>
                         </Col>
                         <Col md="3">
                            <a href="#" class="repobox">
                               fdsfdsf
                            </a>
                         </Col>
                         <Col md="3">
                         <a href="#" class="repobox">
                               fdsfdsffdsfda
                               fdsafdsafdsa
                               fdsafdsafdsafdsa
                               fdsafdsafdsafdsaf
                               fdsafdsafdsaf
                               fdsafdsafdsa
                               fdsafd
                               fdsa
                               fdas
                            </a>
                         </Col>
                         <Col md="3">
                            <a href="#" class="repobox">
                               fdsfdsf
                            </a>
                         </Col>
                      </Row>

                   </Tab>

                   <Tab eventKey={"html"} title="html">
                      랭귀지에 맞는 맵
                      html
                   </Tab>

                </Tabs> 
              </Container>
           )}
           <ul>
            {repo.map((r)=>(
                <li key={r.id}>
                   <a href={r.html_url} target="_blank">
                      {r.name} 
                   </a> 
                </li>
            ))} 
           </ul> 
         </Col>
       </Row> 
    </Container>    
  )
}

export default Git