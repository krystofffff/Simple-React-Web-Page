import React, {useState} from "react";
import {Alert, Button, Col, Container, Form, Row} from "react-bootstrap";
import {useLoginCmd} from "../hooks/commands/useLoginCmd";
import {useNavigate} from "react-router";

const Login = () => {

    const [values, setValues] = useState({email: "", password: ""});
    const {isLoading, mutate} = useLoginCmd();
    const [error, setError] = useState("");

    const navigate = useNavigate()

    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues(prev => ({...prev, [name]: value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        mutate(values, {
            onSuccess: ({access_token}) => {
                localStorage.setItem("token", access_token);
                navigate("/visits", {replace: true});
            },
            onError: ({response}) => {
                const {message} = response?.data;
                setError(message || "Error during login occurred.");
            }
        })
    }

    return <Container>
        <Row className="d-flex justify-content-center pt-5 mt-3">
            <Col xs={12} md={6} className="p-4 rounded shadow-lg">
                <Form onSubmit={handleSubmit}>
                    <h1>VisitApp Login</h1>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" onChange={handleChange}/>
                    </Form.Group>
                    <div className="d-grid gap-2">
                        <Button variant="primary" color="primary" type="submit" disabled={isLoading}>
                            {isLoading ? "Loading..." : "Login"}
                        </Button>
                    </div>
                </Form>
            </Col>
        </Row>
    </Container>
}

export default Login;