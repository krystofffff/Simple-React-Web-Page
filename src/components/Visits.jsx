import {Button, Col, Row, Spinner, Tab, Tabs} from "react-bootstrap";
import {useAllVisitsQuery} from "../hooks/queries/useAllVisitsQuery";
import {useRemoveVisitCmd} from "../hooks/commands/useRemoveVisitCmd";
import {useQueryClient} from "react-query";
import {toast} from "react-toastify";
import {useState} from "react";
import VisitsTable from "./VisitsTable";
import {useNavigate} from "react-router";
import {LinearProgress} from "@mui/material";

const Visits = () => {

    const [key, setKey] = useState('cards');
    const queryClient = useQueryClient();
    const {isLoading, data, isError, error} = useAllVisitsQuery();
    const {isLoading: isLoadingRemove, mutate} = useRemoveVisitCmd();

    const navigate = useNavigate();

    const handleRemove = (id) => mutate(id, {
        onSuccess: () => {
            queryClient.invalidateQueries("all-visits");
            toast.info("Successfully removed.", {
                isLoading: isLoadingRemove
            });
        },
        onError: () => {
            toast.error("Failed to remove Visit!");
        }
    })

    const handleEdit = (id) => navigate(`/visits/${id}/edit`);

    const renderVisits = (list) => {
        if (!list || !list.length)
            return <h2>Found none visit</h2>;
        else
            return list.map(visit =>
                <Col key={visit.id} xs={12} className="shadow-sm my-3 rounded p-4 border">
                    <h5>{visit.reason}</h5>
                    <i>{visit.date}</i>
                    <Row className="m-0 p-0 mt-2">
                        <Col xs="auto" className="px-1 ps-0">
                            <Button variant="info" onClick={() => handleEdit(visit.id)}>Edit</Button>
                        </Col>
                        <Col xs="auto" className="px-1">
                            <Button variant="outline-danger" onClick={() => handleRemove(visit.id)}>Remove</Button>
                        </Col>
                    </Row>
                </Col>
            );
    }

    if (isLoading)
        return <LinearProgress/>;

    if (isError) {
        console.error(error);
        return <h1>Error of loading all visits.</h1>
    }

    return <Row>
        <Col xs={12}>
            <h1 className="my-4">Visits</h1>
        </Col>
        <Col xs={12}>
            <Tabs id="user-detail-controlled-tabs"
                  activeKey={key}
                  onSelect={(k) => setKey(k)}
                  className="mb-3"
                  variant="pills"
            >
                <Tab eventKey="cards" title="Card View">
                    {renderVisits(data)}
                </Tab>
                <Tab eventKey="table" title="Table View">
                    <VisitsTable visits={data} handleRemove={handleRemove}
                                 handleEdit={handleEdit}/>
                </Tab>
            </Tabs>
        </Col>
    </Row>;
}

export default Visits;