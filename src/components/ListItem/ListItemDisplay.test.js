import { fireEvent, render } from '@testing-library/react';
import { toMatchDiffSnapshot } from 'snapshot-diff';
import ListItemDisplay from './ListItemDisplay';

expect.extend({ toMatchDiffSnapshot });

const dummyItem = {
  id: 1,
  title: 'Dummy item',
  isActive: false,
};

const dummyItemActive = {
  ...dummyItem,
  isActive: true,
};

const dummyHandleClick = jest.fn();

describe('GIVEN ListItemDisplay', () => {
  describe('WHEN is rendered', () => {
    it('THEN displays item id and title', () => {
      const { getByText } = render(
        <ListItemDisplay item={dummyItem} handleClick={dummyHandleClick} />
      );

      expect(getByText(dummyItem.id)).toBeInTheDocument();
      expect(getByText(dummyItem.title)).toBeInTheDocument();
    });
  });

  describe('WHEN isActive is false', () => {
    it('THEN has different snapshot to isActive true', () => {
      const a = render(<ListItemDisplay item={dummyItem} handleClick={dummyHandleClick} />);
      const b = render(<ListItemDisplay item={dummyItemActive} handleClick={dummyHandleClick} />);

      expect(a).toMatchDiffSnapshot(b);
    });
  });

  describe('WHEN item is clicked', () => {
    it('THEN calls handleClick once', () => {
      const { getByText } = render(
        <ListItemDisplay item={dummyItem} handleClick={dummyHandleClick} />
      );
      fireEvent.click(getByText(dummyItem.title));
      expect(dummyHandleClick).toHaveBeenCalledTimes(1);
    });
  });
});
