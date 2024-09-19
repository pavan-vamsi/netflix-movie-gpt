import { useSelector } from "react-redux";
import useAiringToday from "../hooks/useAiringToday";
import useNowPlaying from "../hooks/useNowPlaying";
import useOnTheAir from "../hooks/useOnTheAir";
import usePopular from "../hooks/usePopular";
import useTopRated from "../hooks/useTopRated";
import useUpcoming from "../hooks/useUpcoming";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlaying();
  usePopular();
  useTopRated();
  useUpcoming();
  useOnTheAir();
  useAiringToday();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
