import { renderWrapped } from '../../services/testUtils';
import ListViewDisplay from './ListViewDisplay';

const dummyData = [
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

describe('GIVEN ListVIewDisplay', () => {
  describe('WHEN component is mounted', () => {
    it('THEN renders provided components', () => {
      const { getByText } = renderWrapped(<ListViewDisplay data={dummyData} />);
      for (let i = 0; i < dummyData.length; i++) {
        expect(getByText(dummyData[i].title)).toBeInTheDocument();
      }
    });
  });
});
