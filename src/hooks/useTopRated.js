import { useEffect } from "react";
import { addTopRated } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";

const useTopRated = () => {
  const dispatch = useDispatch();

  const getTopRated = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    //console.log(json.results);
    dispatch(addTopRated(json.results));
  };

  useEffect(() => {
    getTopRated();
  }, []);
};

export default useTopRated;
