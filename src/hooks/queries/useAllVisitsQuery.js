import {useQuery} from "react-query";
import securedAxios from "../../securedAxios/securedAxios";

export const useAllVisitsQuery = () =>
    useQuery("all-visits", () =>
        securedAxios.get("/visits") // GET>   localhost:8000/visits  ===> header[Authorization] = "Bearer asdfsakdf....."
            .then(response => response.data)
    )