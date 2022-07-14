let userService = new UserService();
let fetchUserId = userService.fetchUsers();

fetchUserId.then((singleUser) => {
    let usersPromise = [];
    singleUser.map(userId => {
        usersPromise.push(userService.fetchSingleUser(userId));
    });

    Promise.all(usersPromise).then((userInfo) => {
        for (let user of userInfo) {
            console.log('Owned games: ', user.response.games);
        }

        let userGames = [];

        userInfo.forEach(user => {
            userGames.push(user.response.games)
        })
        getUsersGames(userGames);
    });
});

function createGameData(...games) {
    let gameData = {};
    for (let el of games) {
         gameData = {
            id: el.appid,
            commonGameTime: (gameData.commonGameTime ? gameData.commonGameTime : 0) + el.playtime_forever
        };
    }
    return gameData;
}


function getUsersGames(userGames) {
    let games = [];
    userGames.shift().filter(singleGame => {
        return userGames.map(mappedGames => {
            return mappedGames.filter(otherUserSingleGame => {
                if (otherUserSingleGame.appid === singleGame.appid) {
                    games.push(createGameData(singleGame, otherUserSingleGame));
                }
            })
        })
    });
    sortByGameTime(games);
    getUserWholeGameTime(games);
}

function sortByGameTime(games) {
    games.sort((a, b) => {
        return b.commonGameTime - a.commonGameTime;
    });
}

function getUserWholeGameTime(games) {
    for (let game of games) {
        console.log(`Game Time ${game.id}: `, game.commonGameTime);
    }
}
