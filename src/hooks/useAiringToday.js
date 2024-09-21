import { useEffect } from "react";
import { addAiringToday } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";

const useAiringToday = () => {
  const dispatch = useDispatch();

  const airingToday = useSelector((store) => store.movies.airingToday);

  const getAiringToday = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/airing_today?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    //console.log(json.results);
    dispatch(addAiringToday(json.results));
  };

  useEffect(() => {
    !airingToday && getAiringToday();
  }, []);
};

export default useAiringToday;
