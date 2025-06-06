import {RefObject, useEffect, useRef, useState} from "react";
import "./dropdown.scss";
import Caret from "../caret/caret.tsx";
import {DropdownProps} from "../../interfaces/dropdown.interface.ts";

const Dropdown = ({options, placeholder = "Select option", height = '30px', width = "150px", paddingY = "5px", paddingX = "5px",
                      primaryColor = "#ffffff", secondaryColor = "#ffffff", backgroundPrimaryColor = "#7247EC", backgroundSecondaryColor = "#7247EC",
                  highlightColor = "#a38cef", hoverColor = "#f4f4f4", onDropdownItemSelected}: DropdownProps) => {

    const [isDropdownOpened, setIsDropdownOpened] = useState<boolean>(false);

    const [dropdownItemSelected, setDropdownItemSelected] = useState<string | number | null>(null);

    const dropDownRef: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (!dropDownRef.current?.contains(event.target as Node)) {
                setIsDropdownOpened(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [dropDownRef])

    useEffect(() => {

        document.documentElement.style.setProperty("--dropdown-button-height", height);
        document.documentElement.style.setProperty("--dropdown-button-width", width);
        document.documentElement.style.setProperty("--dropdown-button-padding-y", paddingY);
        document.documentElement.style.setProperty("--dropdown-button-padding-x", paddingX);
        document.documentElement.style.setProperty("--dropdown-button-text-primary", primaryColor);
        document.documentElement.style.setProperty("--dropdown-button-text-secondary", secondaryColor);
        document.documentElement.style.setProperty("--dropdown-button-background-primary", backgroundPrimaryColor);
        document.documentElement.style.setProperty("--dropdown-button-background-secondary", backgroundSecondaryColor);
        document.documentElement.style.setProperty("--dropdown-button-item-hover", highlightColor);
        document.documentElement.style.setProperty("--dropdown-button-hover", hoverColor);

        return () => {}
    }, [height, width, paddingY, paddingX, primaryColor, secondaryColor, backgroundPrimaryColor, backgroundSecondaryColor, highlightColor, hoverColor])

    function handleSetDropdownItemSelected(option: string | number) {
        setDropdownItemSelected(option);
        setIsDropdownOpened(false);

        if (onDropdownItemSelected) {
            onDropdownItemSelected(option)
        }
    }

    return (
        <>
            <div className="dropdown-container" ref={dropDownRef}>
                <div className="dropdown-button" onClick={() => setIsDropdownOpened(!isDropdownOpened)}>
                    <p>{dropdownItemSelected ? dropdownItemSelected : placeholder}</p>
                    <Caret />
                </div>
                {isDropdownOpened ? (
                    <div className="dropdown-content">
                        {options && options.map((option: string | number, index: number) => (
                            <div className="dropdown-item" key={index} onClick={() => handleSetDropdownItemSelected(option)}>{option}</div>
                        ))}
                    </div>
                ) : null}
            </div>
        </>
    );
};

export default Dropdown;