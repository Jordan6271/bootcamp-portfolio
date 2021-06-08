import React, { Fragment } from "react";

const Difficulty = (props) => {
    return (
        <Fragment>
            <h2>Difficulties</h2>
            <p>{props.text}</p>
        </Fragment>
    );
};

export default Difficulty;
