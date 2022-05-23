import React from "react";
import {QueryClient, QueryClientProvider} from "react-query";
import Routes from "./components/Routes";
import {BrowserRouter} from "react-router-dom";
import {ReactQueryDevtools} from "react-query/devtools";
import {ToastContainer} from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';

const App = () =>
    <QueryClientProvider client={new QueryClient()}>
        <BrowserRouter>
            <Routes/>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar
                theme="colored"
                newestOnTop={false}
                closeOnClick
                pauseOnFocusLoss
                pauseOnHover/>
            <ReactQueryDevtools initialIsOpen={false}/>
        </BrowserRouter>
    </QueryClientProvider>


export default App;
