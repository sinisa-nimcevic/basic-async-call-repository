import React, { useContext } from 'react';
import GlobalStateContext from '../../contexts/globalStateContext';

const DataItemCounter = () => {
  const globalState = useContext(GlobalStateContext);
  const [current] = globalState;
  const { data } = current.context;

  return <>Currently loaded: {data.length}</>;
};

export default DataItemCounter;
