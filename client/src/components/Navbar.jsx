import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
    return(
        <Navbar className="navBg"  variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/"><b>Sadcom</b></Navbar.Brand>
                <Nav className="nav navbar-nav">
                    <Nav.Link href="/solutions">Soluciones</Nav.Link>
                    <Nav.Link href="/us">Nosotros</Nav.Link>
                    <Nav.Link href="/contact">Contacto</Nav.Link>
                </Nav> 
            </Container>
        </Navbar>
    )
}