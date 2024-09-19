import { useEffect } from "react";
import { addPopular } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";

const usePopular = () => {
  const dispatch = useDispatch();

  const getPopular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    //console.log(json.results);
    dispatch(addPopular(json.results));
  };

  useEffect(() => {
    getPopular();
  }, []);
};

export default usePopular;
