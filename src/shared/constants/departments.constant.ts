import {Departments} from "../types/departments.type.ts";

export const DEPARTMENTS = [
    {
        value: 'sales',
        label: 'Sales'
    },
    {
        value: 'marketing',
        label: 'Marketing'
    },
    {
        value: 'engineering',
        label: 'Engineering'
    },
    {
        value: 'humanResources',
        label: 'Human Resources'
    },
    {
        value: 'legal',
        label: 'Legal'
    },
]

export const DepartmentLabels: Record<Departments, string> = {
    null: "",
    sales: "Sales",
    marketing: "Marketing",
    engineering: "Engineering",
    humanResources: "Human Resources",
    legal: "Legal"
}