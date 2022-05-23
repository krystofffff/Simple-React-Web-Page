import {useMutation} from "react-query";
import securedAxios from "../../securedAxios/securedAxios";

export const useEditVisitCmd = (id) =>
    useMutation("editVisit", (values) =>
        securedAxios.put(`/visits/${id}`, values)
            .then(response => response.data)
    );