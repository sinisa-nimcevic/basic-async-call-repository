import { render } from '@testing-library/react';
import dataService from './services/dataService';
import App from './App';

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

describe('GIVEN App', () => {
  describe('WHEN App is mounted', () => {
    it('THEN displays the title "List view"', () => {
      const mockDataServiceCall = jest.spyOn(dataService, 'getMyData');
      mockDataServiceCall.mockResolvedValue(mockGetMyData);

      const { getByText } = render(<App />);
      expect(getByText(/list view/i)).toBeInTheDocument();
    });
  });
});
