/* sample data store*/
export default {
    currentUserId: "manogya",
  
    users: [
      {
        id: "manogya",
        email: "manogya@bc.edu",
        photo: "/assets/user1.png",
        name: "MAch", // name displayed on application and friends list
      },
      {
        id: "eric",
        email: "eric@bc.edu",
        photo: "/assets/user2.png",
        name: "Wangatang",
      },
      {
        id: "jun",
        email: "jun@bc.edu",
        photo: "/assets/user3.png",
        name: "Junso7",
      },
      {
        id: "kamil",
        email: "kamil@bc.edu",
        photo: "/assets/user3.png",
        name: "kamilPis7",
      },
    ],
  
    friends: [
      // current friends across all users
      {
        userId: "manogya",
        friendId: "eric",
      },
      {
        userId: "manogya",
        friendId: "jun",
      },
      {
        userId: "manogya",
        friendId: "kamil",
      },
      {
        userId: "manogya",
        friendId: "jun",
      },
      {
        userId: "kamil",
        friendId: "eric",
      },
      {
        userId: "jun",
        friendId: "eric",
      },
      {
        userId: "kamil",
        friendId: "jun",
      },
    ],
  
    amountOfVotes: [
      //total votes of a game across all users
      {
        unoId: 3,
        connect4Id: 0,
        battleshipId: 0,
        catanId: 1,
        codenamesId: 2,
        tabooId: 1,
        clueId: 2,
        scrabbleId: 1,
        yahtzeeId: 0,
        monopolyId: 1,
        secrethitlerId: 4,
        riskId: 0,
      },
    ],
  
    games: [
      {
        totalPicks: 4770,
        gameTags: { tagOne: "speed", tagTwo: "competition", tagThree: "family" },
        gameName: "Uno",
        gameId: "unoId",
        gameDescription:
          "An American shedding-type card game that is played with a specially printed deck. The game's general principles put it into the Crazy Eights family of card games, and it is similar to the traditional European game Mau-Mau.",
        gameRules: "https://service.mattel.com/instruction_sheets/42001pr.pdf", // we'll work on later
      },
      {
        totalPicks: 2032,
        gameTags: {
          tagOne: "strategy",
          tagTwo: "competition",
          tagThree: "quick",
        },
        gameName: "Connect4",
        gameId: "connect4Id",
        gameDescription:
          "A two-player connection board game in which the players first choose a color and then take turns dropping one colored disc from the top into a seven-column, six-row vertically suspended grid. The pieces fall straight down, occupying the lowest available space within the column.",
        gameRules: "https://service.mattel.com/instruction_sheets/42001pr.pdf", // we'll work on later
      },
      {
        totalPicks: 543,
        gameTags: {
          tagOne: "strategy",
          tagTwo: "competition",
          tagThree: "family",
        },
        gameName: "Battleship",
        gameId: "battleshipId",
        gameDescription:
          "a strategy type guessing game for two players. It is played on ruled grids (paper or board) on which each player's fleet of ships (including battleships) are marked. The locations of the fleets are concealed from the other player. Players alternate turns calling shots at the other player's ships, and the objective of the game is to destroy the opposing player's fleet.",
        gameRules: "https://service.mattel.com/instruction_sheets/42001pr.pdf", // we'll work on later
      },
      {
        totalPicks: 791,
        gameTags: {
          tagOne: "strategy",
          tagTwo: "competition",
          tagThree: "family",
        },
        gameName: "Catan",
        gameId: "catanId",
        gameDescription:
          "Players take on the roles of settlers, each attempting to build and develop holdings while trading and acquiring resources. Players gain points as their settlements grow; the first to reach a set number of points, typically 10, wins.",
        gameRules: "https://service.mattel.com/instruction_sheets/42001pr.pdf", // we'll work on later
      },
      {
        totalPicks: 3190,
        gameTags: { tagOne: "team", tagTwo: "competition", tagThree: "strategy" },
        gameName: "Codenames",
        gameId: "codenamesId",
        gameDescription:
          "Two teams compete by each having a spymaster give one-word clues that can point to multiple words on the board. The other players on the team attempt to guess their team's words while avoiding the words of the other team. In a variant with 2–3 players, one spymaster gives clues to the other player or players.",
        gameRules: "https://service.mattel.com/instruction_sheets/42001pr.pdf", // we'll work on later
      },
      {
        totalPicks: 5098,
        gameTags: { tagOne: "team", tagTwo: "competition", tagThree: "puzzle" },
        gameName: "Taboo",
        gameId: "tabooId",
        gameDescription:
          "The objective of the game is for a player to have their partners guess the word on the player's card without using the word itself or five additional words listed on the card.",
        gameRules: "https://service.mattel.com/instruction_sheets/42001pr.pdf", // we'll work on later
      },
      {
        totalPicks: 3255,
        gameTags: { tagOne: "puzzle", tagTwo: "lengthy", tagThree: "family" },
        gameName: "Clue",
        gameId: "clueId",
        gameDescription:
          "The object of the game is to determine who murdered the game's victim, where the crime took place, and which weapon was used. Each player assumes the role of one of the six suspects and attempts to deduce the correct answer by strategically moving around a game board representing the rooms of a mansion and collecting clues about the circumstances of the murder from the other players.",
        gameRules: "https://service.mattel.com/instruction_sheets/42001pr.pdf", // we'll work on later
      },
      {
        totalPicks: 3893,
        gameTags: {
          tagOne: "strategy",
          tagTwo: "competition",
          tagThree: "quick",
        },
        gameName: "Scrabble",
        gameId: "scrabbleId",
        gameDescription:
          "a word game in which two to four players score points by placing tiles, each bearing a single letter, onto a game board divided into a 15×15 grid of squares. The tiles must form words that, in crossword fashion, read left to right in rows or downward in columns, and be included in a standard dictionary or lexicon.",
        gameRules: "https://service.mattel.com/instruction_sheets/42001pr.pdf", // we'll work on later
      },
      {
        totalPicks: 3373,
        gameTags: {
          tagOne: "family",
          tagTwo: "competition",
          tagThree: "lengthy",
        },
        gameName: "Yahtzee",
        gameId: "yahtzeeId",
        gameDescription:
          "The objective of the game is to score points by rolling five dice to make certain combinations. The dice can be rolled up to three times in a turn to try to make various scoring combinations and dice must remain in the box. A game consists of thirteen rounds. After each round the player chooses which scoring category is to be used for that round. Once a category has been used in the game, it cannot be used again. The scoring categories have varying point values, some of which are fixed values and others for which the score depends on the value of the dice. A Yahtzee is five-of-a-kind and scores 50 points, the highest of any category. The winner is the player who scores the most points.",
        gameRules: "https://service.mattel.com/instruction_sheets/42001pr.pdf", // we'll work on later
      },
      {
        totalPicks: 4546,
        gameTags: {
          tagOne: "competition",
          tagTwo: "strategy",
          tagThree: "family",
        },
        gameName: "Monopoly",
        gameId: "monopolyId",
        gameDescription:
          "In the game, players roll two six-sided dice to move around the game board, buying and trading properties, and developing them with houses and hotels. Players collect rent from their opponents, with the goal being to drive them into bankruptcy. Money can also be gained or lost through Chance and Community Chest cards, and tax squares; players can end up in jail, which they cannot move from until they have met one of several conditions.",
        gameRules: "https://service.mattel.com/instruction_sheets/42001pr.pdf", // we'll work on later
      },
      {
        totalPicks: 8621,
        gameTags: {
          tagOne: "quick",
          tagTwo: "strategy",
          tagThree: "competition",
        },
        gameName: "Secret Hitler",
        gameId: "secrethitlerId",
        gameDescription:
          "players assume the roles of liberals and fascists in the Reichstag of the Weimar Republic, with one player becoming Hitler. To win the game, both parties are set to competitively enact liberal and fascist policies, respectively, or complete a secondary objective directly involving Hitler.",
        gameRules: "https://service.mattel.com/instruction_sheets/42001pr.pdf", // we'll work on later
      },
      {
        totalPicks: 6398,
        gameTags: {
          tagOne: "strategy",
          tagTwo: "competition",
          tagThree: "lengthy",
        },
        gameName: "Risk",
        gameId: "riskId",
        gameDescription:
          " Turn rotates among players who control armies of playing pieces with which they attempt to capture territories from other players, with results determined by dice rolls. Players may form and dissolve alliances during the course of the game. The goal of the game is to occupy every territory on the board and in doing so, eliminate the other players.",
        gameRules: "https://service.mattel.com/instruction_sheets/42001pr.pdf", // we'll work on later
      },
    ],
  };