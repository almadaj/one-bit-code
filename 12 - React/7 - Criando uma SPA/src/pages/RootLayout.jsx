import { Outlet } from "react-router-dom";
import Header from "../components/Header";
export default function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <p>Esse é o layout principal, abaixo o conteúdo dinâmico</p>
        <hr />
        <Outlet />
      </main>
      <footer>
        <p>Feito com React Router DOM</p>
      </footer>
    </>
  );
}
