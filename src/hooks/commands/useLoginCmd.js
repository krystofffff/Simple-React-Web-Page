import {useMutation} from "react-query";
import axios from "axios";

export const useLoginCmd = () =>
    useMutation((loginData) =>
        axios
        .post(`${process.env.REACT_APP_BASE_URL}/auth/login`, loginData) // GET>   localhost:8000/auth/login
        .then(response => response.data)
    );
