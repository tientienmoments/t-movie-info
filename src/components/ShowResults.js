import React from 'react'

import { Card } from 'react-bootstrap'



export default function ShowResults(props) {
    let movie=props.resultKeyWord
    return (

        <div className="film-style">
               
                {movie.map(item => {
                    
                    return (
                        
                        
                        <div>
                            
                        <Card style={{fontWeight:'bold',textAlign:'center',width: '13rem',border:'none',margin:'2px', }}>
                        
                            <Card.Img className="image-style" variant="top" src={`https://image.tmdb.org/t/p/w220_and_h330_face/${item.poster_path}`} />
                            {/* <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text style={{fontSize:'13px',}}>
                                {item.release_date}
                                </Card.Text>    
                                
                            </Card.Body> */}
                        </Card>
                        </div>

                    )
                })
                }
            


        </div>)
}
