
import React, { useState } from 'react'
import RubberSlider from '@shwilliam/react-rubber-slider'
import '@shwilliam/react-rubber-slider/dist/styles.css'
import Paginate from './Paginate'
import { Row, Container, Button } from 'react-bootstrap'
import Film from './Film'


export default function RatedListMovie(props) {
    
    // let [rateMovie,setRateMovie]=useState(null)

//  let checkRateList=(props.ratedList.map(item => <Film movie={item} />))

    // const setTopRatedMovie = () =>{
    //     // console.log(checkRateList)
    //     setRateMovie(checkRateList)
        
    // }
    if (!props.ratedList || props.value === null) return <div>loading</div>
    // console.log(checkRateList)
    return (

        <>

            <Container >
                {/* <div className="sliderContainer">
            <RubberSlider width={150} value={value} onChange={setValue} />
            <h5 id="ratingFilter">Rating: {value} and up</h5>
            {/* <Button className="filterByRating" onClick={() => { setUrlState(`discover/movie?sort_by=vote_average.desc&`); }} variant="outline-info">Filter</Button> */}
                {/* </div> */}
                <Row><h2 style={{ color: "white", marginBottom: "20px", marginTop: "60px" }}>Top Rated</h2></Row>
                <Row>
                    <RubberSlider
                        width={400} 
                        value={props.value} 
                        onChange={value => props.setValue(value)}
                        
                        min={1}
                        max={10}
                    />
                    <p style={{color:"white",fontSize:"20px", fontWeight:"bolder"}}>{props.value}</p>
                </Row>

                
                <Row>
                    <div className="board-style" >
                    {props.ratedList.map(item => <Film movie={item}/>)}
                    </div>
                </Row>
                <Row style={{ display: "flex", justifyContent: "center", alignItem: "center", width: "1117px", margin: "20px" }} >
                    <Paginate setPageNumber={props.setPageNumber} />
                </Row>
            </Container>
        </>
    )
}
