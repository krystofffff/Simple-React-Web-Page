import React from "react";
import EditVisitForm from "../forms/EditVisitForm";
import {useNavigate, useParams} from "react-router";
import {useVisitDetailQuery} from "../hooks/queries/useVisitDetailQuery";
import {useQueryClient} from "react-query";
import {useEditVisitCmd} from "../hooks/commands/useEditVisitCmd";
import {toast} from "react-toastify";
import {LinearProgress} from "@mui/material";

const EditVisitContainer = () => {
    const {visitId} = useParams();
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const {isLoading, data, isError, error} = useVisitDetailQuery(visitId);

    const {isLoading: isLoadingEdit, mutate} = useEditVisitCmd(visitId);

    const handleEdit = (values) =>
        mutate(values, {
            onSuccess: () => {
                navigate("/visits");
                queryClient.invalidateQueries("all-visits");
                toast.info("Successfully saved.");
            },
            onError: () => {
                toast.error("Failed to save!");
            }
        });

    if (isLoading)
        return <LinearProgress/>;

    if (isError) {
        console.error(error);
        return <h2>Error occurred while fetching visit detail.</h2>;
    }

    return <EditVisitForm handleEdit={handleEdit} visit={data} isLoading={isLoading || isLoadingEdit}/>
}

export default EditVisitContainer;