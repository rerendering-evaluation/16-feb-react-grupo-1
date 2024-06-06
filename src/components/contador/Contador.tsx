import { useCallback } from "react";
import React, { useState } from "react";
import BotonesContador from "./BotonesContador";
import DisplayContador from "./DisplayContador";
type TContadorProps = {
  initialValue?: number;
};
const Contador = ({
  initialValue
}: TContadorProps) => {
  console.log(window.globalCount++);
  const [valor, setValor] = useState(initialValue || 0);
  const restaValor = useCallback((cant: number = 1) => {
    setValor(anteriorvalor => anteriorvalor - cant);
  }, [setValor]);
  const sumaValor = useCallback((cant: number = 1) => {
    setValor(anteriorvalor => anteriorvalor + cant);
  }, [setValor]);
  return <>
            <DisplayContador valor={valor} />
            <BotonesContador restaValor={restaValor} sumaValor={sumaValor} />
        </>;
};
export default Contador;