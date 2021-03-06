import React, { useState, useEffect } from 'react';
import { Card, Row, Col } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'

export default function Film(props) {
    let [isHover, setIsHover] = useState(false)
    let [youtubeLink, setYoutubeLink] = useState(null)
    const [show, setShow] = useState(false);
    const showInfo = () => {
        setIsHover(true)
    }
    const hideInfo = () => {
        setIsHover(false)
    }
    let [genres, setGenres] = useState(null)
    let [runtime, setRuntime] = useState(null)
    let [homepage, setHomePage] = useState(null)


    const callApiGetVideo = async () => {
        // let url = `https://api.themoviedb.org/3/movie/${props.movie.id}?api_key=0fe0cfcc2a26aafa851117e003638b00&language=en-US&append_to_response=videos`
        //https://api.themoviedb.org/3/movie/157336?api_key={api_key}&append_to_response=videos
        let url = `https://api.themoviedb.org/3/movie/${props.movie.id}?api_key=0fe0cfcc2a26aafa851117e003638b00&append_to_response=videos`
        let respone = await fetch(url)
        let data = await respone.json()
        console.log('check data film:', data)

        if (data.videos.results.length === 0) {
            console.log("test film", data)
        } else {
            setYoutubeLink(`https://www.youtube.com/embed/${data.videos.results[0].key}`)
        }

        if (data.genres.length > 0) {
            setGenres(data.genres.map(item => <div className="badge badge-success m-2"> {item.name} </div>))

        }

        setRuntime(data.runtime)
        setHomePage(data.homepage)

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
                    style={{ borderRadius: "15px" }}
                >
                    <Modal.Header closeButton style={{ backgroundImage: "linear-gradient(to right, #39a975, #34b389, #32bc9d, #34c6b1, #3bcfc4)", }}>
                        <Modal.Title style={{ color: "white" }} id="example-custom-modal-styling-title">
                            {props.movie.title}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ heigt: "600px", backgroundColor: "#cefbe3" }}>

                        <Row>
                            <Col sm={6}>

                                <iframe width="520" height="315" src={youtubeLink} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                            </Col>
                            <Col sm={6}>
                                <span style={{ fontWeight: "bolder", fontSize: "20px", textDecoration: "underline" }}>The Synopsis:</span><br></br>
                                <span style={{ fontSize: "20px" }}>{props.movie.overview}</span><br></br>
                                <span style={{ fontWeight: "bolder", fontSize: "20px", textDecoration: "underline" }}>Release date:</span><br></br>
                                <span style={{ fontSize: "20px" }}>{props.movie.release_date}</span><br></br>
                                <span style={{ fontWeight: "bolder", fontSize: "20px", textDecoration: "underline" }}>Genres:</span><br></br>
                                <span style={{ fontSize: "20px" }}>{genres}</span><br></br>
                                <span style={{ fontWeight: "bolder", fontSize: "20px", textDecoration: "underline" }}>Run Time:</span><br></br>
                                <span style={{ fontSize: "20px" }}>{runtime} minutes</span><br></br>
                                <span style={{ fontWeight: "bolder", fontSize: "20px", textDecoration: "underline" }}>Website:</span><br></br>
                                <a href={homepage} ><span>{props.movie.title}</span></a>
                            </Col>
                        </Row>




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
                    dialogClassName="modal-xl"
                    aria-labelledby="example-custom-modal-styling-title"

                >
                    <Modal.Header closeButton style={{ backgroundImage: "linear-gradient(to right, #0c7b47, #289154, #3ea762, #54bd6f, #6ad47c)", }}>
                        <Modal.Title style={{ color: "white" }} id="example-custom-modal-styling-title">
                            {props.movie.title}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ heigt: "600px", }}>

                        <iframe src={youtubeLink} width="540" height="450" title="fx." ></iframe>
                        <h3>Overview: {props.movie.overview}</h3>

                    </Modal.Body>
                </Modal>
            </div>
        )
    }


}
