import { memo } from "react";
import React from "react";
import CompHijo from "./CompHijo";
import CompHijoClase from "./CompHijoClase";
const CompPadre = memo(() => {
  console.log(window.globalCount++);
  const texto = "Cambia algo";
  return <>
      <div>CompPadre</div>
      <CompHijo texto={texto} />
      <CompHijoClase texto={texto} />
    </>;
});
export default CompPadre;