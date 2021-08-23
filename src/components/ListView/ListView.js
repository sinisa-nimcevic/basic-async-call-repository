import React, { useEffect } from 'react';
import { useMachine } from '@xstate/react';
import { dataMachine, FETCH_COMMAND } from '../../machines/dataMachine';
import ListViewWithoutData from './ListViewWithoutData';

const ListView = () => {
  const [current, send] = useMachine(dataMachine);
  const loading = current.matches('loading');
  const error = current.matches('rejected');
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
