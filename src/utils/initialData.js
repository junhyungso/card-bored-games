/* sample data store*/
export default {
    currentUserId: "manogya",

    about:"CardBored Games is an online encyclopedia of card and board games for users seeking game rules, strategies, an online community, and an access to online version of games. Initially developed during the COVID-19 crisis, we aimed to provide entertainment for those individuals required to stay in their households to ideally opt for time-burning activities such as card/web games. Our website provides rules and strategies for all kinds of card games and gives game suggestions based on the number of players and types of game desired. Additionally, we have an option for members to submit their own games and also anonymously vote on other games.",
  
    users: [
      {
        id: "Manogya",
        email: "manogya@bc.edu",
        photo: "/assets/user1.png",
        name: "MAch", // name displayed on application and friends list
      },
      {
        id: "Eric",
        email: "eric@bc.edu",
        photo: "/assets/user2.png",
        name: "Wangatang",
      },
      {
        id: "Jun",
        email: "jun@bc.edu",
        photo: "/assets/user3.png",
        name: "Junso7",
      },
      {
        id: "Kamil",
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
        totalPicks: 47770,
        gameTags: { tagOne: "speed", tagTwo: "competition", tagThree: "family" },
        gameName: "Uno",
        gameId: "unoId",
        photo: "/assets/uno.jpg",
        gameDescription:
        "An American shedding-type card game that is played with a specially printed deck. The game's general principles put it into the Crazy Eights family of card games, and it is similar to the traditional European game Mau-Mau.",
      gameRules:
        "The object of UNO is playing all the cards in your hand. When only one card is remaining, the cardholder must shout Uno! alerting others that he or she is down to the last card in his or her hand. A simple draw of cards determines the game's dealer; the person who chooses the card with the highest numerical value deals. If a player selects a non-numerical card, he or she returns it to the deck and chooses another. Each player is dealt seven cards at the game's start, with the remaining ones placed facedown to form a draw pile. The top card of the draw pile is turned over to begin a discard pile. The first player has to match the card in the discard pile either by number, color or word. For example, if the card played is a red 7, the next player must throw down a red card or a 7 of any color. The player can also play a Wild or a Wild Draw Four card, the latter only if he or she doesn't have a playable card in that color. If the player doesn't have a playable card, he or she must pick a card from the draw pile and play it, if possible. If the card plucked from the draw pile isn't playable, the next player must take his or her turn. When a player has one card left, he or she must yell Uno! If the player forgets, he or she has to pick two cards from the draw pile. So much for imminent victory. Once a player has no cards left, the hand is over. Points are scored, and the dealer doles out new hands to everyone. Scoring UNO is simple. When a player plays all his or her cards, the others count their points based on their remaining cards. Numbered cards are face value, colored special cards are worth 20 points and Wild cards are worth 50 points. The first player to play all of his or her cards receives points for the cards left in the opponents' hands. The first person to reach 500 points is declared the winner.",
      userGameVote: 1,
      gameStrategy:
        "Keeping track of what cards have been played will require you to pay attention to what is going on around you. Using your Skip and Reverse cards strategically will aid you in the one calling Uno instead of another player. You also have to pay attention to the number of cards each player has left in their hand. As with the Skip and Reverse card, the Draw-Two card also has to be played strategically. They are a perfect way to keep a player low on cards from winning that round. Try to hold onto the Wild card as long as you are able and not use it so soon for it may be wasted. Wild cards can be used at any point in the game no matter what has been played.",
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
        photo: "/assets/connect4.jpg",
        gameDescription:
          "A two-player connection board game in which the players first choose a color and then take turns dropping one colored disc from the top into a seven-column, six-row vertically suspended grid. The pieces fall straight down, occupying the lowest available space within the column.",
        gameRules: "https://service.mattel.com/instruction_sheets/42001pr.pdf", // we'll work on later
        userGameVote: 0
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
        photo: "/assets/battleship.png",
        gameDescription:
          "a strategy type guessing game for two players. It is played on ruled grids (paper or board) on which each player's fleet of ships (including battleships) are marked. The locations of the fleets are concealed from the other player. Players alternate turns calling shots at the other player's ships, and the objective of the game is to destroy the opposing player's fleet.",
        gameRules: "https://service.mattel.com/instruction_sheets/42001pr.pdf", // we'll work on later
        userGameVote: 0
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
        photo: "/assets/catan.jpg",
        gameDescription:
          "Players take on the roles of settlers, each attempting to build and develop holdings while trading and acquiring resources. Players gain points as their settlements grow; the first to reach a set number of points, typically 10, wins.",
        gameRules: "https://service.mattel.com/instruction_sheets/42001pr.pdf", // we'll work on later
        userGameVote: 0
      },
      {
        totalPicks: 3190,
        gameTags: { tagOne: "team", tagTwo: "competition", tagThree: "strategy" },
        gameName: "Codenames",
        gameId: "codenamesId",
        photo: "/assets/codenames.jpg",
        gameDescription:
          "Two teams compete by each having a spymaster give one-word clues that can point to multiple words on the board. The other players on the team attempt to guess their team's words while avoiding the words of the other team. In a variant with 2–3 players, one spymaster gives clues to the other player or players.",
        gameRules: "https://service.mattel.com/instruction_sheets/42001pr.pdf", // we'll work on later
        userGameVote: 0
      },
      {
        totalPicks: 5098,
        gameTags: { tagOne: "team", tagTwo: "competition", tagThree: "puzzle" },
        gameName: "Taboo",
        gameId: "tabooId",
        photo: "/assets/taboo.png",
        gameDescription:
          "The objective of the game is for a player to have their partners guess the word on the player's card without using the word itself or five additional words listed on the card.",
        gameRules: "https://service.mattel.com/instruction_sheets/42001pr.pdf", // we'll work on later
        userGameVote: 0
      },
      {
        totalPicks: 3255,
        gameTags: { tagOne: "puzzle", tagTwo: "lengthy", tagThree: "family" },
        gameName: "Clue",
        gameId: "clueId",
        photo: "/assets/clue.jpeg",
        gameDescription:
          "The object of the game is to determine who murdered the game's victim, where the crime took place, and which weapon was used. Each player assumes the role of one of the six suspects and attempts to deduce the correct answer by strategically moving around a game board representing the rooms of a mansion and collecting clues about the circumstances of the murder from the other players.",
        gameRules: "https://service.mattel.com/instruction_sheets/42001pr.pdf", // we'll work on later
        userGameVote: 0
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
        photo: "/assets/scrabble.png",
        gameDescription:
          "a word game in which two to four players score points by placing tiles, each bearing a single letter, onto a game board divided into a 15×15 grid of squares. The tiles must form words that, in crossword fashion, read left to right in rows or downward in columns, and be included in a standard dictionary or lexicon.",
        gameRules: "https://service.mattel.com/instruction_sheets/42001pr.pdf", // we'll work on later
        userGameVote: 0
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
        photo: "/assets/yahtzee.jpg",
        gameDescription:
          "The objective of the game is to score points by rolling five dice to make certain combinations. The dice can be rolled up to three times in a turn to try to make various scoring combinations and dice must remain in the box. A game consists of thirteen rounds. After each round the player chooses which scoring category is to be used for that round. Once a category has been used in the game, it cannot be used again. The scoring categories have varying point values, some of which are fixed values and others for which the score depends on the value of the dice. A Yahtzee is five-of-a-kind and scores 50 points, the highest of any category. The winner is the player who scores the most points.",
        gameRules: "https://service.mattel.com/instruction_sheets/42001pr.pdf", // we'll work on later
        userGameVote: 0
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
        photo: "/assets/monopoly.png",
        gameDescription:
          "In the game, players roll two six-sided dice to move around the game board, buying and trading properties, and developing them with houses and hotels. Players collect rent from their opponents, with the goal being to drive them into bankruptcy. Money can also be gained or lost through Chance and Community Chest cards, and tax squares; players can end up in jail, which they cannot move from until they have met one of several conditions.",
        gameRules: "https://service.mattel.com/instruction_sheets/42001pr.pdf", // we'll work on later
        userGameVote: 0
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
        photo: "/assets/secrethitler.jpg",
        gameDescription:
          "players assume the roles of liberals and fascists in the Reichstag of the Weimar Republic, with one player becoming Hitler. To win the game, both parties are set to competitively enact liberal and fascist policies, respectively, or complete a secondary objective directly involving Hitler.",
        gameRules: "https://service.mattel.com/instruction_sheets/42001pr.pdf", // we'll work on later
        userGameVote: 0
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
        photo: "/assets/risk.png",
        gameDescription:
          " Turn rotates among players who control armies of playing pieces with which they attempt to capture territories from other players, with results determined by dice rolls. Players may form and dissolve alliances during the course of the game. The goal of the game is to occupy every territory on the board and in doing so, eliminate the other players.",
        gameRules: "https://service.mattel.com/instruction_sheets/42001pr.pdf", // we'll work on later
        userGameVote: 0
      },
    ],
  };