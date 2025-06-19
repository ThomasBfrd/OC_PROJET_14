import './modal.scss';
import {useEffect, useState} from "react";
import ModalIcons from "../icons/modal-icons.tsx";
import {ModalProps} from "../../interface/modal.interface.ts";

const Modal = ({type, title, body, cancelButton, okButton, onOk, onCancel}: ModalProps) => {

    const [primaryColor, setPrimaryColor] = useState<string>("#F8FAFC");
    const [secondaryColor, setSecondaryColor] = useState<string>("#1E293B");
    const [buttonPrimaryColor, setButtonPrimaryColor] = useState<string>("#F8FAFC");
    const [buttonSecondaryColor, setButtonSecondaryColor] = useState<string>("#1E293B");
    
    useEffect(() => {

        if (type === "submit") {
            setPrimaryColor("#F8FAFC");
            setSecondaryColor("#1E293B");
            setButtonPrimaryColor("#1e1e1e");
            setButtonSecondaryColor("#1E293B");
        } else if (type === "success") {
            setPrimaryColor("#F8FAFC");
            setButtonPrimaryColor("#1e1e1e");
        } else if (type === "error") {
            setPrimaryColor("#F8FAFC");
            setButtonPrimaryColor("#1e1e1e");
        }
        document.documentElement.style.setProperty("--modal-background-color", "1E293B");
        document.documentElement.style.setProperty("--modal-primary-color", primaryColor);
        document.documentElement.style.setProperty("--modal-secondary-color", secondaryColor);
        document.documentElement.style.setProperty("--modal-button-primary-color", buttonPrimaryColor);
        document.documentElement.style.setProperty("--modal-button-secondary-color", buttonSecondaryColor);
    }, [buttonPrimaryColor, buttonSecondaryColor, primaryColor, secondaryColor, type])
    
    return (
        <>
            <div className="modal-overlay"></div>
            <div className="modal-container">
                <div className="modal-content">
                    <div className="modal-header">
                        {title ? (
                            <span className="modal-header-text">{title}</span>
                        ) : null}
                    </div>
                    <div className="modal-body">
                        <div className="modal-body-icon">
                            <ModalIcons type={type} />
                        </div>
                        <p>{body}</p>
                    </div>
                    <div className="modal-footer">
                        {type === 'submit' ? (
                            <button onClick={onCancel} className="button cancel-modal">{cancelButton}</button>
                        ) : null}
                        <button onClick={onOk} className="button dark-btn">{okButton}</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;