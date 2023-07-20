import SimpleSlider from "../simpleslider/SimpleSlider";
import { useGetFlowerImg } from "../../hooks/useFlowerImage";

const PixabayImg = () => {
  const { isLoading: Loading, data: postFlowerData } = useGetFlowerImg();

  if (Loading) {
    return "로딩중..";
  }
  return (
    <SimpleSlider>
      {postFlowerData?.hits.map((img) => (
        <img key={img.id} src={img.largeImageURL} alt="img" />
      ))}
    </SimpleSlider>
  );
};

export default PixabayImg;
