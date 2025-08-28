import "./employee-list.scss";
import {Link} from "react-router-dom";
import "@thomasbfrd/table/dist/table.css";
import {Table, TableProps} from "@thomasbfrd/table";
import {Person} from "../../shared/interfaces/person.interface.ts";
import {useEffect} from "react";

interface EmployeeListProps {
    employees: TableProps<Person>;
}

const EmployeeList = (employeesData: EmployeeListProps) => {

    useEffect(() => {

        return () => {};
    }, [employeesData]);

    return (
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            <Link to="/add-employee">
                <button className="add-employee-button">
                    Add employee
                </button>
            </Link>

            {employeesData.employees.data && employeesData.employees.headers ? (
            <Table data={employeesData.employees.data}
                   headers={employeesData.employees.headers}
                   backgroundHeaderFooterColor="#000"
                   backgroundBodyTable="#ffffff"
                   activeColor="#000"
                   textPrimaryColor="#ffffff"
                   textSecondaryColor="#2d3142"
                   hoverColor="#EAEFEF"
            />
            ) : null}
        </div>
    );
};

export default EmployeeList;