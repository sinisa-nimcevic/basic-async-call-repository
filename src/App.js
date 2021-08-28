import { useMachine } from '@xstate/react';
import DataItemCounter from './components/DataItemCounter/DataItemCounter';
import ListView from './components/ListView/ListView';
import GlobalStateContext from './contexts/globalStateContext';
import { dataMachine } from './machines/dataMachine';

function App() {
  const stateMachine = useMachine(dataMachine);

  return (
    <GlobalStateContext.Provider value={stateMachine}>
      <div className="App">
        <ListView />
        <DataItemCounter />
      </div>
    </GlobalStateContext.Provider>
  );
}

export default App;
