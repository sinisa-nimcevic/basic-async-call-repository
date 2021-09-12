import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/stores/store';

export const renderWrapped = (children) => {
  return render(<Provider store={store}>{children}</Provider>);
};
