import React, {useState} from "react";
import {Button, Col, Form, Row, Spinner} from "react-bootstrap";
import {useCreateVisitCmd} from "../hooks/commands/useCreateVisitCmd";
import {useNavigate} from "react-router";
import {useQueryClient} from "react-query";
import {toast} from "react-toastify";

const NewVisitForm = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const [values, setValues] = useState({reason: "", date: ""});

    const {isLoading, mutate} = useCreateVisitCmd();

    const handleSubmit = (e) => {
        e.preventDefault();
        mutate(values, {
            onSuccess: () => {
                navigate("/visits");
                queryClient.invalidateQueries("all-visits");
                toast.success("Successfully created.");
            },
            onError: () => {
                toast.error("Failed to create new Visit!");
            }
        })
    }

    return <>
        <Row>
            <Col xs={12}>
                <h1>New Visit</h1>
            </Col>
        </Row>
        <Row>
            <Col xs={12} md={8}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="reason">
                        <Form.Label>Reason of Visit</Form.Label>
                        <Form.Control
                            type="text"
                            value={values.reason}
                            name="reason"
                            required
                            onChange={({target}) => setValues(prevState => ({
                                ...prevState,
                                [target.name]: target.value
                            }))}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="date">
                        <Form.Label>Date</Form.Label>
                        <Form.Control
                            type="date"
                            value={values.date}
                            name="date"
                            required
                            onChange={({target}) => setValues(prevState => ({
                                ...prevState,
                                [target.name]: target.value
                            }))}/>
                    </Form.Group>
                    <Button type="submit" disabled={isLoading} variant="primary">{isLoading ?
                        <Spinner animation="border"/> : "Create"}</Button>
                </Form>
            </Col>
        </Row>
    </>
}

export default NewVisitForm;