import NewGameForm from "./components/NewGameForm";
import Game from "./components/Game";
import useGameCollection from "./hooks/useGameColletion";

function App() {
  const { games, addGame, removeGame } = useGameCollection();

  return (
    <div className="app">
      <h1>Biblioteca de Jogos</h1>
      <NewGameForm addGame={addGame} />
      <div className="games">
        {games.map((game) => (
          <Game
            key={game.id}
            title={game.title}
            cover={game.cover}
            onRemove={() => removeGame(game.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
