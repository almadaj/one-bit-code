import { Fragment } from "react";
import Card from "./components/Card";
import swPosterImg from "./assets/starwars-poster.jpg";
import esbPosterImg from "./assets/esb-poster.jpg";
import rotjPosterImg from "./assets/rotj-poster.jpg";

function App() {
  return (
    <Fragment>
      <Card title="Poster: Star Wars (1977)" posterImg={swPosterImg} />
      <Card
        title="Poster: Empire Strikes Backs (1988)"
        posterImg={esbPosterImg}
      />
      <Card
        title="Poster: Return of the Jedi (1983)"
        posterImg={rotjPosterImg}
      />
    </Fragment>
  );
}

export default App;
