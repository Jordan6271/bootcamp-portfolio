import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const MyCarousel = (props) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        setImages(props.images);
    }, [props.images]);

    const buildImages = () => {
        return images.map((current) => {
            return (
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

    return <Carousel className="mx-auto w-75">{buildImages()}</Carousel>;
};

export default MyCarousel;
