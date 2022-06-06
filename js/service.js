class UsersGameTime {
    async fetchUsers() {
        const resp = await fetch(`https://steam-web-api-test.herokuapp.com/users`, {});
        const usersId = await resp.json();

        return usersId;
    }
    async fetchSingleUser(userId) {
        const resp = await fetch(`https://steam-web-api-test.herokuapp.com/users/${userId}`, {});
        const userData = await resp.json();

        return userData;
    }
}

if (typeof module !== 'undefined') { module.exports = { UsersGameTime } };