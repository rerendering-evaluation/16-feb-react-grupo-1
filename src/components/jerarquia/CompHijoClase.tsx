import { memo } from "react";
import React, { Component } from 'react';
interface ICompHijoClaseProps {
  texto: string;
}
export default class CompHijoClase extends Component<ICompHijoClaseProps> {
  //   constructor(props: ICompHijoClaseProps) {
  //     super(props)
  //   }
  memo(function () {
    const {
      texto
    } = this.props;
    console.log(this.props);
    return <div>{texto}</div>;
  })
}