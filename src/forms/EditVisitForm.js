import React, {useState} from "react";
import {Button, Col, Form, Row, Spinner} from "react-bootstrap";

const EditVisitForm = ({visit, isLoading, handleEdit}) => {

    const [values, setValues] = useState({...visit});

    const onSubmit = (e) => {
        e.preventDefault();
        handleEdit(values);
    }

    return <>
        <Row>
            <Col xs={12}>
                <h1>Edit Visit</h1>
            </Col>
        </Row>
        <Row>
            <Col xs={12} md={8}>
                <Form onSubmit={onSubmit}>
                    <Form.Group className="mb-3" controlId="reason">
                        <Form.Label>Reason of Visit</Form.Label>
                        <Form.Control
                            type="text"
                            value={values.reason}
                            name="reason"
                            required
                            disabled={isLoading}
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
                            disabled={isLoading}
                            onChange={({target}) => setValues(prevState => ({
                                ...prevState,
                                [target.name]: target.value
                            }))}/>
                    </Form.Group>
                    <Button type="submit" disabled={isLoading} variant="primary">{isLoading ?
                        <Spinner animation="border"/> : "Save"}</Button>
                </Form>
            </Col>
        </Row>
    </>
}

export default EditVisitForm;