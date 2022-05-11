import React from "react";
import "./styles.css";

const InputField = () => {
  return (
    <form className="input">
      <input
        type="input"
        className="input__box"
        placeholder="Agregar una tarea"
      ></input>
      <button className="input_submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
