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
    if (typeof miVariable.value === "undefined") return;
    console.log("miVariable ha cambiado");
  }, [miVariable.value]);
  const updateVar = () => {
    miVariable.current = (() => {
      if (typeof val === "undefined") return true;
      return !val;
    })();
  };
  return <div>
            <button onClick={updateVar}>Actualiza</button>
        </div>;
});
export default CompFuncCicloVida;