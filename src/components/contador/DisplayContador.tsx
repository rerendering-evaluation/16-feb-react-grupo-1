import React from "react";
const DisplayContador = ({
  valor
}: {
  valor: number;
}) => {
  console.log(window.globalCount++);
  return <h3>{valor}</h3>;
};
export default DisplayContador;