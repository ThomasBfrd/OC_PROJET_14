import {Departments} from "../types/departments.type.ts";

export interface Person {
    firstName: string;
    lastName: string;
    startDate: string;
    department: Departments;
    dateOfBirth: string;
    street: string;
    city: string;
    state: string;
    zip: string;
}