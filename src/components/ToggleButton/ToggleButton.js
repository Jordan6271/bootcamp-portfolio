import React from "react";
import Button from "react-bootstrap/Button";
import "./ToggleButton.css";

const ToggleButton = (props) => {
    const allImages = props.allImages;
    const frontendImages = allImages.frontend;
    const backendImages = allImages.backend;

    const changeToggleState = () => {
        props.images === frontendImages
            ? props.setImages(backendImages)
            : props.setImages(frontendImages);
    };

    return (
        <div
            className={`toggle-button mb-4 ${
                props.images === frontendImages
                    ? `toggle-button-frontend-checked`
                    : `toggle-button-backend-checked`
            }`}
        >
            <div
                onClick={changeToggleState}
                className="toggle-button-container"
            >
                <Button className="toggle-button-frontend btn-danger">
                    <span>Frontend</span>
                </Button>
                <Button className="toggle-button-backend btn-danger">
                    <span>Backend</span>
                </Button>
            </div>
        </div>
    );
};

export default ToggleButton;
