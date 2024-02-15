const haveSameHeightPlayer = (team1, team2) => {
    for (let height1 of team1) {
    for (let height2 of team2) {
      if (height1 === height2) {
        return true;
      }
    }
    }
    return false;
    }
    
    let team1 = [180, 185, 190, 175, 170];
    let team2 = [172, 165, 190, 185, 168];
    
    if (haveSameHeightPlayer(team1, team2)) {
    console.log("В командах есть игроки одинакового роста");
    } else {
    console.log("В командах нет игроков одинакового роста");
    }