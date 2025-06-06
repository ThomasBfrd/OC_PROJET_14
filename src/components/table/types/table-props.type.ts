import {Header} from "../interfaces/header.interface.ts";

export type TableProps<T extends object> = {
    data: Array<T>;
    headers: Array<Header>;
    backgroundHeaderFooterColor?: string;
    backgroundBodyTable?: string;
    activeColor?: string;
    textPrimaryColor?: string;
    textSecondaryColor?: string;
    hoverColor?: string;
}