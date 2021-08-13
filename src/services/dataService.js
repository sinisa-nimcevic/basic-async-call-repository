const { loremIpsum } = require('lorem-ipsum');

const mockData = [];

for (let i = 1; i < 40; i++) {
  mockData.push({
    id: i,
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
