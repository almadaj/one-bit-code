import { useState } from "react";
import PropTypes from "prop-types";
import TextInput from "./TextInput";

// utilizando a lib prop-types para validar as props, mas com typescript não é necessário
NewGameForm.propTypes = {
  addGame: PropTypes.func,
  cover: PropTypes.string,
  onRemove: PropTypes.func,
};

export default function NewGameForm({ addGame }) {
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    addGame({ title, cover });
    setTitle("");
    setCover("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput id="title" label="Título" value={title} setValue={setTitle} />
      <TextInput id="cover" label="Capa" value={cover} setValue={setCover} />
      <button>Adicionar</button>
    </form>
  );
}
