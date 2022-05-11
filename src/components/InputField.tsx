import React from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField: React.FC<Props> = ({ todo, setTodo }) => {
  return (
    <form className="input">
      <input
        type="input"
        className="input__box"
        placeholder="Agregar una tarea"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      ></input>
      <button className="input_submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
