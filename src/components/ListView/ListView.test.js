import { fireEvent, render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { toMatchDiffSnapshot } from 'snapshot-diff';
import store from '../../redux/stores/store';
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

jest.mock('../../services/dataService', () => {
  return {
    getMyData: () => {
      return {
        data: dummyItems,
        error: null,
      };
    },
  };
});

const renderWrapped = (children) => {
  return render(<Provider store={store}>{children}</Provider>);
};

describe('GIVEN ListView', () => {
  describe('WHEN component is mounted', () => {
    it('THEN renders all of the dummy items', async () => {
      const { getByText } = renderWrapped(<ListView />);

      for (let i = 0; i < dummyItems.length; i++) {
        await waitFor(() => {
          expect(getByText(dummyItems[i].title)).toBeInTheDocument();
        });
      }
    });
  });

  describe('WHEN an item is clicked', () => {
    it('THEN becomes active', async () => {
      const { findByTestId, getByTestId } = renderWrapped(<ListView />);
      const testid = `list-item-display-${dummyItems[1].id}`;

      const testItem = await findByTestId(testid);
      const snapshotA = testItem.cloneNode(true);
      fireEvent.click(testItem);

      expect(snapshotA).toMatchDiffSnapshot(getByTestId(testid));
    });
  });
});
