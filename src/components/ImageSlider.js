import { useState } from "react";


function ImageSlider({slides}) {

    const [currentIndex , setCurrentIndex] = useState(0);

    const slidesStyles = {
        width : "100%",
        height : "100%",
        backgroundRadius : "10px",
        backgroundPosition : "center",
        backgroundSize : "cover",
        backgroundImage: `url(${slides[currentIndex].url})`,
        borderRadius : "10px",

    }

    const sliderStyles = {
        height : "100%",
        position : "relative",
    }

    const leftArrowStyle = {
        position : "absolute",
        top : "40%",
        tronsform : 'translate(0,-50%)',
        left : '32px',
        fontSize : '45px',
        color : '#fff',
        zIndex : 1,
        cursor : 'pointer'
    }

    const rightArrowStyle = {
        position : "absolute",
        top : "40%",
        tronsform : 'translate(0,-50%)',
        right : '32px',
        fontSize : '45px',
        color : '#fff',
        zIndex : 1,
        cursor : 'pointer'
    }

    const goToPrevious = ()=>{
        const isFirstslide = currentIndex === 0;
        const newIndex = isFirstslide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const goToNext = ()=>{
        const isLastslide = currentIndex === slides.length - 1;
        const newIndex = isLastslide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const dotsContainerStyle = {
        display : "flex",
        margin : "0px 5px",
        justifyContent : "center"
    }

    const dotsStyle = {
        fontSize : "30px",
        cursor  : "pointer"
    }

    const goToSlide = (slideIndex)=>{
        setCurrentIndex(slideIndex);
    }

    return (
        <div style={sliderStyles}>
            <div style={leftArrowStyle} onClick={goToPrevious}>❮</div>
            <div style={rightArrowStyle} onClick={goToNext}>❯</div>
            <div style={slidesStyles}></div>
            <div style={dotsContainerStyle}>
                {slides.map((slide , slideIndex)=>{
                    return <div key={slideIndex} style={dotsStyle} onClick={()=> goToSlide(slideIndex)}>●</div>;
                })}
            </div>
        </div>
    );
}

export default ImageSlider;