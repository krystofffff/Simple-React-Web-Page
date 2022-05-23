import Navbar from "./Navbar";
import {Container} from "react-bootstrap";
import {useGetTokenFromLS} from "../../hooks/useGetTokenFromLS";
import {Navigate} from "react-router";

const NavbarLayout = ({children}) => {

    const token = useGetTokenFromLS();

    if (!token) return <Navigate to="/login" state={{replace: true}}/>;

    return <>
        <Navbar/>
        <Container className="pt-2">
            {children}
        </Container>
    </>
}

export default NavbarLayout;