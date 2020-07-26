import React from 'react'
import { Card } from 'react-bootstrap'

export default function Film(props) {
    return (
        <div>
            <Card style={{ fontWeight: 'bold', textAlign: 'center', width: '13rem', border: 'none', margin: '2px', }} >
                <Card.Img className="image-style" variant="top" src={`https://image.tmdb.org/t/p/w220_and_h330_face/${props.movie.poster_path}`} />
                
            </Card>

        </div>
    )
}
