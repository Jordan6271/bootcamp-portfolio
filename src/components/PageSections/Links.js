import React, { Fragment } from "react";

const Links = (props) => {
    return (
        <Fragment>
            <h2>Links to Project</h2>
            <p>
                In case you're interested in having a look yourself,{` `}
                <a
                    href={
                        props.heroku ? props.links.heroku : props.links.ghPages
                    }
                    target="_blank"
                    class="text-danger"
                    rel="noreferrer"
                >
                    here is a link
                </a>
                {` `}
                {props.heroku
                    ? `to the project API on Heroku, and`
                    : `to the project on GitHub pages, and`}
                {` `}
                <a
                    href={props.links.repo}
                    target="_blank"
                    class="text-danger"
                    rel="noreferrer"
                >
                    here is a link
                </a>
                {` `}
                to the repository files.
            </p>
        </Fragment>
    );
};

export default Links;
