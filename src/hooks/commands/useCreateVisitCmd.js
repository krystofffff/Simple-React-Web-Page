import {useMutation} from "react-query";
import securedAxios from "../../securedAxios/securedAxios";

export const useCreateVisitCmd = () =>
    useMutation("newVisit", (values) =>
        securedAxios.post(`/visits`, values)
            .then(response => response.data)
    );