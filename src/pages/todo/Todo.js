import Header from "../../components/header/Header";
import PixabayImg from "../../components/pixabayImg/PixabayImg";
import SimpleSlider from "../../components/simpleslider/SimpleSlider";

function Todos() {
  // const AIsetting = { slidesToShow: 2 };
  return (
    <>
      <Header />
      <SimpleSlider />
      <div className="align">
        <PixabayImg className="item" search={"AI+service"} />
        <PixabayImg className="item" search={"math"} />
        <PixabayImg className="item" search={"iclave"} />
        <PixabayImg className="item" search={"SearchGPT"} />
      </div>
    </>
  );
}

export default Todos;
