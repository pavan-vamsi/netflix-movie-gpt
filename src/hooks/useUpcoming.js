import { useEffect } from "react";
import { addUpcoming } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";

const useUpcoming = () => {
  const dispatch = useDispatch();

  const upcoming = useSelector((store) => store.movies.upcoming);

  const getUpcoming = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    //console.log(json.results);
    dispatch(addUpcoming(json.results));
  };

  useEffect(() => {
    !upcoming && getUpcoming();
  }, []);
};

export default useUpcoming;
