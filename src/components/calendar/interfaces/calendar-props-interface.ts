export interface CalendarProps {
    backgroundColor?: string;
    primaryColor?: string;
    secondaryColor?: string;
    tertiaryColor?: string;
    activeColor?: string;
    textPrimaryColor?: string;
    textSecondaryColor?: string;
    hoverColor?: string;
    onDateChange?: (date: string) => void;
}