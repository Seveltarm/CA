let allUsers = new UsersGameTime();
let usersId = allUsers.fetchUsers();

usersId.then((singleUser) => {
    singleUser.map((singleId) => {
        allUsers.fetchSingleUser(singleId).then((userInfo) => {
            if (userInfo.response) {
                getUserGamesInformation(userInfo);
            }
        })
    })
})

function getUserGamesInformation(userInfo) {
    let userGames = [];
    if (userInfo.response.games) {
        for (const [key] of Object.entries(userInfo.response.games)) {
            userGames.push({
                gameId: userInfo.response.games[key].appid,
                gameTime: userInfo.response.games[key].playtime_forever
            });
        }
        sortByGameTime(userGames);
        getUserWholeGameTime(userGames);
    }
}

function sortByGameTime(userGames) {
    userGames.sort((a, b) => {
        return b.gameTime - a.gameTime;
    });
    console.log('User Games: ', userGames);
}

function getUserWholeGameTime(userGames) {
    let time = 0;
    userGames.forEach((game) => {
        return time += game.gameTime
    });
    console.log('Game Time: ', time);
}
