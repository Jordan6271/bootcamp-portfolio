import React, { Fragment } from "react";

const TextBlock = (props) => {
    return (
        <Fragment>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </Fragment>
    );
};

export default TextBlock;
