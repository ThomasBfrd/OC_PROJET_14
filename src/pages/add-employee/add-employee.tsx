import "./add-employee.scss";
import {Dropdown} from "@thomasbfrd/dropdown";
import "@thomasbfrd/dropdown/dist/dropdown.css";
import {COUNTRIES} from "../../shared/constants/countries.constant.ts";
import {ChangeEvent, FormEvent, RefObject, useEffect, useRef, useState} from "react";
// import Modal from "@thomasbfrd/modal/src/components/modal/modal.tsx";
// import "@thomasbfrd/modal/src/components/modal/modal.scss";
import {Modal} from "@thomasbfrd/modal";
import "@thomasbfrd/modal/dist/modal.css";
import {DEPARTMENTS} from "../../shared/constants/departments.constant.ts";
import {useNavigate} from "react-router-dom";
// import Calendar from "@thomasbfrd/calendar/src/components/component/calendar/calendar";
// import "@thomasbfrd/calendar/src/components/component/calendar/calendar.scss";
import {Calendar} from "@thomasbfrd/calendar";
import "@thomasbfrd/calendar/dist/calendar.css";
import {Person} from "../../shared/interfaces/person.interface.ts";
import {Departments} from "../../shared/types/departments.type.ts";

const countries = COUNTRIES.map((country: { name: string, code: string }) => {
    return {
        value: country.code,
        label: country.name
    }
})

type AddEmployeeProps = {
    newEmployeeData: (employee: Person) => void;
};


