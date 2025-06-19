import {RefObject, useEffect, useRef, useState} from "react";
import "./dropdown.scss";
import Caret from "../caret/caret.tsx";
import {DropdownProps} from "../../interfaces/dropdown.interface.ts";

const Dropdown = ({options, placeholder = "Select option", height = 30, width = 150, paddingY = 5, paddingX = 5,
                      primaryColor = "#F8FAFC", secondaryColor = "#1E293B", backgroundPrimaryColor = "#1E293B", backgroundSecondaryColor = "#334155",
                  itemHoverColor = "#475569", hoverColor = "#e4e4e4", onDropdownItemSelected}: DropdownProps) => {

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

        document.documentElement.style.setProperty("--dropdown-button-height", height + "px");
        document.documentElement.style.setProperty("--dropdown-button-width", width + "px");
        document.documentElement.style.setProperty("--dropdown-button-padding-y", paddingY + "px");
        document.documentElement.style.setProperty("--dropdown-button-padding-x", paddingX + "px");
        document.documentElement.style.setProperty("--dropdown-button-text-primary", primaryColor);
        document.documentElement.style.setProperty("--dropdown-button-text-secondary", secondaryColor);
        document.documentElement.style.setProperty("--dropdown-button-background-primary", backgroundPrimaryColor);
        document.documentElement.style.setProperty("--dropdown-button-background-secondary", backgroundSecondaryColor);
        document.documentElement.style.setProperty("--dropdown-button-item-hover", itemHoverColor);
        document.documentElement.style.setProperty("--dropdown-button-hover", hoverColor);

        return () => {}
    }, [height, width, paddingY, paddingX, primaryColor, secondaryColor, backgroundPrimaryColor, backgroundSecondaryColor, itemHoverColor, hoverColor])

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
                <div className={isDropdownOpened ? "dropdown-button opened" : "dropdown-button"} onClick={() => setIsDropdownOpened(!isDropdownOpened)}>
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