import "./add-employee.scss";
import {Dropdown} from "@thomasbfrd/dropdown";
import "@thomasbfrd/dropdown/dist/dropdown.css";
import {COUNTRIES} from "../../shared/constants/countries.constant.ts";
import {RefObject, useEffect, useRef, useState} from "react";
import {Modal} from "@thomasbfrd/modal";
import "@thomasbfrd/modal/dist/modal.css";
import {useNavigate} from "react-router-dom";
import {Calendar} from "@thomasbfrd/calendar";
import "@thomasbfrd/calendar/dist/calendar.css";
import {Person} from "../../shared/interfaces/person.interface.ts";
import {Departments} from "../../shared/types/departments.type.ts";
import {FieldValues, useForm} from "react-hook-form";
import {DEPARTMENTS} from "../../shared/constants/departments.constant.ts";

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
    const {register, handleSubmit, setValue, formState: {errors, isValid}} = useForm({
        mode: "onSubmit"
    });

    const [validated, setValidated] = useState<boolean>(false);

    const [dateOfBirthOpened, setDateOfBirthOpened] = useState<boolean>(false);

    const [startDateOpened, setStartDateOpened] = useState<boolean>(false);

    const [departmentSelected, setDepartmentSelected] = useState<Departments>('null' as Departments);

    const [newEmployee, setNewEmployee] = useState<Person>();

    const [stateSelected, setStateSelected] = useState<string>('');

    const [birthDateChange, setBirthDateChange] = useState<string>('');

    const [startDateChange, setStartDateChange] = useState<string>('');

    const [confirmModal, setConfirmModal] = useState<boolean>(false);

    const birthDateCalendarRef: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);

    const startDateCalendarRef: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);

    const navigate = useNavigate();

    useEffect(() => {

        return () => {
        };
    }, [departmentSelected, stateSelected, birthDateChange, startDateChange]);

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

    function onDepartmentSelected(value: string) {
        setValue("department", value, {shouldValidate: true});
        setDepartmentSelected(value as Departments);
    }

    function onStateSelected(value: string) {
        const selectedCountry =
            countries.find((country: { value: string, label: string }) => country.value === value)?.label;
        setValue("state", selectedCountry, {shouldValidate: true});
        setStateSelected(selectedCountry as string);
    }

    function submitData(data: FieldValues) {
        const result: Person = {
            firstName: data.firstName,
            lastName: data.lastName,
            startDate: data.startDate,
            department: data.department,
            dateOfBirth: data.dateOfBirth,
            street: data.street,
            city: data.city,
            state: data.state,
            zip: data.zip,
        }
        setValidated(true);
        setConfirmModal(false);
        setNewEmployee(result);
    }

    function redirectToList() {
        if (newEmployee) {
            newEmployeeData(newEmployee);
        }

        setValidated(false);
        setConfirmModal(false);
        return navigate('/employee-list');
    }

    function onBirthDateDateChange(date: string) {
        setValue("dateOfBirth", new Date(date).toLocaleDateString());
        setBirthDateChange(new Date(date).toLocaleDateString());
        setDateOfBirthOpened(false);
    }

    function onStartDateDateChange(date: string) {
        setValue("startDate", new Date(date).toLocaleDateString());
        setStartDateChange(new Date(date).toLocaleDateString());
        setStartDateOpened(false);
    }

    function toggleDateOfBirth() {
        setDateOfBirthOpened(!dateOfBirthOpened);
    }

    function toggleStartDate() {
        setStartDateOpened(!startDateOpened);
    }

    function confirmCreateEmployee() {
        setConfirmModal(true);
    }

    return (
        <>
            <div className="add-container">
                <div className="add-content">
                    <h2 className="add-title">Create Employee</h2>
                    <form className="add-form">
                        <div className="add-form-input">
                            <label htmlFor="first-name">First Name</label>
                            <input type="text" id="first-name" placeholder="First Name" {...register("firstName", {
                                required: true,
                                minLength: 2
                            })} aria-invalid={errors.firstName ? "true" : "false"} aria-describedby="firstName-error"/>
                            {errors.firstName && <span className="error-message">First Name is required.</span>}
                        </div>

                        <div className="add-form-input">
                            <label htmlFor="last-name">Last Name</label>
                            <input type="text" id="last-name" placeholder="Last Name" {...register("lastName", {
                                required: true,
                                minLength: 2
                            })} aria-invalid={errors.lastName ? "true" : "false"} aria-describedby="lastName-error"/>
                            {errors.lastName && <span className="error-message">Last Name is required.</span>}
                        </div>

                        <div className="add-form-input" ref={startDateCalendarRef}>
                            <label htmlFor="start-date">Start Date</label>
                            <input onClick={toggleStartDate} value={startDateChange} type="text" id="start-date"
                                   placeholder="Start Date" {...register("startDate", {
                                required: true,
                                minLength: 2
                            })} aria-invalid={errors.startDate ? "true" : "false"} aria-describedby="startDate-error"/>
                            {errors.startDate && <span className="error-message">Start date is required.</span>}
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
                            <label htmlFor="department">Department</label>
                            <div>
                                <Dropdown
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
                            </div>
                            <input type="hidden" {...register("department", {
                                required: true,
                                minLength: 2
                            })} aria-invalid={errors.department ? "true" : "false"}
                                   aria-describedby="department-error"/>
                            {errors.department && <span className="error-message">Department is required.</span>}
                        </div>

                        <div className="add-form-input" ref={birthDateCalendarRef}>
                            <label htmlFor="date-of-birth">Date of Birth</label>
                            <input onClick={toggleDateOfBirth} value={birthDateChange} type="text" id="date-of-birth"
                                   placeholder="Date of Birth" {...register("dateOfBirth", {
                                required: true,
                                minLength: 2
                            })} aria-invalid={errors.dateOfBirth ? "true" : "false"}
                                   aria-describedby="dateOfBirth-error"/>
                            {errors.dateOfBirth && <span className="error-message">Date of birth is required.</span>}
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

                        <div className="add-form-input">
                            <label htmlFor="street">Street</label>
                            <input id="street" type="text" placeholder="Street" {...register("street", {
                                required: true,
                                minLength: 2
                            })} aria-invalid={errors.street ? "true" : "false"} aria-describedby="street-error"/>
                            {errors.street && <span className="error-message">Street is required.</span>}
                        </div>

                        <div className="add-form-input">
                            <label htmlFor="city">City</label>
                            <input id="city" type="text" placeholder="City" {...register("city", {
                                required: true,
                                minLength: 2
                            })} aria-invalid={errors.city ? "true" : "false"} aria-describedby="city-error"/>
                            {errors.city && <span className="error-message">City is required.</span>}
                        </div>

                        <div className="add-form-input">
                            <label htmlFor="state">State</label>
                            <div>
                                <Dropdown
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
                            </div>
                            <input type="hidden" {...register("state", {
                                required: true,
                                minLength: 2
                            })} aria-invalid={errors.state ? "true" : "false"} aria-describedby="state-error"/>
                            {errors.state && <span className="error-message">State is required.</span>}
                        </div>

                        <div className="add-form-input">
                            <label htmlFor="zip-code">Zip Code</label>
                            <input id="zip-code" type="number" placeholder="Zip Code" {...register("zip", {
                                required: true,
                                minLength: 2
                            })} aria-invalid={errors.zip ? "true" : "false"} aria-describedby="zip-error"/>
                            {errors.zip && <span className="error-message">Zip Code is required.</span>}
                        </div>
                    </form>
                    <button type="button" className={!isValid ? "add-submit-button disabled" : "add-submit-button"}
                            disabled={!isValid} onClick={confirmCreateEmployee}>Save
                    </button>

                </div>
                {validated ? (
                    <div className="modal">
                        <Modal type="success" title="Success" body="Employee Created!" okButton="Close"
                               onOk={redirectToList}/>
                    </div>
                ) : null}
                {confirmModal ? (
                    <div className="modal">
                        <Modal type="submit" title="Warning" body="Are you sure you want to create this employee?"
                               okButton="Yes" cancelButton="No" onOk={handleSubmit(submitData)}
                               onCancel={() => setConfirmModal(false)}/>
                    </div>
                ) : null}
            </div>
        </>
    );
};

export default AddEmployee;