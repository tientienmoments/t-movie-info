import React, { useState, useEffect } from 'react';
import { Card, Row } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'

export default function Film(props) {
    let [isHover, setIsHover] = useState(false)
    let [youtubeLink,setYoutubeLink]=useState(null)
    const [show, setShow] = useState(false);
    const showInfo = () => {
        setIsHover(true)
    }
    const hideInfo = () => {
        setIsHover(false)
    }

    const callApiGetVideo = async () => {
        let url = `https://api.themoviedb.org/3/movie/${props.movie.id}?api_key=0fe0cfcc2a26aafa851117e003638b00&language=en-US&append_to_response=videos`
        let respone = await fetch(url)
        let data = await respone.json()
        console.log('data:',data)
        if (data.videos.results.length > 0) {
            setYoutubeLink(`https://www.youtube.com/embed/${data.videos.results[0].key}`)
        }

    }

    useEffect(() => {
        callApiGetVideo()  
    }, [])

    if (!isHover) {
        return (
            <div >
                <Card style={{ borderRadius: "20px", }} onMouseOver={showInfo} onMouseLeave={hideInfo} onClick={() => setShow(true)} >
                    <Card.Img style={{ borderRadius: "20px", }} src={`https://image.tmdb.org/t/p/w220_and_h330_face/${props.movie.poster_path}`} alt="Card image" />

                </Card>
                <Modal
                    show={show}
                    onHide={() => setShow(false)}
                    dialogClassName="modal-xl"
                    aria-labelledby="example-custom-modal-styling-title"
                    
                >
                    <Modal.Header closeButton style={{backgroundImage: "linear-gradient(to right, #0c7b47, #289154, #3ea762, #54bd6f, #6ad47c)",}}>
                        <Modal.Title style={{color:"white"}} id="example-custom-modal-styling-title">
                        {props.movie.title}
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{heigt:"600px",}}>
                        <p>
                        <iframe src={youtubeLink} width="540" height="450" title="fx." ></iframe>
                        </p>
                    </Modal.Body>
                </Modal>
            </div>
        )
    } else {
        return (
            <div style={{ borderRadius: "15px", }}>
                <Card style={{ borderRadius: "20px", }} onMouseOver={showInfo} onMouseLeave={hideInfo} onClick={() => setShow(true)}>
                    <Card.Img style={{ borderRadius: "20px", }} src={`https://image.tmdb.org/t/p/w220_and_h330_face/${props.movie.poster_path}`} alt="Card image" />
                    <Card.ImgOverlay style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", borderRadius: "20px", color: "white" }}>
                        <Card.Title style={{ fontWeight: "bolder", fontSize: "20px", }}>{props.movie.title}</Card.Title>
                        <Card.Text>IMDB: {props.movie.vote_average}</Card.Text>
                        {/* <Card.Text>{props.movie.release_date}</Card.Text> */}
                        <Row className="detail-style">
                            <Card.Text >Overview: {props.movie.overview}</Card.Text>
                        </Row>

                    </Card.ImgOverlay>
                </Card>
                <Modal
                    show={show}
                    onHide={() => setShow(false)}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            Custom Modal Styling
          </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
                            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
                            ipsam atque a dolores quisquam quisquam adipisci possimus
                            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                            deleniti rem!
          </p>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }


}
