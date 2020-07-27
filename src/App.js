import React, { useEffect, useState } from 'react';
import './App.css';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, } from 'react-bootstrap'
import { Jumbotron, Button, InputGroup, FormControl, ButtonGroup } from 'react-bootstrap'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'


//individual

import NowPlaying from './components/NowPlaying'
import Popular from './components/Popular'
import Trending from './components/Trending'
import ShowResults from './components/ShowResults'
import PopularityList from './components/PopularityList';



function App() {
  let [nowList, setMovieList] = useState(null)
  let [popularList, setPopularList] = useState(null)
  let [trendingList, setTrendingList] = useState(null)
  let [searchByKey, setSearchByKey] = useState([])
  let [hide, setHide] = useState(true)
  let [callPopu,setCallPopu]=useState(null)
  // let [popularityList,setPopularityList]=useState(null)
  


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
  const callTrending = async () => {
    let url = `https://api.themoviedb.org/3/trending/movie/day?api_key=0fe0cfcc2a26aafa851117e003638b00`
    console.log(url)
    let result = await fetch(url)
    let data = await result.json()
    console.log("data", data)
    setTrendingList(data.results)
  }

  

  /////them chuc nang search key words
  const Search = () => {
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

// list by popularity
const callPopuMovieDesc = async () => {
  let url = `https://api.themoviedb.org/3/discover/movie?api_key=0fe0cfcc2a26aafa851117e003638b00&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
  console.log(url)
  let result = await fetch(url)
  let data = await result.json()
  console.log("data", data)
  setCallPopu(data.results)
  setHide(true)
}



// const searchByPopularity =(direction) => {
// let sortedList;
// if (direction === "asc") {
//   sortedList = callPopu.sort((a,b)=> a.popularity -b.popularity)
// }else{
//   sortedList=callPopu.sort((a,b)=>b.popularity - a.popularity)
// }
// console.log ("sort",sortedList)
// setPopularityList([...sortedList])

// }


  useEffect(() => {
    callMovieNowPlaying()
    callPopularMovie()
    callTrending()
    callPopuMovieDesc()
   
  }, [])

  if (nowList == null || popularList == null || trendingList == null ||callPopu==null ) {
    return (
      <h2> Loading...</h2>
    )
  }


  return (
    <div className="page-style">
      <Container>


        <Navbar collapseOnSelect expand="lg" style={{ width: "100%", position: "absolute", backgroundColor: "#00C2A8", }}>
          <Navbar.Brand href="#home" style={{ fontSize: "30px", color: "white", paddingLeft: "25px", }}>film.info</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <ButtonGroup className="mr-2" aria-label="First group">
                <Button variant="info" ><Nav.Link href="#movies" style={{ color: "white", }}>Movies</Nav.Link></Button>{' '}
                <Button variant="info" ><Nav.Link href="#tvshow" style={{ color: "white", }}>Top Rated</Nav.Link></Button>{' '}
                <Button variant="info" >
                  <NavDropdown title="Sort By" id="collasible-nav-dropdown" >
                    <NavDropdown.Item href="#action/3.1">Rate h-l</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Rate l-h</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3" onClick={()=>setHide(false)} >Popularity h-l</NavDropdown.Item>
                    {/* <NavDropdown.Item href="#action/3.4" onClick={()=> searchByPopularity("asc")} >Popularity l-h</NavDropdown.Item> */}
                  </NavDropdown>
                </Button>{' '}

              </ButtonGroup>
            </Nav>
            <Nav style={{ paddingRight: "173px", }}>
              <ButtonGroup >
                <Button variant="info"><Nav.Link href="#deets" style={{ color: "white", }}>Login</Nav.Link></Button>{' '}
                <Button variant="info"><Nav.Link href="#pricing" style={{ color: "white", }}>About Us</Nav.Link></Button>{' '}
              </ButtonGroup>

            </Nav>

          </Navbar.Collapse>
        </Navbar>


        <div hidden={!hide} >
          <Row style={{ width: "100%" }}>
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

          <Row style={{ width: "100%", marginBottom: "20px", marginTop:"20px" }}>

            <Button variant="outline-info" style={{ color: "white", fontSize: "20px", fontWeight: "bolder", border: "1px solid white",marginBottom:"10px", }}>Now Playing</Button>
          </Row>

          <Row style={{ width: "100%", }}>
            <NowPlaying nowPlaying={nowList} />
          </Row>
          <Row style={{ width: "100%", marginBottom: "10px" }}>

            <Button variant="outline-info" style={{ color: "white", fontSize: "20px", fontWeight: "bolder", border: "1px solid white", marginBottom:"20px" }}>Popular</Button>
          </Row>

          <Row style={{ width: "100%" }}>
            <Popular popular={popularList} />
          </Row>
          <Row style={{ width: "100%", marginBottom: "10px" }}>
            <Button variant="outline-info" style={{ color: "white", fontSize: "20px", fontWeight: "bolder", border: "1px solid white", marginBottom:"20px", }}>Today's Trending </Button>

          </Row>
          <Row style={{ width: "100%" }}>
            <Trending trending={trendingList} />
          </Row>

        </div>
        <Row style={{ width: "100%", marginBottom: "10px" }} >
          {/* <h3 className="title-style" hidden={hide}>Search results</h3> */}
          <Button variant="outline-info" hidden={hide} style={{ color: "white", fontSize: "20px", fontWeight: "bolder", border: "1px solid white", marginBottom:"20px" }}>Search results</Button>
        </Row>
        <Row style={{ width: "100%" }}>
          <ShowResults resultKeyWord={searchByKey} />
        </Row>


        <Row hidden={hide}>
        <PopularityList  popularity={callPopu}/>
        </Row>
        

      </Container>



    </div>
  );
}

export default App;
