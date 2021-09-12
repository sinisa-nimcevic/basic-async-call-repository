import reducer, { initialState, toggleSelectItem } from './projectDataSlice';

describe('GIVEN projectDataSlice', () => {
  describe('WHEN toggleSelectItem is dispatched', () => {
    it('THEN toggles the active state of a data item', () => {
      const dummyState = { ...initialState };
      dummyState.data = [
        {
          id: 1,
          title: 'top',
          isActive: false,
        },
        {
          id: 2,
          title: 'kek',
          isActive: false,
        },
      ];

      const expectedState = { ...dummyState };
      expectedState.data[1].isActive = true;

      expect(reducer(dummyState, toggleSelectItem(2))).toEqual(expectedState);
    });
  });
});
