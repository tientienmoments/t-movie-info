import React from 'react'
import Film from './Film'
import Paginate from './Paginate'
import { Row, Container, } from 'react-bootstrap'

export default function PopularListAsc(props) {
    if (!props.popularityAsc) return <div>loading</div>
    return (
        <>
        <Container >
        <Row><h2 style={{color:"white", marginBottom:"20px"}}>Popularity Low to High</h2></Row>    
        <Row>
            <div className="board-style" >
            {props.popularityAsc.map(item=> <Film movie={item}/>)}
            </div>
        </Row>
        <Row style={{display:"flex", justifyContent:"center",alignItem:"center", width:"1117px", margin:"20px"}} >
        <Paginate setPageNumber={props.setPageNumber} />
        </Row>
        </Container>
        </>
    )
}
