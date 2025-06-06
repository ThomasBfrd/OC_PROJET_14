export interface DropdownProps {
    placeholder?: string;
    options?: Array<string | number>;
    height?: string;
    width?: string;
    paddingY?: string;
    paddingX?: string;
    primaryColor?: string;
    secondaryColor?: string;
    backgroundPrimaryColor?: string;
    backgroundSecondaryColor?: string;
    highlightColor?: string;
    hoverColor?: string;
    onDropdownItemSelected?: (option: string | number) => void;
}