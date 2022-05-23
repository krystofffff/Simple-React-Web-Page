import React from "react";
import {Routes as RouterRoutes, Route, Navigate} from "react-router-dom";
import Login from "./Login";
import Visits from "./Visits";
import NewVisitForm from "../forms/NewVisitForm";
import NavbarLayout from "./Layout/NavbarLayout";
import EditVisitContainer from "./EditVisitContainer";

const Routes = () => (
    <RouterRoutes>
        <Route exact path="/login" element={<Login/>}/>
        <Route path="/visits">
            <Route index element={<NavbarLayout><Visits/></NavbarLayout>}/>
            <Route path="new" element={<NavbarLayout><NewVisitForm/></NavbarLayout>}/>
            <Route path=":visitId/edit" element={<NavbarLayout><EditVisitContainer/></NavbarLayout>}/>
        </Route>
        <Route path="*" element={<Navigate to={"/login"}/>}/>
    </RouterRoutes>
)

export default Routes;