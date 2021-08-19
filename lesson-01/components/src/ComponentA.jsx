import React from "react";

function ComponenteA(props) {
  // props.children -> acessa o que está dentro
  // No caso, o ComponentB
  return (
    <div>
      Componente A =D
      <div>{props.children}</div>
    </div>
  );
}

export default ComponenteA;
