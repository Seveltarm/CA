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

async function createGameData(games) {
    for (let game of games) {
        await userService.fetchUserGames(game.id).then((title) => {
            game.name = title[game.id].data?.name;
        });
    }
    sortByGameTime(games);
    getUserWholeGameTime(games);
}

function getUsersGames(userGames) {
    let ownedGamesByUsers = [];
    userGames.shift().filter(singleGame => {
        return userGames.map(mappedGames => {
            return mappedGames.filter(otherUserSingleGame => {
                if (otherUserSingleGame.appid === singleGame.appid) {
                    const gameData = {
                        id: singleGame.appid,
                        commonGameTime: otherUserSingleGame.playtime_forever + singleGame.playtime_forever
                    };
                    ownedGamesByUsers.push(gameData)
                }
            })
        })
    });
    createGameData(ownedGamesByUsers);

}

function sortByGameTime(games) {
    games.sort((a, b) => {
        return b.commonGameTime - a.commonGameTime;
    });
}

function getUserWholeGameTime(games) {
    for (let game of games) {
        console.log(`Game Time: ${game.name} `, game.commonGameTime);
    }
}
