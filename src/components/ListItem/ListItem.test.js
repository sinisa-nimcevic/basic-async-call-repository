import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/stores/store';
import ListItem from './ListItem';

const dummyItem = {
  id: 1,
  title: 'Top Kek',
  isActive: false,
};

const renderWrapped = (children) => {
  return render(<Provider store={store}>{children}</Provider>);
};

describe('GIVEN ListItem', () => {
  describe('WHEN component is mounted', () => {
    it('THEN renders the component', () => {
      const { getByText } = renderWrapped(<ListItem item={dummyItem} />);
      expect(getByText(dummyItem.title)).toBeInTheDocument();
    });
  });
});
