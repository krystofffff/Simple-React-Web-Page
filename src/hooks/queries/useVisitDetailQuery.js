import {useQuery} from "react-query";
import securedAxios from "../../securedAxios/securedAxios";

export const getVisitDetailQueryKey = (id) => id ? ["visitDetail", id] : "visitDetail";

export const useVisitDetailQuery = (id) =>
    useQuery(getVisitDetailQueryKey(id), () =>
        securedAxios
            .get(`/visits/${id}`)
            .then(response => response.data)
    )