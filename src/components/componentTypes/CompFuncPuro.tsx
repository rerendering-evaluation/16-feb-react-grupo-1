import React from 'react';
const CompFuncPuro = React.memo(() => {
  console.log(window.globalCount++);
  return <div>CompFuncPuro</div>;
});
export default CompFuncPuro;