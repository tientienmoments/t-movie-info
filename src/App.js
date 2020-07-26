import React, { useEffect, useState } from 'react';
import './App.css';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, } from 'react-bootstrap'
import { Jumbotron, Button, InputGroup, FormControl, ButtonGroup } from 'react-bootstrap'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
//MDB
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';
// import { MDBBtn } from "mdbreact"; 

//individual
import NowPlaying from './components/NowPlaying'
import Popular from './components/Popular'

import ShowResults from './components/ShowResults'
import LastTrailer from './components/LastTrailer'


function App() {
  let [nowList, setMovieList] = useState(null)
  let [popularList, setPopularList] = useState(null)
  let [searchByKey, setSearchByKey] = useState([])
  let [hide, setHide] = useState(true)
  let [lastTrailer,setLastTrailer]=useState(null)


  const callMovieNowPlaying = async () => {
    let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=0fe0cfcc2a26aafa851117e003638b00&language=en-US&page=1`
    console.log(url)
    let result = await fetch(url)
    let data = await result.json()
    console.log("data", data)

    setMovieList(data.results)
    
  }
  const callPopularMovie = async () => {
    let url = `https://api.themoviedb.org/3/movie/popular?api_key=0fe0cfcc2a26aafa851117e003638b00&language=en-US&page=1`
    console.log(url)
    let result = await fetch(url)
    let data = await result.json()
    console.log("data", data)

    setPopularList(data.results)

  }
  const callLastedTrailer = async () => {
    let url = `https://api.themoviedb.org/3/movie/157336?api_key=0fe0cfcc2a26aafa851117e003638b00&append_to_response=videos`
    console.log(url)
    let result = await fetch(url)
    let data = await result.json()
    console.log("data", data)

    setLastTrailer(data.results)

  }

  ///////them chuc nang search key words
  const Search = (whichMovie) => {
    if (document.getElementById("input").value === '') {
      alert("You need to enter Movie name")
    } else {
      console.log(document.getElementById("input").value);
      let searchMovie = document.getElementById("input").value;
      callKeyWord(searchMovie)
      setHide(false)

    }

  }


  const callKeyWord = async (whichMovie) => {
    //value = kewords
    console.log('callKeyWord.whichMovie:', whichMovie)
    let url = `https://api.themoviedb.org/3/search/movie?api_key=0fe0cfcc2a26aafa851117e003638b00&language=en-US&page=1&include_adult=false&query=${whichMovie}`
    console.log(url)
    let result = await fetch(url)
    let data = await result.json()
    console.log("data", data)

    setSearchByKey(data.results)
  }

  useEffect(() => {
    callMovieNowPlaying()
    callPopularMovie()
    callLastedTrailer()
  }, [])

  if (nowList == null || popularList == null) {
    return (
      <h2> Loading...</h2>
    )
  }


  return (
    <div className="page-style">
      <Container>


        <Navbar collapseOnSelect expand="lg" style={{ border: "1px solid red", width: "100%", position: "absolute", backgroundColor: "#00C2A8", }}>
          <Navbar.Brand href="#home" style={{fontSize:"30px",color:"white",paddingLeft:"30px",}}>film.info</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <ButtonGroup className="mr-2" aria-label="First group">
                <Button variant="info" ><Nav.Link href="#movies" style={{color:"white",}}>Movies</Nav.Link></Button>{' '}
                <Button variant="info" ><Nav.Link href="#tvshow" style={{color:"white",}}>Tv Shows</Nav.Link></Button>{' '}
                <Button variant="info" >
                  <NavDropdown title="More" id="collasible-nav-dropdown" >
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>
                </Button>{' '}

              </ButtonGroup>
            </Nav>
            <Nav style={{paddingRight:"150px",}}>
              <ButtonGroup >
                <Button variant="info"><Nav.Link href="#deets" style={{color:"white",}}>Login</Nav.Link></Button>{' '}
                <Button variant="info"><Nav.Link href="#pricing" style={{color:"white",}}>About Us</Nav.Link></Button>{' '}
              </ButtonGroup>

            </Nav>

          </Navbar.Collapse>
        </Navbar>



        <Row style={{ border: "1px solid red", width: "100%" }}>
          <Jumbotron >
            <h1 style={{ fontSize: '30px', paddingTop: "50px", }}>Welcome.</h1>
            <p style={{ fontSize: '20px', }}>
              Millions of movies, TV shows and people to discover. Explore now.
            </p>
            <p>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="movies"

                  type="text" name="name" id="input"
                />
                <InputGroup.Append className='search-style'>
                  <Button variant="info" onClick={Search}>Search</Button>


                </InputGroup.Append>
              </InputGroup>
            </p>
          </Jumbotron>
        </Row>

        <Row style={{ border: "1px solid red", width: "100%" }}>
          <h3 className="title-style">Now Playing</h3>
        </Row>

        <Row style={{ border: "1px solid red", width: "100%" }}>
          <NowPlaying nowPlaying={nowList} />
        </Row>
        <Row style={{ border: "1px solid red", width: "100%" }}>
          <h3 className="title-style">Popular</h3>
        </Row>

        <Row style={{ border: "1px solid red", width: "100%" }}>
          <Popular popular={popularList} />
        </Row>
        <Row style={{ border: "1px solid red", width: "100%" }} >
          <h3 className="title-style" hidden={hide}>Search results</h3>
        </Row>
        <Row style={{ border: "1px solid red", width: "100%" }}>
          <ShowResults resultKeyWord={searchByKey} />
        </Row>

        <Row style={{ border: "1px solid red", width: "100%" }}>

        <LastTrailer callTrailer={lastTrailer}/>
        </Row>

      </Container>



    </div>
  );
}

export default App;
