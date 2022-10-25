import DefaultHOC from "./HOC/Default.HOC";
import HomePage from "./Pages/Home.page";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Movie from "./Pages/Movie.page";
import MovieHOC from "./HOC/Movie.HOC";
import Plays from "./Pages/Plays.page";

function App() {
  return (
  <>
  <DefaultHOC path="/" exact component={ HomePage } />
  <MovieHOC path="/movie/:id" exact component={ Movie } />
  <DefaultHOC path="/plays" exact component={ Plays } />
  </>
  );
}

export default App;
