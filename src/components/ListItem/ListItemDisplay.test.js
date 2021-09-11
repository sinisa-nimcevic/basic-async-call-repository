import { fireEvent, render, screen } from '@testing-library/react';
import ListItemDisplay from './ListItemDisplay';

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
  describe('WHEN isActive is false', () => {
    it('THEN has proper classes assigned', () => {
      const item = render(<ListItemDisplay item={dummyItem} handleClick={dummyHandleClick} />);
      expect(item).toMatchInlineSnapshot(`
        Object {
          "asFragment": [Function],
          "baseElement": <body>
            <div>
              <li
                class="list-item"
              >
                <span
                  class="list-item__id"
                >
                  1
                </span>
                <span
                  class="list-item__content"
                >
                  Dummy item
                </span>
              </li>
            </div>
          </body>,
          "container": <div>
            <li
              class="list-item"
            >
              <span
                class="list-item__id"
              >
                1
              </span>
              <span
                class="list-item__content"
              >
                Dummy item
              </span>
            </li>
          </div>,
          "debug": [Function],
          "findAllByAltText": [Function],
          "findAllByDisplayValue": [Function],
          "findAllByLabelText": [Function],
          "findAllByPlaceholderText": [Function],
          "findAllByRole": [Function],
          "findAllByTestId": [Function],
          "findAllByText": [Function],
          "findAllByTitle": [Function],
          "findByAltText": [Function],
          "findByDisplayValue": [Function],
          "findByLabelText": [Function],
          "findByPlaceholderText": [Function],
          "findByRole": [Function],
          "findByTestId": [Function],
          "findByText": [Function],
          "findByTitle": [Function],
          "getAllByAltText": [Function],
          "getAllByDisplayValue": [Function],
          "getAllByLabelText": [Function],
          "getAllByPlaceholderText": [Function],
          "getAllByRole": [Function],
          "getAllByTestId": [Function],
          "getAllByText": [Function],
          "getAllByTitle": [Function],
          "getByAltText": [Function],
          "getByDisplayValue": [Function],
          "getByLabelText": [Function],
          "getByPlaceholderText": [Function],
          "getByRole": [Function],
          "getByTestId": [Function],
          "getByText": [Function],
          "getByTitle": [Function],
          "queryAllByAltText": [Function],
          "queryAllByDisplayValue": [Function],
          "queryAllByLabelText": [Function],
          "queryAllByPlaceholderText": [Function],
          "queryAllByRole": [Function],
          "queryAllByTestId": [Function],
          "queryAllByText": [Function],
          "queryAllByTitle": [Function],
          "queryByAltText": [Function],
          "queryByDisplayValue": [Function],
          "queryByLabelText": [Function],
          "queryByPlaceholderText": [Function],
          "queryByRole": [Function],
          "queryByTestId": [Function],
          "queryByText": [Function],
          "queryByTitle": [Function],
          "rerender": [Function],
          "unmount": [Function],
        }
      `);
    });
  });
  describe('WHEN isActive is true', () => {
    it('THEN has proper classes assigned', () => {
      const item = render(
        <ListItemDisplay item={dummyItemActive} handleClick={dummyHandleClick} />
      );
      expect(item).toMatchInlineSnapshot(`
            Object {
              "asFragment": [Function],
              "baseElement": <body>
                <div>
                  <li
                    class="list-item list-item--active"
                  >
                    <span
                      class="list-item__id"
                    >
                      1
                    </span>
                    <span
                      class="list-item__content"
                    >
                      Dummy item
                    </span>
                  </li>
                </div>
              </body>,
              "container": <div>
                <li
                  class="list-item list-item--active"
                >
                  <span
                    class="list-item__id"
                  >
                    1
                  </span>
                  <span
                    class="list-item__content"
                  >
                    Dummy item
                  </span>
                </li>
              </div>,
              "debug": [Function],
              "findAllByAltText": [Function],
              "findAllByDisplayValue": [Function],
              "findAllByLabelText": [Function],
              "findAllByPlaceholderText": [Function],
              "findAllByRole": [Function],
              "findAllByTestId": [Function],
              "findAllByText": [Function],
              "findAllByTitle": [Function],
              "findByAltText": [Function],
              "findByDisplayValue": [Function],
              "findByLabelText": [Function],
              "findByPlaceholderText": [Function],
              "findByRole": [Function],
              "findByTestId": [Function],
              "findByText": [Function],
              "findByTitle": [Function],
              "getAllByAltText": [Function],
              "getAllByDisplayValue": [Function],
              "getAllByLabelText": [Function],
              "getAllByPlaceholderText": [Function],
              "getAllByRole": [Function],
              "getAllByTestId": [Function],
              "getAllByText": [Function],
              "getAllByTitle": [Function],
              "getByAltText": [Function],
              "getByDisplayValue": [Function],
              "getByLabelText": [Function],
              "getByPlaceholderText": [Function],
              "getByRole": [Function],
              "getByTestId": [Function],
              "getByText": [Function],
              "getByTitle": [Function],
              "queryAllByAltText": [Function],
              "queryAllByDisplayValue": [Function],
              "queryAllByLabelText": [Function],
              "queryAllByPlaceholderText": [Function],
              "queryAllByRole": [Function],
              "queryAllByTestId": [Function],
              "queryAllByText": [Function],
              "queryAllByTitle": [Function],
              "queryByAltText": [Function],
              "queryByDisplayValue": [Function],
              "queryByLabelText": [Function],
              "queryByPlaceholderText": [Function],
              "queryByRole": [Function],
              "queryByTestId": [Function],
              "queryByText": [Function],
              "queryByTitle": [Function],
              "rerender": [Function],
              "unmount": [Function],
            }
          `);
    });
  });
  describe('WHEN item is clicked', () => {
    it('THEN calls handleClick once', () => {
      render(<ListItemDisplay item={dummyItem} handleClick={dummyHandleClick} />);
      fireEvent.click(screen.getByText(dummyItem.title));
      expect(dummyHandleClick).toHaveBeenCalledTimes(1);
    });
  });
});
