import { memo } from "react";
const ComponenteFuncional = memo(() => {
  console.log(window.globalCount++);
  return <h1>Este es el componente funcional</h1>;
});
export default ComponenteFuncional;