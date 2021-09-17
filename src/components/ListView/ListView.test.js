import { waitFor } from '@testing-library/react';
import { toMatchDiffSnapshot } from 'snapshot-diff';
import dataService from '../../services/dataService';
import { renderWrapped } from '../../services/testUtils';
import ListView from './ListView';

expect.extend({ toMatchDiffSnapshot });

const dummyItems = [
  {
    id: 1,
    title: 'Top',
    isActive: false,
  },
  {
    id: 2,
    title: 'Kek',
    isActive: false,
  },
  {
    id: 3,
    title: 'Test',
    isActive: false,
  },
];

const mockGetMyData = {
  data: dummyItems,
  error: null,
};

describe('GIVEN ListView', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.spyOn(dataService, 'getMyData').mockResolvedValue(mockGetMyData);
  });

  describe('WHEN component is mounted', () => {
    it('THEN starts loading data', () => {
      const { getByTestId } = renderWrapped(<ListView />);

      expect(getByTestId('loading-indicator')).toBeInTheDocument();
    });

    it('THEN renders all of the dummy items', async () => {
      const { getByText } = renderWrapped(<ListView />);

      for (let i = 0; i < dummyItems.length; i++) {
        await waitFor(() => {
          expect(getByText(dummyItems[i].title)).toBeInTheDocument();
        });
      }
    });

    it('THEN displays an error if the API returns an error', async () => {
      jest.spyOn(dataService, 'getMyData').mockRejectedValueOnce({ data: [], error: true });

      const { getByTestId } = renderWrapped(<ListView />);

      await waitFor(() => {
        expect(getByTestId('error-msg')).toBeInTheDocument();
      });
    });
  });

  /*  Bringing this test in would make the ListItem test
      checking for the active change unnecesary. This test
      would be written in a top-down approach.
  */
  // describe('WHEN an item is clicked', () => {
  //   it('THEN becomes active', async () => {
  //     const { findByTestId, getByTestId } = renderWrapped(<ListView />);
  //     const testid = `list-item-display-${dummyItems[1].id}`;

  //     const testItem = await findByTestId(testid);
  //     const snapshotA = testItem.cloneNode(true);
  //     fireEvent.click(testItem);

  //     expect(snapshotA).toMatchDiffSnapshot(getByTestId(testid));
  //   });
  // });
});
