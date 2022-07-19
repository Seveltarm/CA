const api = 'https://steam-web-api-test.herokuapp.com';

class UserService {
    async fetchUsers() {
        const resp = await fetch(`${api}/users`);
        return await resp.json();
    }

    async fetchSingleUser(userId) {
        const resp = await fetch(`${api}/users/${userId}`);
        return await resp.json();
    }

    async fetchUserGames(gameId) {
        const resp = await fetch(`${api}/games/${gameId}`);
        return await resp.json();
    }
}

if (typeof module !== 'undefined') { module.exports = { UserService } }
