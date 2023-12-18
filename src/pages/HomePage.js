import ImageSlider from "../components/ImageSlider";

function HomePage() {

    const slides = [
        { url: "http://localhost:3000/myrespo/image-1.jpg", title: "beach" },
        { url: "http://localhost:3000/myrespo/image-2.jpg", title: "boat" },
        { url: "http://localhost:3000/myrespo/image-3.jpg", title: "forest" },
        { url: "http://localhost:3000/myrespo/image-4.jpg", title: "city" },
        { url: "http://localhost:3000/myrespo/image-5.jpg", title: "italy" },
      ];

    const containerStyles = {
        width : "500px",
        height : "280px",
        margin : "0 auto",
    }

    const homeContainer = {
        display : "flex",
        flexDirection : "column"
    }

    const homeTitleStyle = {
        margin : "0px 10px",
        fontSize : "30px",
        justifyContent : "center"
    }

    return (
        <div style={homeContainer}>
            <h1 style={homeTitleStyle}>Hi Welcome to ImageSlider</h1>
            <div style={containerStyles}>
                <ImageSlider slides={slides} />
            </div>
        </div>
    )
}

export default HomePage;