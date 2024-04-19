import React from 'react';
import propertyImg from "@/public/images/property/1/1.png";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";

const PropertyCarousel = () => {
    return (
        <Carousel className="sm:mx-10">
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <Image className="w-full" src={propertyImg} alt="carousel image" />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
        </Carousel>
    );
};

export default PropertyCarousel;