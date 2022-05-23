import {useMutation} from "react-query";
import securedAxios from "../../securedAxios/securedAxios";

export const useRemoveVisitCmd = () =>
    useMutation("removeVisit", (id) =>
        securedAxios.delete(`/visits/${id}`)
            .then(response => response.data)
    );