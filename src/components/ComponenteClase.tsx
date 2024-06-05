import { memo } from "react";
import React, { Component } from "react";
class ComponenteClase extends Component {
  memo(function () {
    return <h1>Este es el componente clase</h1>;
  })
}
export default ComponenteClase;