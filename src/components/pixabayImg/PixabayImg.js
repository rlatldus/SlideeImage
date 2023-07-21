import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { useGetFlowerImg } from "../../hooks/useFlowerImage";
import "./slider.scss";

const PixabayImg = (search) => {
  const { isLoading: Loading, data: postFlowerData } = useGetFlowerImg(search);

  if (Loading) {
    return "로딩중..";
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 2000,
  };

return (
  <Slider {...settings}>
    {postFlowerData?.hits.map((img) => (
      <div key={img.id} className="slider-image-wrapper">
        <img src={img.largeImageURL} alt="img" />
      </div>
    ))}
  </Slider>
);
    }

export default PixabayImg;
