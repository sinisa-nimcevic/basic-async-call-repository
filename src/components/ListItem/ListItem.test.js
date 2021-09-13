import { renderWrapped } from '../../services/testUtils';
import ListItem from './ListItem';

const dummyItem = {
  id: 1,
  title: 'Top Kek',
  isActive: false,
};

describe('GIVEN ListItem', () => {
  describe('WHEN component is mounted', () => {
    it('THEN renders the component', () => {
      const { getByText } = renderWrapped(<ListItem item={dummyItem} />);
      expect(getByText(dummyItem.title)).toBeInTheDocument();
    });
  });
});
