export interface DropdownProps {
    placeholder?: string;
    options?: Array<string | number>;
    height?: number;
    width?: number;
    paddingY?: number;
    paddingX?: number;
    primaryColor?: string;
    secondaryColor?: string;
    backgroundPrimaryColor?: string;
    backgroundSecondaryColor?: string;
    hoverColor?: string;
    itemHoverColor?: string;
    onDropdownItemSelected?: (option: string | number) => void;
}