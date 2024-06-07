import { useRef } from "react";
import { memo } from "react";
import React, { useState, useEffect } from "react";
const CompFuncCicloVida = memo(() => {
  const miVariable = useRef<boolean | undefined>();
  // 1 - Componente se monta
  // 2 - Componente se actualiza
  // 3 - Componente se va a desmontar
  useEffect(() => {
    console.log("Se ha ejecutado");
    return () => {
      console.log("Se va a desmontar");
    };
  }, []);
  useEffect(() => {
    if (typeof miVariable.current === "undefined") return;
    console.log("miVariable ha cambiado");
  }, [miVariable.current]);
  const updateVar = () => {
    miVariable.current = (val => {
      if (typeof val === "undefined") return true;
      return !val;
    })(miVariable.current);
  };
  return <div>
            <button onClick={updateVar}>Actualiza</button>
        </div>;
});
export default CompFuncCicloVida;