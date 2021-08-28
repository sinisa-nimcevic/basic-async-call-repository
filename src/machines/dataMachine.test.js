import { interpret } from 'xstate';
import { dataMachine, states, FETCH_COMMAND } from './dataMachine';

describe('dataMachine', () => {
  it(`is instantiated with the inital state being "${states.idle}"`, () => {
    const { initialState } = dataMachine;

    expect(initialState.value).toBe(states.idle);
  });

  it(`after being sent the command "${FETCH_COMMAND}", data is fetched`, () => {
    // Arrange.
    let dataFetched = false;
    const mockdataMachine = dataMachine.withConfig({
      services: {
        fetchData: (_, event) => {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve({ data: 'test' });
            }, 50);
          });
        },
      },
      actions: {
        setTestData: () => (dataFetched = true),
      },
    });

    // Prepare assert.
    const dataService = interpret(mockdataMachine).onTransition((state) => {
      if (state.matches(states.resolved)) {
        expect(dataFetched).toBeTruthy();
        done();
      }
    });

    // Act.
    dataService.start();
    dataService.send(FETCH_COMMAND);
  });

  it(`after being sent the command "${FETCH_COMMAND}", failiure is handled`, () => {
    // Arrange.
    let anErrorOccured = false;
    const mockdataMachine = dataMachine.withConfig({
      services: {
        fetchData: (_, event) => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              reject('an error has occured');
            }, 50);
          });
        },
      },
      actions: {
        setTestData: () => (anErrorOccured = true),
      },
    });

    // Prepare assert.
    const dataService = interpret(mockdataMachine).onTransition((state) => {
      if (state.matches(states.rejected)) {
        expect(anErrorOccured).toBeTruthy();
        done();
      }
    });

    // Act.
    dataService.start();
    dataService.send(FETCH_COMMAND);
  });
});
