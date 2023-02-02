import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
    return(
        <Navbar collapseOnSelect className="navBg" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/"><b>Sadcom</b></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav ">
                <Nav className="nav navbar-nav me-auto" style={{ "margin-left": "63vw"}}>
                    <Nav.Link href="/solutions" style={{ "background-color": "#060531", "padding-left": "3vw"}}>Soluciones</Nav.Link>
                    <Nav.Link href="/us" style={{ "background-color": "#060531", "padding-left": "3vw"}}>Nosotros</Nav.Link>
                    <Nav.Link href="/contact" style={{ "background-color": "#060531", "padding-left": "3vw"}}>Contacto</Nav.Link>
                </Nav> 
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}