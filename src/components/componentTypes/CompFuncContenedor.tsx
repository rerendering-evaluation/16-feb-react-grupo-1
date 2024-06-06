import { memo } from "react";
import React from 'react';
const CompFuncContenedor = memo(() => {
  console.log(window.globalCount++);
  // Gestión del estado
  // Pasaríamos información a nuestros componentes hijos
  return <div>CompFuncContenedor</div>;
});
export default CompFuncContenedor;