const userData = 'userData';
const json = jest.fn(() =>
  Promise.resolve(
    userData
  )
);

global.fetch = jest.fn(() =>
  Promise.resolve({
    json
  })
);

const { UserService } = require('./service.js');

beforeEach(() => {
  fetch.mockClear();
});

describe('UserService', () => {
  let users;

  beforeEach(() => {
    users = new UserService();
  });

  it('return users id', () => {
    return users.fetchUsers().then((data) => {
      expect(data).toBeTruthy();
    });
  });

  it('it should return user game', async () => {
    const userId = 'userId';

    const result = users.fetchSingleUser(userId);

    result.then((data) => {
      expect(data).toBe(userData);
    });

    expect(global.fetch).toBeCalledWith(`https://steam-web-api-test.herokuapp.com/users/${userId}`, {});

    expect(await json).toBeCalled();
  });
})
