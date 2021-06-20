import React, { Fragment, useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ToggleButton from "../ToggleButton/ToggleButton";

const MyCarousel = (props) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        props.fullStack
            ? setImages(props.images.frontend)
            : setImages(props.images);
    }, [props.fullStack, props.images]);

    const buildImages = () => {
        return images.map((current) => {
            return current.id > images.length ? (
                <Fragment />
            ) : (
                <Carousel.Item key={current.id}>
                    <img
                        src={current.image}
                        alt={current.description}
                        className="w-100"
                    />
                </Carousel.Item>
            );
        });
    };

    return (
        <Fragment>
            <Carousel className="mx-auto w-75">{buildImages()}</Carousel>
            {props.fullStack ? (
                <ToggleButton
                    setImages={setImages}
                    images={images}
                    allImages={props.images}
                />
            ) : (
                <Fragment />
            )}
        </Fragment>
    );
};

export default MyCarousel;
