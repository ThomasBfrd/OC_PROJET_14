import "./employee-list.scss";
import {Link} from "react-router-dom";
import "@thomasbfrd/table/dist/table.css";
import {Table} from "@thomasbfrd/table";
import {Person} from "../../shared/interfaces/person.interface.ts";
import {HEADERS} from "../../shared/constants/headers.constant.ts";
import {DepartmentLabels} from "../../shared/constants/departments.constant.ts";

interface EmployeeListProps {
    employees: Array<Person>;
}

const EmployeeList = (employeesData: EmployeeListProps) => {

    const filteredEmployees: Array<Person> = employeesData.employees.map(({id, ...person}) => person);

    const filter: Array<Person> = filteredEmployees.map((person: Person) => (
        {
            firstName: person.firstName,
            lastName: person.lastName,
            startDate: person.startDate,
            department: DepartmentLabels[person.department as keyof typeof DepartmentLabels],
            dateOfBirth: person.dateOfBirth,
            street: person.street,
            city: person.city,
            state: person.state,
            zip: person.zip,
        }
    ))

    return (
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            <Link to="/add-employee">
                <button className="add-employee-button">
                    Add employee
                </button>
            </Link>

            {filter && HEADERS ? (
            <Table data={filter}
                   headers={HEADERS}
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