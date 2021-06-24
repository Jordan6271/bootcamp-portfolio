import React, { Fragment } from "react";

const Links = (props) => {
    return (
        <div className="pb-3">
            <h2>Links to Project</h2>
            <p>
                In case you're interested in having a look yourself,
                {props.fullStack ? (
                    <span>
                        {` `}
                        <a
                            href={props.links.heroku}
                            target="_blank"
                            class="text-danger"
                            rel="noreferrer"
                        >
                            here is a link
                        </a>
                        {` `}to the project API on Heroku,
                    </span>
                ) : (
                    <Fragment />
                )}
                {` `}
                <a
                    href={
                        props.backend ? props.links.heroku : props.links.ghPages
                    }
                    target="_blank"
                    class="text-danger"
                    rel="noreferrer"
                >
                    here is a link
                </a>
                {` `}
                {props.backend
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
        </div>
    );
};

export default Links;
