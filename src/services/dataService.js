const { loremIpsum } = require('lorem-ipsum');

const mockData = [];

for (let i = 1; i < 18; i++) {
  mockData.push({
    id: i,
    title: loremIpsum(),
    isActive: false,
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
