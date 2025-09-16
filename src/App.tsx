import * as React from "react";
import {Suspense, useEffect, useReducer} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import Loader from "./shared/components/loader/loader.tsx";
import Header from "./shared/components/header/header.tsx";
import {Person} from "./shared/interfaces/person.interface.ts";
import "./App.css";
import {useFetch} from "./shared/hooks/useFetch.hook.tsx";

type EmployeeAction = {
    type: 'ADD_EMPLOYEE' | 'SET_EMPLOYEES';
    payload: Array<Person> | Person;

}

const employeeReducer = (state: Array<Person>, action: EmployeeAction) => {
    switch (action.type) {
        case "ADD_EMPLOYEE":
            return [...state, action.payload as Person];
        case "SET_EMPLOYEES":
            return [...(action.payload as Array<Person>)];
        default:
            return state;
    }
}

const AddEmployee = React.lazy(() => import('./pages/add-employee/add-employee.tsx'));
const EmployeeList = React.lazy(() => import("./pages/employee-list/employee-list.tsx"));

const App = () => {

    const fetchedEmployees: Array<Person> = useFetch('http://localhost:3000/employees');
    const [employeesData, dispatch] = useReducer(employeeReducer, []);

    useEffect(() => {
        if (fetchedEmployees.length > 0) {
            dispatch({
                type: "SET_EMPLOYEES",
                payload: fetchedEmployees
            });
        }
    }, [fetchedEmployees]);


    function addEmployee(employee: Person) {
        dispatch({
            type: "ADD_EMPLOYEE",
            payload: employee
        });
    }

    function getNewEmployee(employee: Person) {
        addEmployee(employee);
    }

    return (
        <>
            <Header/>
            <Suspense fallback={<Loader/>}>
                <Routes>
                    <Route path="*" element={<Navigate to="/employee-list" replace={true}/>}/>
                    <Route path="/employee-list" element={<EmployeeList employees={employeesData}/>}></Route>
                    <Route path="/add-employee"
                           element={<AddEmployee newEmployeeData={getNewEmployee}/>}></Route>
                </Routes>
            </Suspense>
        </>
    );
};

export default App;