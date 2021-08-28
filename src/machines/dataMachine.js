import { assign, createMachine } from 'xstate';
import { getMyData } from '../services/dataService';

export const FETCH_COMMAND = 'FETCH';
export const states = {
  idle: 'idle',
  loading: 'loading',
  resolved: 'resolved',
  rejected: 'rejected',
};

export const dataMachine = createMachine({
  id: 'Data API ',
  initial: states.idle,
  context: {
    data: [],
  },
  states: {
    idle: {
      on: {
        [FETCH_COMMAND]: states.loading,
      },
    },
    loading: {
      invoke: {
        id: 'fetchData',
        src: async (_, e) => {
          const result = await getMyData();
          return result.data;
        },
        onDone: {
          target: states.resolved,
          actions: assign({
            data: (_, e) => e.data,
          }),
        },
        onError: states.rejected,
      },
      on: {
        CANCEL: states.idle,
      },
    },
    resolved: {
      type: 'final',
    },
    rejected: {
      on: {
        [FETCH_COMMAND]: states.loading,
      },
    },
  },
});
