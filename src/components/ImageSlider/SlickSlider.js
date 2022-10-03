import Slider from "react-slick";
import imgArr from "../../images/slider-images/imgData";

export default function SlickSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {imgArr.map(({ image, caption }) => (
        <div className="slider" key={caption}>
          <img className="slider__img" src={image} alt="cocktail" />
          <p className="slider__caption">{caption}</p>
        </div>
      ))}
    </Slider>
  );
}
