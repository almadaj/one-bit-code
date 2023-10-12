import { useState } from "react";
import Input from "./components/inputs";

function App() {
  const [password, setPassword] = useState("");
  const [customSize, setCustomSize] = useState(12);
  const [showInput, setShowInput] = useState(false);
  const [copyText, setCopyText] = useState("Copiar");

  const passwordSize = showInput ? customSize : 8;

  function generate() {
    const characters =
      "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?";
    let newPassword = "";
    for (let i = 0; i < passwordSize; i++) {
      const position = Math.floor(Math.random() * characters.length);
      newPassword += characters[position];
    }
    setPassword(newPassword);
    setCopyText("Copiar");
  }

  function copyToClipboard() {
    window.navigator.clipboard.writeText(password);
    setCopyText("Copiado!");
  }

  return (
    <div>
      <h1>Gerador de senhas</h1>
      <div>
        <label htmlFor="showInput">Customizar tamanho:</label>
        <input
          type="checkbox"
          id="showInput"
          value={showInput}
          onChange={() => setShowInput((show) => !show)}
        />
      </div>
      {showInput && (
        <div>
          <label htmlFor="customSize">Tamanho: </label>
          <Input passwordSize={customSize} setPasswordSize={setCustomSize} />
        </div>
      )}
      <button onClick={generate}>
        Gerar senha de {passwordSize} caracteres
      </button>
      <button onClick={copyToClipboard}>{copyText}</button>
      <div>Sua senha segura: {password}</div>
    </div>
  );
}

export default App;
