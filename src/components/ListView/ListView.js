import React, { useEffect } from 'react';
import ListViewWithoutData from './ListViewWithoutData';
import { dataMachine, FETCH_COMMAND, states } from '../../machines/dataMachine';
import { useMachine } from '@xstate/react';

const ListView = () => {
  const [current, send] = useMachine(dataMachine);
  const loading = current.matches(states.loading);
  const error = current.matches(states.rejected);
  const { data } = current.context;

  useEffect(() => {
    send(FETCH_COMMAND);
  }, [send]);

  return (
    <>
      <h3>List view</h3>
      {loading && <>loading...</>}
      {error && <>error...</>}
      <ListViewWithoutData data={data} />
    </>
  );
};

export default ListView;
