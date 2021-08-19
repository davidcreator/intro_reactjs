import React from "react";

function Button(props) {
  const { name, surname, onClick } = props;

  return (
    <button onClick={onClick}>
      {name} {surname}
    </button>
  );
}

export default Button;
