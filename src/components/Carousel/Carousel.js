import React, { Fragment, useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ToggleButton from "../ToggleButton/ToggleButton";
import "./Carousel.css";

const MyCarousel = (props) => {
    const [images, setImages] = useState([]);
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    useEffect(() => {
        props.fullStack
            ? setImages(props.images.frontend)
            : setImages(props.images);
    }, [props.fullStack, props.images]);

    const buildImages = () => {
        return images.map((current) => {
            return (
                <Carousel.Item key={current.id} className="carousel-item">
                    <img
                        src={current.image}
                        alt={current.description}
                        className="w-75 carousel-image"
                    />
                </Carousel.Item>
            );
        });
    };

    return (
        <Fragment>
            <Carousel
                className="pt-3 mb-4"
                activeIndex={index}
                onSelect={handleSelect}
                interval={null}
            >
                {buildImages()}
            </Carousel>
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
