import {Navbar as BNavbar, Container, Nav, Button} from "react-bootstrap";

const Navbar = () =>
    <BNavbar bg="dark" variant="dark">
        <Container className="px-0">
            <BNavbar.Brand href="/visits">VisitApp</BNavbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/visits">Visits</Nav.Link>
                <Nav.Link href="/visits/new">New Visit</Nav.Link>
            </Nav>
            <Nav className="justify-content-end">
                <Button as={Nav.Link}
                        href="/login"
                        variant="outline-secondary"
                        onClick={() => localStorage.removeItem("token")}
                >Logout</Button>
            </Nav>
        </Container>
    </BNavbar>

export default Navbar;