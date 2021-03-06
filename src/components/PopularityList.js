
import React from 'react'
import Film from './Film'
import Paginate from './Paginate'
import { Row, Container } from 'react-bootstrap'

export default function PopularityList(props) {
    
    if (!props.popularity) return <div>loading</div>
    return (
        <>
        <Container >
        <Row><h2 style={{color:"white", marginBottom:"20px", marginTop:"60px"}}>Popularity High to Low</h2></Row>    
        <Row>
            <div className="board-style" >
            {props.popularity.map(item=> <Film movie={item}/>)}
            </div>
        </Row>
        <Row style={{display:"flex", justifyContent:"center",alignItem:"center", width:"1117px", margin:"20px"}} >
        <Paginate setPageNumber={props.setPageNumber} />
        </Row>
        </Container>
        </>
    )
}

