import { render } from '@testing-library/react';

import App from './App';

describe('GIVEN App', () => {
  describe('WHEN App is mounted', () => {
    it('THEN displays the title "List view"', () => {
      const { getByText } = render(<App />);
      expect(getByText(/list view/i)).toBeInTheDocument();
    });
  });
});
