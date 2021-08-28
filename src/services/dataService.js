import { nanoid } from 'nanoid';

const { loremIpsum } = require('lorem-ipsum');

const mockData = [];

for (let i = 0; i < 40; i++) {
  mockData.push({
    id: nanoid(),
    title: loremIpsum(),
  });
}

export const getMyData = () => {
  const fakeAPIReply = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: mockData,
        error: null,
      });
    }, 300);
  });

  return fakeAPIReply;
};
