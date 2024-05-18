import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
const API_KEY = "30da0ae8ce19ff0019a87a2e60d710f1";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMGRhMGFlOGNlMTlmZjAwMTlhODdhMmU2MGQ3MTBmMSIsInN1YiI6IjY1ZDhlNTBlNDJmMTlmMDE2MzE5ZDMyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yd-6bmHkQ9Q3U1Ips1Ok0-P7UF-PhPSzPL5CBgt03Xs",
  },
};

export const getPopularMovies = async () => {
  const url = "/movie/popular?language=en-US&page=1";
  const response = await axios.get(url, options);
  return response.data;
};

export const getTrendingMovies = async () => {
  const url = "trending/movie/day?language=en-US";
  const response = await axios.get(url, options);
  return response.data;
};

export const getUpcomingMovies = async () => {
  const url = `/movie/upcoming?api_key=${API_KEY}&region=US&language=en-US&page=1`;
  const response = await axios.get(url, options);
  return response.data;
};

/**************/

export const getSearchMovie = async (query, page) => {
  const { data } = await axios.get(
    `/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`
  );
  return data;
};

export const getSearchForm = async (
  page = "",
  query = "",
  genre = "",
  year = "",
  sort = ""
) => {
  let f = {
    year:
      year !== "" && year !== "start" ? `&primary_release_year=${year}` : "",
    genre: genre !== "" && genre !== "start" ? `&with_genres=${genre}` : "",
    queryFetch: `&query=${query}`,
    sort: sort !== "" && sort !== "start" ? `&sort_by=${sort}` : "",
    discover: `/trending`,
    week: `/week`,
  };

  console.log(f);

  if (query === "") {
    f.queryFetch = "";
  }
  if (query !== "" && genre === "") {
    f.discover = "/search";
    f.week = "";
  }
  if (query === "" && genre !== "") {
    f.discover = "/discover";
    f.week = "";
  }
  if (query === "" && year !== "") {
    f.discover = "/discover";
    f.week = "";
  }
  let { data } = await axios.get(
    `${f.discover}/movie${f.week}?api_key=${API_KEY}${f.genre}${f.year}${f.sort}&language=en-US${f.queryFetch}&page=${page}`
  );

  console.log(
    `${f.discover}/movie${f.week}?api_key=${API_KEY}${f.genre}${f.year}${f.sort}&language=en-US${f.queryFetch}&page=${page}`
  );

  console.log(data.results);

  return data;
};

/*******************************************************************************/

// export const getMovieSearch = async (moviesFilter) => {
//   const url = `/search/movie?query=${moviesFilter}&include_adult=false&language=en-US&page=1`;
//   const response = await axios.get(url, options);
//   return response.data.results;
// };

export const getMovieSearch = async (moviesFilter, page) => {
  const url = `/search/movie?query=${moviesFilter}&include_adult=false&language=en-US&page=${page}`;
  const response = await axios.get(url, options);
  return response.data.results;
};

export const getDetails = async (movieId) => {
  const url = `/movie/${movieId}?language=en-US`;
  const response = await axios.get(url, options);
  return response.data;
};

// export const getCast = async (movieId) => {
//   const url = `/movie/${movieId}/credits?language=en-US`;
//   const response = await axios.get(url, options);
//   return response.data.cast;
// };

// export const getReviews = async (movieId) => {
//   const url = `/movie/${movieId}/reviews?language=en-US&page=1`;
//   const response = await axios.get(url, options);
//   return response.data.results;
// };

export const getTrailer = async (movieId) => {
  const url = `/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`;
  const response = await axios.get(url, options);
  return response.data.results;
};
