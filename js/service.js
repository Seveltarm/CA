class UserService {
    async fetchUsers() {
        const resp = await fetch(`https://steam-web-api-test.herokuapp.com/users`, {});
        return await resp.json();
    }
    async fetchSingleUser(userId) {
        const resp = await fetch(`https://steam-web-api-test.herokuapp.com/users/${userId}`, {});
        return await resp.json();
    }
}

if (typeof module !== 'undefined') { module.exports = { UserService } }
