import Dashboard from "./pages/Dashboard";
import DashboardTable from "./pages/DashboardTable";
import DashboardForm from "./pages/DashboardForm";
import DashboardUielement from "./pages/DashboardUielement";

import {
    createBrowserRouter,
    Route,
    createRoutesFromElements,
} from "react-router-dom";


export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Dashboard />} >
            <Route path="/uielement" element={<DashboardUielement />} />
            <Route path="/form" element={<DashboardForm />} />
            <Route path="/table" element={<DashboardTable />} />
        </Route>
    )
);