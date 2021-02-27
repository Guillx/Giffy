import "./App.css";
import { Link, Route } from "wouter";
import ListOfGifs from "./components/ListOfGifs";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>Escoge una categoría:</h1>
        <div className="links">
          <Link to="/gif/ardilla">Gifs de Ardillas</Link>
          <Link to="/gif/buho">Gifs de Buhos</Link>
          <Link to="/gif/caballo">Gifs de Caballos</Link>
          <Link to="/gif/delfin">Gifs de Delfines</Link>
          <Link to="/gif/elefante">Gifs de Elefantes</Link>
          <Link to="/gif/flamenco">Gifs de Flamencos</Link>
          <Link to="/gif/gato">Gifs de Gatos</Link>
          <Link to="/gif/hipopotamo">Gifs de Hipopótamos</Link>
          <Link to="/gif/iguana">Gifs de Iguanas</Link>
          <Link to="/gif/jirafa">Gifs de Jirafas</Link>
          <Link to="/gif/koala">Gifs de Koalas</Link>
          <Link to="/gif/leon">Gifs de Leones</Link>
          <Link to="/gif/mapache">Gifs de Mapaches</Link>
          <Link to="/gif/nutria">Gifs de Nutrias</Link>
          <Link to="/gif/ñu">Gifs de Ñus</Link>
          <Link to="/gif/oso">Gifs de Osos</Link>
          <Link to="/gif/perro">Gifs de Perros</Link>
          <Link to="/gif/rinoceronte">Gifs de Rinocerontes</Link>
          <Link to="/gif/serpiente">Gifs de Serpientes</Link>
          <Link to="/gif/tiburon">Gifs de Tiburones</Link>
          <Link to="/gif/vaca">Gifs de Vacas</Link>
          <Link to="/gif/zorro">Gifs de Zorros</Link>
        </div>
        <Route component={ListOfGifs} path="/gif/:keyword" />
      </section>
    </div>
  );
}

export default App;
