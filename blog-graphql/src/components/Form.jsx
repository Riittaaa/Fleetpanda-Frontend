import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");

  const addCharacter = () => {};

  return (
    <div>
      <input
        type="text"
        placeholder="Enter the character name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <input
        type="file"
        placeholder="Enter the character image"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input type="submit" onClick={addCharacter} />
    </div>
  );
}

export default Form;
