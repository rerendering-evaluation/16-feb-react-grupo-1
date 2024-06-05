import { memo } from "react";
import React from "react";
class ComponentePuro extends React.PureComponent {
  // Este componente se encarga únicamente de la vista
  memo(function () {
    return <div>Componente Puro</div>;
  })
}