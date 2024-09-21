import { useEffect } from "react";
import { addNowPlaying } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";

const useNowPlaying = () => {
  const dispatch = useDispatch();

  const nowPlaying = useSelector((store) => store.movies.nowPlaying);

  const getNowPlaying = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    //console.log(json.results);
    dispatch(addNowPlaying(json.results));
  };

  useEffect(() => {
    if (!nowPlaying) getNowPlaying();
  }, []);
};

export default useNowPlaying;
