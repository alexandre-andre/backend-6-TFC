const mockMatchesFinisheds = [
  {
      "id": 1,
      "homeTeam": 16,
      "homeTeamGoals": 1,
      "awayTeam": 8,
      "awayTeamGoals": 1,
      "inProgress": false,
      "home_team": 16,
      "away_team": 8,
      "teamHome": {
          "teamName": "São Paulo"
      },
      "teamAway": {
          "teamName": "Grêmio"
      }
  },
  {
      "id": 2,
      "homeTeam": 9,
      "homeTeamGoals": 1,
      "awayTeam": 14,
      "awayTeamGoals": 1,
      "inProgress": false,
      "home_team": 9,
      "away_team": 14,
      "teamHome": {
          "teamName": "Internacional"
      },
      "teamAway": {
          "teamName": "Santos"
      }
  },
  {
      "id": 3,
      "homeTeam": 4,
      "homeTeamGoals": 3,
      "awayTeam": 11,
      "awayTeamGoals": 0,
      "inProgress": false,
      "home_team": 4,
      "away_team": 11,
      "teamHome": {
          "teamName": "Corinthians"
      },
      "teamAway": {
          "teamName": "Napoli-SC"
      }
  },
  {
      "id": 4,
      "homeTeam": 3,
      "homeTeamGoals": 0,
      "awayTeam": 2,
      "awayTeamGoals": 0,
      "inProgress": false,
      "home_team": 3,
      "away_team": 2,
      "teamHome": {
          "teamName": "Botafogo"
      },
      "teamAway": {
          "teamName": "Bahia"
      }
  },
  {
      "id": 5,
      "homeTeam": 7,
      "homeTeamGoals": 1,
      "awayTeam": 10,
      "awayTeamGoals": 1,
      "inProgress": false,
      "home_team": 7,
      "away_team": 10,
      "teamHome": {
          "teamName": "Flamengo"
      },
      "teamAway": {
          "teamName": "Minas Brasília"
      }
  },
  {
      "id": 6,
      "homeTeam": 5,
      "homeTeamGoals": 1,
      "awayTeam": 13,
      "awayTeamGoals": 1,
      "inProgress": false,
      "home_team": 5,
      "away_team": 13,
      "teamHome": {
          "teamName": "Cruzeiro"
      },
      "teamAway": {
          "teamName": "Real Brasília"
      }
  },
  {
      "id": 7,
      "homeTeam": 12,
      "homeTeamGoals": 2,
      "awayTeam": 6,
      "awayTeamGoals": 2,
      "inProgress": false,
      "home_team": 12,
      "away_team": 6,
      "teamHome": {
          "teamName": "Palmeiras"
      },
      "teamAway": {
          "teamName": "Ferroviária"
      }
  },
  {
      "id": 8,
      "homeTeam": 15,
      "homeTeamGoals": 0,
      "awayTeam": 1,
      "awayTeamGoals": 1,
      "inProgress": false,
      "home_team": 15,
      "away_team": 1,
      "teamHome": {
          "teamName": "São José-SP"
      },
      "teamAway": {
          "teamName": "Avaí/Kindermann"
      }
  },
  {
      "id": 9,
      "homeTeam": 1,
      "homeTeamGoals": 0,
      "awayTeam": 12,
      "awayTeamGoals": 3,
      "inProgress": false,
      "home_team": 1,
      "away_team": 12,
      "teamHome": {
          "teamName": "Avaí/Kindermann"
      },
      "teamAway": {
          "teamName": "Palmeiras"
      }
  },
  {
      "id": 10,
      "homeTeam": 2,
      "homeTeamGoals": 0,
      "awayTeam": 9,
      "awayTeamGoals": 2,
      "inProgress": false,
      "home_team": 2,
      "away_team": 9,
      "teamHome": {
          "teamName": "Bahia"
      },
      "teamAway": {
          "teamName": "Internacional"
      }
  },
  {
      "id": 11,
      "homeTeam": 13,
      "homeTeamGoals": 1,
      "awayTeam": 3,
      "awayTeamGoals": 0,
      "inProgress": false,
      "home_team": 13,
      "away_team": 3,
      "teamHome": {
          "teamName": "Real Brasília"
      },
      "teamAway": {
          "teamName": "Botafogo"
      }
  },
  {
      "id": 12,
      "homeTeam": 6,
      "homeTeamGoals": 0,
      "awayTeam": 4,
      "awayTeamGoals": 1,
      "inProgress": false,
      "home_team": 6,
      "away_team": 4,
      "teamHome": {
          "teamName": "Ferroviária"
      },
      "teamAway": {
          "teamName": "Corinthians"
      }
  },
  {
      "id": 13,
      "homeTeam": 8,
      "homeTeamGoals": 2,
      "awayTeam": 5,
      "awayTeamGoals": 1,
      "inProgress": false,
      "home_team": 8,
      "away_team": 5,
      "teamHome": {
          "teamName": "Grêmio"
      },
      "teamAway": {
          "teamName": "Cruzeiro"
      }
  },
  {
      "id": 14,
      "homeTeam": 14,
      "homeTeamGoals": 2,
      "awayTeam": 16,
      "awayTeamGoals": 1,
      "inProgress": false,
      "home_team": 14,
      "away_team": 16,
      "teamHome": {
          "teamName": "Santos"
      },
      "teamAway": {
          "teamName": "São Paulo"
      }
  },
  {
      "id": 15,
      "homeTeam": 10,
      "homeTeamGoals": 0,
      "awayTeam": 15,
      "awayTeamGoals": 1,
      "inProgress": false,
      "home_team": 10,
      "away_team": 15,
      "teamHome": {
          "teamName": "Minas Brasília"
      },
      "teamAway": {
          "teamName": "São José-SP"
      }
  },
  {
      "id": 16,
      "homeTeam": 11,
      "homeTeamGoals": 0,
      "awayTeam": 7,
      "awayTeamGoals": 0,
      "inProgress": false,
      "home_team": 11,
      "away_team": 7,
      "teamHome": {
          "teamName": "Napoli-SC"
      },
      "teamAway": {
          "teamName": "Flamengo"
      }
  },
  {
      "id": 17,
      "homeTeam": 1,
      "homeTeamGoals": 2,
      "awayTeam": 8,
      "awayTeamGoals": 3,
      "inProgress": false,
      "home_team": 1,
      "away_team": 8,
      "teamHome": {
          "teamName": "Avaí/Kindermann"
      },
      "teamAway": {
          "teamName": "Grêmio"
      }
  },
  {
      "id": 18,
      "homeTeam": 12,
      "homeTeamGoals": 4,
      "awayTeam": 5,
      "awayTeamGoals": 2,
      "inProgress": false,
      "home_team": 12,
      "away_team": 5,
      "teamHome": {
          "teamName": "Palmeiras"
      },
      "teamAway": {
          "teamName": "Cruzeiro"
      }
  },
  {
      "id": 19,
      "homeTeam": 11,
      "homeTeamGoals": 2,
      "awayTeam": 2,
      "awayTeamGoals": 2,
      "inProgress": false,
      "home_team": 11,
      "away_team": 2,
      "teamHome": {
          "teamName": "Napoli-SC"
      },
      "teamAway": {
          "teamName": "Bahia"
      }
  },
  {
      "id": 20,
      "homeTeam": 7,
      "homeTeamGoals": 0,
      "awayTeam": 9,
      "awayTeamGoals": 1,
      "inProgress": false,
      "home_team": 7,
      "away_team": 9,
      "teamHome": {
          "teamName": "Flamengo"
      },
      "teamAway": {
          "teamName": "Internacional"
      }
  },
  {
      "id": 21,
      "homeTeam": 6,
      "homeTeamGoals": 3,
      "awayTeam": 13,
      "awayTeamGoals": 1,
      "inProgress": false,
      "home_team": 6,
      "away_team": 13,
      "teamHome": {
          "teamName": "Ferroviária"
      },
      "teamAway": {
          "teamName": "Real Brasília"
      }
  },
  {
      "id": 22,
      "homeTeam": 4,
      "homeTeamGoals": 3,
      "awayTeam": 3,
      "awayTeamGoals": 1,
      "inProgress": false,
      "home_team": 4,
      "away_team": 3,
      "teamHome": {
          "teamName": "Corinthians"
      },
      "teamAway": {
          "teamName": "Botafogo"
      }
  },
  {
      "id": 23,
      "homeTeam": 15,
      "homeTeamGoals": 2,
      "awayTeam": 16,
      "awayTeamGoals": 3,
      "inProgress": false,
      "home_team": 15,
      "away_team": 16,
      "teamHome": {
          "teamName": "São José-SP"
      },
      "teamAway": {
          "teamName": "São Paulo"
      }
  },
  {
      "id": 24,
      "homeTeam": 10,
      "homeTeamGoals": 2,
      "awayTeam": 14,
      "awayTeamGoals": 2,
      "inProgress": false,
      "home_team": 10,
      "away_team": 14,
      "teamHome": {
          "teamName": "Minas Brasília"
      },
      "teamAway": {
          "teamName": "Santos"
      }
  },
  {
      "id": 25,
      "homeTeam": 2,
      "homeTeamGoals": 0,
      "awayTeam": 6,
      "awayTeamGoals": 1,
      "inProgress": false,
      "home_team": 2,
      "away_team": 6,
      "teamHome": {
          "teamName": "Bahia"
      },
      "teamAway": {
          "teamName": "Ferroviária"
      }
  },
  {
      "id": 26,
      "homeTeam": 13,
      "homeTeamGoals": 1,
      "awayTeam": 1,
      "awayTeamGoals": 0,
      "inProgress": false,
      "home_team": 13,
      "away_team": 1,
      "teamHome": {
          "teamName": "Real Brasília"
      },
      "teamAway": {
          "teamName": "Avaí/Kindermann"
      }
  },
  {
      "id": 27,
      "homeTeam": 5,
      "homeTeamGoals": 1,
      "awayTeam": 15,
      "awayTeamGoals": 2,
      "inProgress": false,
      "home_team": 5,
      "away_team": 15,
      "teamHome": {
          "teamName": "Cruzeiro"
      },
      "teamAway": {
          "teamName": "São José-SP"
      }
  },
  {
      "id": 28,
      "homeTeam": 16,
      "homeTeamGoals": 3,
      "awayTeam": 7,
      "awayTeamGoals": 0,
      "inProgress": false,
      "home_team": 16,
      "away_team": 7,
      "teamHome": {
          "teamName": "São Paulo"
      },
      "teamAway": {
          "teamName": "Flamengo"
      }
  },
  {
      "id": 29,
      "homeTeam": 9,
      "homeTeamGoals": 0,
      "awayTeam": 4,
      "awayTeamGoals": 4,
      "inProgress": false,
      "home_team": 9,
      "away_team": 4,
      "teamHome": {
          "teamName": "Internacional"
      },
      "teamAway": {
          "teamName": "Corinthians"
      }
  },
  {
      "id": 30,
      "homeTeam": 3,
      "homeTeamGoals": 0,
      "awayTeam": 12,
      "awayTeamGoals": 4,
      "inProgress": false,
      "home_team": 3,
      "away_team": 12,
      "teamHome": {
          "teamName": "Botafogo"
      },
      "teamAway": {
          "teamName": "Palmeiras"
      }
  },
  {
      "id": 31,
      "homeTeam": 8,
      "homeTeamGoals": 2,
      "awayTeam": 10,
      "awayTeamGoals": 0,
      "inProgress": false,
      "home_team": 8,
      "away_team": 10,
      "teamHome": {
          "teamName": "Grêmio"
      },
      "teamAway": {
          "teamName": "Minas Brasília"
      }
  },
  {
      "id": 32,
      "homeTeam": 14,
      "homeTeamGoals": 5,
      "awayTeam": 11,
      "awayTeamGoals": 1,
      "inProgress": false,
      "home_team": 14,
      "away_team": 11,
      "teamHome": {
          "teamName": "Santos"
      },
      "teamAway": {
          "teamName": "Napoli-SC"
      }
  },
  {
      "id": 33,
      "homeTeam": 1,
      "homeTeamGoals": 1,
      "awayTeam": 16,
      "awayTeamGoals": 1,
      "inProgress": false,
      "home_team": 1,
      "away_team": 16,
      "teamHome": {
          "teamName": "Avaí/Kindermann"
      },
      "teamAway": {
          "teamName": "São Paulo"
      }
  },
  {
      "id": 34,
      "homeTeam": 9,
      "homeTeamGoals": 3,
      "awayTeam": 6,
      "awayTeamGoals": 1,
      "inProgress": false,
      "home_team": 9,
      "away_team": 6,
      "teamHome": {
          "teamName": "Internacional"
      },
      "teamAway": {
          "teamName": "Ferroviária"
      }
  },
  {
      "id": 35,
      "homeTeam": 10,
      "homeTeamGoals": 1,
      "awayTeam": 5,
      "awayTeamGoals": 3,
      "inProgress": false,
      "home_team": 10,
      "away_team": 5,
      "teamHome": {
          "teamName": "Minas Brasília"
      },
      "teamAway": {
          "teamName": "Cruzeiro"
      }
  },
  {
      "id": 36,
      "homeTeam": 2,
      "homeTeamGoals": 0,
      "awayTeam": 7,
      "awayTeamGoals": 1,
      "inProgress": false,
      "home_team": 2,
      "away_team": 7,
      "teamHome": {
          "teamName": "Bahia"
      },
      "teamAway": {
          "teamName": "Flamengo"
      }
  },
  {
      "id": 37,
      "homeTeam": 15,
      "homeTeamGoals": 0,
      "awayTeam": 13,
      "awayTeamGoals": 1,
      "inProgress": false,
      "home_team": 15,
      "away_team": 13,
      "teamHome": {
          "teamName": "São José-SP"
      },
      "teamAway": {
          "teamName": "Real Brasília"
      }
  },
  {
      "id": 38,
      "homeTeam": 14,
      "homeTeamGoals": 2,
      "awayTeam": 4,
      "awayTeamGoals": 1,
      "inProgress": false,
      "home_team": 14,
      "away_team": 4,
      "teamHome": {
          "teamName": "Santos"
      },
      "teamAway": {
          "teamName": "Corinthians"
      }
  },
  {
      "id": 39,
      "homeTeam": 3,
      "homeTeamGoals": 2,
      "awayTeam": 11,
      "awayTeamGoals": 0,
      "inProgress": false,
      "home_team": 3,
      "away_team": 11,
      "teamHome": {
          "teamName": "Botafogo"
      },
      "teamAway": {
          "teamName": "Napoli-SC"
      }
  },
  {
      "id": 40,
      "homeTeam": 12,
      "homeTeamGoals": 4,
      "awayTeam": 8,
      "awayTeamGoals": 1,
      "inProgress": false,
      "home_team": 12,
      "away_team": 8,
      "teamHome": {
          "teamName": "Palmeiras"
      },
      "teamAway": {
          "teamName": "Grêmio"
      }
  }
]

export { mockMatchesFinisheds };
