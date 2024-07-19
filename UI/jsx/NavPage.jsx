import React from "react";
import {Route, Routes} from "react-router-dom";
import EmployeeTable from "./EmployeeTable.jsx";
import EmployeeCreate from "./EmployeeCreate.jsx";
import ErrorPage from "./ErrorPage.jsx";
import EmployeeSearch from "./EmployeeSearch.jsx";
import EmployeeUpdate from "./EmployeeUpdate.jsx";
import EmployeeDelete from "./EmployeeDelete.jsx";
import EmployeeFilter from "./EmployeeFilter.jsx";
import ReloadingNavLink from "./ReloadingNavLink.jsx";

export default class NavPage extends React.Component {

    render() {
        return (
            <>
                <header>
                    <h1>Employee Management</h1>
                    <nav>
                        <ReloadingNavLink to="/"><i className="bi bi-people"></i> All Employees</ReloadingNavLink>
                        <ReloadingNavLink to="/employee/create"><i className="bi bi-person-plus"></i> Create Employee</ReloadingNavLink>
                        <ReloadingNavLink to="/employee/update"><i className="bi bi-pencil-square"></i> Update Employee</ReloadingNavLink>
                        <ReloadingNavLink to="/employee/delete"><i className="bi bi-trash"></i> Delete Employee</ReloadingNavLink>
                        <ReloadingNavLink to="/employee/search"><i className="bi bi-search"></i> Search Employee</ReloadingNavLink>
                    </nav>
                </header>

                <main id="main">
                    <Routes>
                        <Route path="/" element={<EmployeeTable/>} />
                        <Route path="/employee/create" element={<EmployeeCreate />} />
                        <Route path="/employee/update" element={<EmployeeUpdate />} />
                        <Route path="/employee/search" element={<EmployeeSearch />} />
                        <Route path="/employee/search/:id" element={<EmployeeSearch />} />
                        <Route path="/employee/delete" element={<EmployeeDelete />} />
                        <Route path="/employee/filter" element={<EmployeeFilter />} />
                        <Route path="*" element={<ErrorPage />} />
                    </Routes>
                </main>
            </>
        );
    }
}