const AddEmployee = ({newEmployeeData}: AddEmployeeProps
) => {

    const [validated, setValidated] = useState<boolean>(false);

    const [dateOfBirthOpened, setDateOfBirthOpened] = useState<boolean>(false);

    const [startDateOpened, setStartDateOpened] = useState<boolean>(false);

    const [departmentSelected, setDepartmentSelected] = useState<Departments>('null');

    const [newEmployee, setNewEmployee] = useState<Person>();

    const [stateSelected, setStateSelected] = useState<string>('');

    const [birthDateChange, setBirthDateChange] = useState<string>('');

    const [startDateChange, setStartDateChange] = useState<string>('');

    const [disabled, setDisabled] = useState<boolean>(true);

    const birthDateCalendarRef: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);

    const startDateCalendarRef: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);

    const navigate = useNavigate();

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dateOfBirthOpened && birthDateCalendarRef.current && !birthDateCalendarRef.current.contains(event.target as Node)) {
                setDateOfBirthOpened(false);
            }

            if (startDateOpened && startDateCalendarRef.current && !startDateCalendarRef.current.contains(event.target as Node)) {
                setStartDateOpened(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [birthDateCalendarRef, dateOfBirthOpened, startDateCalendarRef, startDateOpened]);

    function onDepartmentSelected(value: Departments) {
        setDepartmentSelected(value);
    }

    function onStateSelected(value: string) {
        setStateSelected(value);
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        const employee: Person = {
            firstName: (formData.get('firstName') as string).trim(),
            lastName: (formData.get('lastName') as string).trim(),
            startDate: (formData.get('startDate') as string).trim(),
            department: departmentSelected,
            dateOfBirth: (formData.get('dateOfBirth') as string).trim(),
            street: (formData.get('street') as string).trim(),
            city: (formData.get('city') as string).trim(),
            state: stateSelected,
            zip: (formData.get('zip') as string).trim(),
        }

        setValidated(true);
        setNewEmployee(employee);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const {name, value} = event.target;
        setFormValues(prevState => {
            const newValue = { ...prevState, [name]: value};
            const error = validateField(name, value);
            setFormErrors(errors => ({ ...errors, [name]: error}));
            return newValue;
        })
    }

    function validateField(name: string, value: string): string {
        switch (name) {
            case "firstName":
                if (!value) {
                    return "First name is required.";
                } else if (value.length < 2) {
                    return "First name must be at least 2 characters.";
                }
                break;
            case "lastName":
                if (!value) {
                    return "Last name is required.";
                } else if (value.length < 2) {
                    return "Last name must be at least 2 characters.";
                }
                break;
            case "startDate":
                if (!value) {
                    return "Start date is required.";
                }
                break;
            case "dateOfBirth":
                if (!value) {
                    return "Date of birth is required.";
                }
                break;
            case "department":
                if (!value) {
                    return "Department is required.";
                }
                break;
            case "state":
                if (!value) {
                    return "State is required.";
                }
                break;
            case "street":
                if (!value) {
                    return "Street is required.";
                }
                break;
            case "city":
                if (!value) {
                    return "City is required.";
                }
                break;
            case "zip":
                if (!value) {
                    return "Zip code is required.";
                }
                break;
            default:
                return "";
        }
        return "";
    }

    function redirectToList() {
        if (newEmployee) {
            console.log(newEmployee);
            newEmployeeData(newEmployee);
        }

        return navigate('/employee-list');
    }

    function onBirthDateDateChange(date: string) {
        console.log(date);
        setBirthDateChange(new Date(date).toLocaleDateString());
        setDateOfBirthOpened(false);
    }

    function onStartDateDateChange(date: string) {
        console.log(date);
        setStartDateChange(new Date(date).toLocaleDateString());
        setStartDateOpened(false);
    }

    function toggleDateOfBirth() {
        setDateOfBirthOpened(!dateOfBirthOpened);
    }

    function toggleStartDate() {
        setStartDateOpened(!startDateOpened);
    }

    return (
        <>
            <div className="add-container">
                <div className="add-content">
                    <h2 className="add-title">Create Employee</h2>
                    <form className="add-form" onSubmit={handleSubmit}>
                        <div className="add-form-input">
                            <label htmlFor="first-name">First Name</label>
                            <input type="text" id="first-name" name="firstName" placeholder="First Name" onChange={handleInputChange}/>
                            {formErrors.firstName ? (
                                <span className="error-message">{formErrors.firstName}</span>
                            ) : null}
                        </div>

                        <div className="add-form-input">
                            <label htmlFor="last-name">Last Name</label>
                            <input type="text" id="last-name" name="lastName" placeholder="Last Name" onChange={handleInputChange}/>
                            {formErrors.lastName ? (
                                <span className="error-message">{formErrors.lastName}</span>
                            ) : null}
                        </div>

                        <div className="add-form-input" ref={birthDateCalendarRef}>
                            <label htmlFor="date-of-birth">Date of Birth</label>
                            <input onClick={toggleDateOfBirth} value={birthDateChange} type="text" id="date-of-birth"
                                   name="dateOfBirth" placeholder="Date of Birth" onChange={handleInputChange}/>
                            {formErrors.dateOfBirth ? (
                                <span className="error-message">{formErrors.dateOfBirth}</span>
                            ) : null}
                            {dateOfBirthOpened ? (
                                <Calendar
                                    backgroundColor="#ffffff"
                                    primaryColor="#ef8354"
                                    secondaryColor="#2d3142"
                                    tertiaryColor="#ffffff"
                                    activeColor="#ef8354"
                                    textPrimaryColor="#ffffff"
                                    textSecondaryColor="#2d3142"
                                    hoverColor="#bfc0c0"
                                    onDateChange={onBirthDateDateChange}
                                    onCancelCalendar={() => setDateOfBirthOpened(false)}
                                />
                            ) : null}
                        </div>

                        <div className="add-form-input" ref={startDateCalendarRef}>
                            <label htmlFor="start-date">Start Date</label>
                            <input onClick={toggleStartDate} value={startDateChange} type="text" id="start-date"
                                   name="startDate" placeholder="Start Date" onChange={handleInputChange}/>
                            {formErrors.startDate ? (
                                <span className="error-message">{formErrors.startDate}</span>
                            ) : null}
                            {startDateOpened ? (
                                <Calendar
                                    backgroundColor="#ffffff"
                                    primaryColor="#ef8354"
                                    secondaryColor="#2d3142"
                                    tertiaryColor="#ffffff"
                                    activeColor="#ef8354"
                                    textPrimaryColor="#ffffff"
                                    textSecondaryColor="#2d3142"
                                    hoverColor="#bfc0c0"
                                    onDateChange={onStartDateDateChange}
                                    onCancelCalendar={() => setStartDateOpened(false)}
                                />
                            ) : null}
                        </div>

                        <div className="add-form-input">
                            <label htmlFor="street">Street</label>
                            <input id="street" type="text" name="street" onChange={handleInputChange} placeholder="Street"/>
                            {formErrors.street ? (
                                <span className="error-message">{formErrors.street}</span>
                            ) : null}
                        </div>

                        <div className="add-form-input">
                            <label htmlFor="city">City</label>
                            <input id="city" type="text" name="city" placeholder="City" onChange={handleInputChange}/>
                            {formErrors.city ? (
                                <span className="error-message">{formErrors.city}</span>
                            ) : null}
                        </div>

                        <div className="add-form-input">
                            <label htmlFor="state">State</label>
                            <input name={stateSelected} type="hidden" onChange={handleInputChange}/>
                            <Dropdown
                                height={30}
                                width={180}
                                paddingY={5}
                                paddingX={5}
                                placeholder="Select a state"
                                options={countries}
                                onDropdownItemSelected={onStateSelected}
                                primaryColor="#fff"
                                secondaryColor="#000"
                                backgroundPrimaryColor="#000"
                                backgroundSecondaryColor="#fff"
                                itemHoverColor="#000"
                                hoverColor="#fff"
                            />
                            {formErrors.state ? (
                                <span className="error-message">{formErrors.state}</span>
                            ) : null}
                        </div>

                        <div className="add-form-input">
                            <label htmlFor="zip-code">Zip Code</label>
                            <input id="zip-code" type="number" name="zip" placeholder="Zip Code" onChange={handleInputChange}/>
                            {formErrors.zip ? (
                                <span className="error-message">{formErrors.zip}</span>
                            ) : null}
                        </div>

                        <div className="add-form-input">
                            <label htmlFor="department">Department</label>
                            <input name={departmentSelected} type="hidden" onChange={handleInputChange}/>
                            <Dropdown
                                height={150}
                                width={180}
                                paddingY={5}
                                paddingX={10}
                                placeholder="Select a department"
                                options={DEPARTMENTS}
                                onDropdownItemSelected={onDepartmentSelected}
                                primaryColor="#fff"
                                secondaryColor="#000"
                                backgroundPrimaryColor="#000"
                                backgroundSecondaryColor="#fff"
                                itemHoverColor="#000"
                                hoverColor="#fff"
                            />
                            {formErrors.department ? (
                                <span className="error-message">{formErrors.department}</span>
                            ) : null}
                        </div>
                        <button type="submit" className={disabled ? "add-submit-button disabled" : "add-submit-button"}
                                disabled={disabled}>Save
                        </button>
                    </form>

                </div>
            </div>
            {validated ? (
                <Modal type="success" title="Success" body="Employee Created!" okButton="Close" onOk={redirectToList}/>
            ) : null}
        </>
    );
};

export default AddEmployee;