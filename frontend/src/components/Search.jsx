import React from 'react'
import { Col } from 'react-bootstrap'
import { RiSearch2Line } from "react-icons/ri";

const Search = () => {
  return (
    <Col className="searchbox">
       <RiSearch2Line className="searchicon" /> 
       <input type="search" name="searchall" placeholder='search' className="searchinput" />
    </Col>
  )
}

export default Search