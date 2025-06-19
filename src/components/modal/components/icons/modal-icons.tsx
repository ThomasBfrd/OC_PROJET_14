import './modal-icons.scss';

export interface SvgType {
    type: string
}

const ModalIcons = (type: SvgType) => {
    function getIcon() {
        if (type.type === "success") {
           return (<svg className="icon" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 122.88">
                <title>confirm</title>
                <path className="success-icon-1" d="M61.44,0A61.44,61.44,0,1,1,0,61.44,61.44,61.44,0,0,1,61.44,0Z"/>
                <path className="success-icon-2"
                      d="M42.37,51.68,53.26,62,79,35.87c2.13-2.16,3.47-3.9,6.1-1.19l8.53,8.74c2.8,2.77,2.66,4.4,0,7L58.14,85.34c-5.58,5.46-4.61,5.79-10.26.19L28,65.77c-1.18-1.28-1.05-2.57.24-3.84l9.9-10.27c1.5-1.58,2.7-1.44,4.22,0Z"/>
            </svg>
           )
        } else if (type.type === "error") {
            return (
                <svg className="icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.881 122.88" enableBackground="new 0 0 122.881 122.88" >
                    <g><path className="error-icon" fillRule="evenodd" clipRule="evenodd" d="M61.44,0c33.933,0,61.441,27.507,61.441,61.439 c0,33.933-27.508,61.44-61.441,61.44C27.508,122.88,0,95.372,0,61.439C0,27.507,27.508,0,61.44,0L61.44,0z M81.719,36.226 c1.363-1.363,3.572-1.363,4.936,0c1.363,1.363,1.363,3.573,0,4.936L66.375,61.439l20.279,20.278c1.363,1.363,1.363,3.573,0,4.937 c-1.363,1.362-3.572,1.362-4.936,0L61.44,66.376L41.162,86.654c-1.362,1.362-3.573,1.362-4.936,0c-1.363-1.363-1.363-3.573,0-4.937 l20.278-20.278L36.226,41.162c-1.363-1.363-1.363-3.573,0-4.936c1.363-1.363,3.573-1.363,4.936,0L61.44,56.504L81.719,36.226 L81.719,36.226z"/>
                    </g>
                </svg>
            )
        } else if (type.type === "submit") {
            return (
                <svg className="icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 88.98">
                    <g>
                        <path className="submit-icon" d="M85.33,16.83c12.99-9.83,31.92,1.63,31.92,13.63c0,7.75-2.97,10.79-7.57,14.03 c23.2,12.41,12.7,39.86-7.54,44.49l-70.69,0c-33.2,0-45.48-44.99-10.13-55.89C14.69,6.66,66.5-17.2,85.33,16.83L85.33,16.83z M53.37,69.54V53.66H39.16l22.29-26.82l22.29,26.82H69.53v15.88H53.37L53.37,69.54z"/>
                    </g>
                </svg>
            )
        }
    }

    return (
        getIcon()
    );
};

export default ModalIcons;