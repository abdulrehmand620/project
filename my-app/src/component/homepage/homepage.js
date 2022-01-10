import React from 'react';
import { Nav, Navbar, Container, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import Pagination from 'react-bootstrap/Pagination'






function Home({ setLoginUser }) {
    return (

        <div className="homepage">
            <Navbar bg="dark" variant="dark">
                <Container fluid>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse >
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>

                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link onClick={() => setLoginUser({})}>Logout</Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


            <br />



            {/* 
            <nav class="navbar navbar-expand-lg navbar-light  ">
        <a class="navbar-brand textfont" href="#">Logo Here</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse " id="navbarSupportedContent">

            <ul class="navbar-nav mr-auto ">
                <li class="nav-item active ml20">
                    <a class="nav-link active textfont" href="#">Inicio </a>
                </li>
                <li class="nav-item active ml20">
                    <a class="nav-link textfont" href="#">Somdreros</a>
                </li>
                <li class="nav-item active ml20">
                    <a class="nav-link textfont" href="#">Ropa</a>
                </li>
                <li class="nav-item active ml20">
                    <a class="nav-link textfont" href="#">Accesorios</a>
                </li>
                <li class="nav-item active ml20">
                    <a class="nav-link textfont" href="#">Nosotros</a>
                </li>
                <li class="nav-item active ml20">
                    <a class="nav-link textfont" href="#">Rebajas</a>
                </li>
                <li class="nav-item active ml20">
                    <a class="nav-link textfont" href="#">Ubicaciones</a>
                </li>


            </ul>
            <form class="form-inline">

                <div class="form-group has-search">
                    <span class="fa fa-search form-control-feedback"></span>
                    <input type="text" class="form-control" placeholder="Search" style="width: 350px;"/>
                </div>
            </form>
        </div>
    </nav>
 */}

            <div class="container-fluid">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./images/first.jfif"
                            alt="First slide"
                            id='id1'
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./images/second.jfif"
                            alt="Second slide"
                            id='id1'
                        />


                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./images/third.jfif"
                            alt="Third slide"
                            id='id1'
                        />


                    </Carousel.Item>
                </Carousel>

            </div>
            <br />
            <div class="container textfont2 mt-5">
                <h3><span id='id2'>PiZzA</span></h3>
            </div>
            <br />
            <br />
            <br /><br />

            <div class="container  ">
                <div class="row">
                    <div class="col">

                        <div class="co">
                            <img src="./images/p1.jfif" alt="" id='id3' />

                            <div class="overlay">
                                <span class="text">VISTA RAPIDA</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col" id='id5'>


                            </div>
                        </div>
                        <div class="row">
                            <div class="col" id='id5'>
                                <span class="t2">$ 4,200.00 MXN</span>
                            </div>
                        </div>
                    </div>

                    <div class="col">

                        <div class="co">
                            <img src="./images/p2.jfif" alt="" id='id3' />

                            <div class="overlay">
                                <span class="text">VISTA RAPIDA</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col" id='id5'>


                            </div>
                        </div>
                        <div class="row">
                            <div class="col" id='id5'>
                                <span class="t2">$ 4,200.00 MXN</span>
                            </div>
                        </div>

                    </div>
                    <div class="col">

                        <div class="co">
                            <img src="./images/p3.jfif" alt="" id='id3' />

                            <div class="overlay">
                                <span class="text">VISTA RAPIDA</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col" id='id5'>


                            </div>
                        </div>
                        <div class="row">
                            <div class="col" id='id5'>
                                <span class="t2">$ 4,200.00 MXN</span>
                            </div>
                        </div>
                    </div>
                    <div class="col">

                        <div class="co">
                            <img src="./images/p4.jfif" alt="" id='id3' />

                            <div class="overlay">
                                <span class="text">VISTA RAPIDA</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col" id='id5'>


                            </div>
                        </div>
                        <div class="row">
                            <div class="col" id='id5'>
                                <span class="t2">$ 4,200.00 MXN</span>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
            <br />
            <br />
            <br /><br />

            <div class="container textfont2  ">
                <h3><span id='id2'>Krhai</span></h3>
            </div>
            <br /><br />

            {/* <!-- second --> */}
            <div class="container mt-5">
                <div class="row">
                    <div class="col">

                        <div class="co">
                            <img src="./images/k1.jpg" alt="" id='id3' />

                            <div class="overlay">
                                <span class="text">VISTA RAPIDA</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col" id='id5'>


                            </div>
                        </div>
                        <div class="row">
                            <div class="col" id='id5'>
                                <span class="t2">$ 4,200.00 MXN</span>
                            </div>
                        </div>

                    </div>

                    <div class="col">

                        <div class="co">
                            <img src="./images/k2.jpg" alt="" id='id3' />

                            <div class="overlay">
                                <span class="text">VISTA RAPIDA</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col" id='id5'>


                            </div>
                        </div>
                        <div class="row">
                            <div class="col" id='id5'>
                                <span class="t2">$ 4,200.00 MXN</span>
                            </div>
                        </div>

                    </div>
                    <div class="col">

                        <div class="co">
                            <img src="./images/k3.jpg" alt="" id='id3' />

                            <div class="overlay">
                                <span class="text">VISTA RAPIDA</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col" id='id5'>


                            </div>
                        </div>
                        <div class="row">
                            <div class="col" id='id5'>
                                <span class="t2">$ 4,200.00 MXN</span>
                            </div>
                        </div>
                    </div>
                    <div class="col">

                        <div class="co">
                            <img src="./images/k4.jpg" alt="" id='id3' />

                            <div class="overlay">
                                <span class="text">VISTA RAPIDA</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col" id='id5'>


                            </div>
                        </div>
                        <div class="row">
                            <div class="col" id='id5'>
                                <span class="t2">$ 4,200.00 MXN</span>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <br /><br />

            <div class="container textfont2 mt-5">
                <h3><span id='id2'>Kabab</span></h3>
            </div>
            <br /><br />
            {/* <!-- Category section --> */}
            <div class="container mt-5">
                <div class="row">
                    <div class="col">
                        {/* <!-- 
                <img src="images/r31.png" alt="" style="width: 100%; height: 100%;" class="myDIV">
                <span class=" hide " style="text-align: center;">Handsfree</span> --> */}

                        <div class="co">
                            <img src="./images/b1.jfif" alt="" id='id3' />

                            <div class="overlay">
                                <span class="text">VISTA RAPIDA</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col" id='id5'>


                            </div>
                        </div>
                        <div class="row">
                            <div class="col" id='id5'>
                                <span class="t2">$ 4,200.00 MXN</span>
                            </div>
                        </div>
                    </div>

                    <div class="col">

                        <div class="co">
                            <img src="./images/b2.jpg" alt="" id='id3' />

                            <div class="overlay">
                                <span class="text">VISTA RAPIDA</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col" id='id5'>


                            </div>
                        </div>
                        <div class="row">
                            <div class="col" id='id5'>
                                <span class="t2">$ 4,200.00 MXN</span>
                            </div>
                        </div>
                    </div>
                    <div class="col">

                        <div class="co">
                            <img src="./images/b3.jfif" alt="" id='id3' />

                            <div class="overlay">
                                <span class="text">VISTA RAPIDA</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col" id='id5'>


                            </div>
                        </div>
                        <div class="row">
                            <div class="col" id='id5'>
                                <span class="t2">$ 4,200.00 MXN</span>
                            </div>
                        </div>
                    </div>
                    <div class="col">

                        <div class="co">
                            <img src="./images/b4.jpg" alt="" id='id3' />

                            <div class="overlay">
                                <span class="text">VISTA RAPIDA</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col" id='id5'>


                            </div>
                        </div>
                        <div class="row">
                            <div class="col" id='id5'>
                                <span class="t2">$ 4,200.00 MXN</span>
                            </div>
                        </div>

                    </div>


                </div>
            </div>

            <br />
            <br />
            <div id='id7'>
            <Pagination  >

                <Pagination.Ellipsis />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Item>{4}</Pagination.Item>
                <Pagination.Item>{5}</Pagination.Item>
                <Pagination.Ellipsis />



            </Pagination>
            </div>
            <br />
            <br />
            <br /><br />
            <footer id='sticky-footer' class=" mt-5 flex-shrink-0 py-4 Dark1 text-black-50">


                <div class="container">
                    <div class="row">
                        <div class="col-sm" >
                            Food Order Please
                        </div>
                        <div class="col-sm" id='id5'>
                            logo here
                        </div>
                        <div class="col-sm" id='id5'>
                            <span id='id6'>@</span>2020 Copyright:


                        </div>
                    </div>
                </div>


            </footer>










        </div>
    )

}
export default Home;