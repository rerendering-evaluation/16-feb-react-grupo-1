import { memo } from "react";
import React from "react";
interface IBotonesProps {
  restaValor: (cant?: number) => void;
  sumaValor: (cant?: number) => void;
}
const BotonesContador = memo(({
  restaValor,
  sumaValor
}: IBotonesProps) => {
  console.log(window.globalCount++);
  return <div>
            <button onClick={() => restaValor(5)}>Menos 5</button>
            <button onClick={() => restaValor()}>Menos</button>
            <button onClick={() => sumaValor()}>Más</button>
            <button onClick={() => sumaValor(5)}>Más 5</button>
        </div>;
});
export default BotonesContador;