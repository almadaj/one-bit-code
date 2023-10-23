import UserContext from "./UserContext/UserContext.js";
import Header from "./components/Header.jsx";
import UserInfo from "./components/UserInfo.jsx";

const App = () => {
  const user = {
    name: "Juliano",
    email: "juliano@mail.com",
  };

  return (
    <UserContext.Provider value={user}>
      <Header />
      <div>
        <h1>Aplicação</h1>
        <UserInfo />
      </div>
    </UserContext.Provider>
  );
};

export default App;
