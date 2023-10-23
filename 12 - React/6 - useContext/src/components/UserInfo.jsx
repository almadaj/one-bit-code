import { useContext } from "react";
import UserContext from "../UserContext/UserContext.js";

const UserInfo = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>Informações do Usuário:</h2>
      <p>Nome: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserInfo;
