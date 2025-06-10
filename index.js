let profileWins = 200
let profileDefeats = 11
let rankPoints = rankedCalculator(profileWins, profileDefeats)


function rankedCalculator(wins, losts){
    let finalResult = wins - losts
    return finalResult
}

function ranksSettings(points){
    let ranks = [
        ["Ferro", 10],
        ["Bronze", 20],
        ["Prata", 50],
        ["Ouro", 80],
        ["Diamante", 90],
        ["Lendario", 100],
        ["Imortal", 101]
    ]

    let rank = "Sem Rank"

    for(var r = 0; r < ranks.length; r++){
        if(points <= ranks[r][1]){
            rank = ranks[r][0]
            break
        }
    }

    if (points > ranks[ranks.length - 1][1]) {
    rank = ranks[ranks.length - 1][0];
    }

    return rank
}

console.log(`O Herói tem de saldo de ${rankPoints} está no nível de ${ranksSettings(rankPoints)}`)
