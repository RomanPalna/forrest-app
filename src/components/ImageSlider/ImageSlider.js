import { Carousel } from "react-carousel-minimal";

import data from "../../images/slider-images/imgData";

export default function ImageSlider() {
  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
    fontFamily: "Montserrat",
  };

  return (
    <div
      className="App"
      style={{
        maxWidth: "450px",
        width: "100%",
        margin: "0 auto",
      }}
    >
      <div
        style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}
      >
        <div
          style={{
            padding: "0 48px",
            margin: "0 auto",
          }}
        >
          <Carousel
            data={data}
            time={3000}
            width="450px"
            height="450px"
            captionStyle={captionStyle}
            radius="10px"
            // slideNumber={true}
            // slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            // thumbnails={true}
            // thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "800px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}
