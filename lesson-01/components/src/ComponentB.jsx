import React from "react";

function ComponenteB(props) {
  // props.children -> acessa o que está dentro
  // No caso, o Button
  return <div>Componente B =D {props.children} </div>;
}

export default ComponenteB;
