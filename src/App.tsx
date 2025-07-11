import * as React from "react";
import {Suspense, useEffect, useReducer} from "react";
import {Navigate, Route, Routes} from "react-router";
import {BrowserRouter} from "react-router-dom";
import Loader from "./shared/components/loader/loader.tsx";
import Header from "./shared/components/header/header.tsx";
import {Person} from "./shared/interfaces/person.interface.ts";
import {TableProps} from "@thomasbfrd/table";
import {EMPLOYEES_LIST} from "./shared/constants/employees-list.constant.ts";

const employeeReducer = (state: TableProps<Person>, action: any) => {
    switch (action.type) {
        case "ADD_EMPLOYEE":
            return {
                ...state,
                data: [...state.data, action.payload]
            };
        default:
            return state;
    }
}

const AddEmployee = React.lazy(() => import('./pages/add-employee/add-employee.tsx'));
const EmployeeList = React.lazy(() => import("./pages/employee-list/employee-list.tsx"));

const App = () => {

    const [employeesData, dispatch] = useReducer(employeeReducer, EMPLOYEES_LIST);

    useEffect(() => {
        console.log(employeesData)

        return () => {};
    }, [employeesData]);

    function addEmployee(employee: Person) {
        dispatch({
            type: "ADD_EMPLOYEE",
            payload: employee
        });
    }

    function getNewEmployee(employee: Person) {
        console.log(employee)
        addEmployee(employee);
    }

    return (
        <>
            <Header/>
            <BrowserRouter>
                <Suspense fallback={<Loader/>}>
                    <Routes>
                        <Route path="" element={<Navigate to="/employee-list" replace={true}/>}/>
                        <Route path="/employee-list" element={<EmployeeList employees={employeesData}/>}></Route>
                        <Route path="/add-employee" element={<AddEmployee newEmployeeData={getNewEmployee}/>}></Route>
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </>
    );
};

export default App;