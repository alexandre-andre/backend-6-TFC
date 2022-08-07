// import IMatch from '../database/models/interface/match';
import ITeam from '../database/models/interface/team';
// import MatchesService from './matches-service';
// import TeamsServices from './teams-service';

const teamsMock = [
  {
    'id': 1,
    'teamName': 'Avaí/Kindermann'
  },
  {
    'id': 2,
    'teamName': 'Bahia'
  },
  {
    'id': 3,
    'teamName': 'Botafogo'
  },
  {
    'id': 4,
    'teamName': 'Corinthians'
  },
  {
    'id': 5,
    'teamName': 'Cruzeiro'
  },
  {
    'id': 6,
    'teamName': 'Ferroviária'
  },
  {
    'id': 7,
    'teamName': 'Flamengo'
  },
  {
    'id': 8,
    'teamName': 'Grêmio'
  },
  {
    'id': 9,
    'teamName': 'Internacional'
  },
  {
    'id': 10,
    'teamName': 'Minas Brasília'
  },
  {
    'id': 11,
    'teamName': 'Napoli-SC'
  },
  {
    'id': 12,
    'teamName': 'Palmeiras'
  },
  {
    'id': 13,
    'teamName': 'Real Brasília'
  },
  {
    'id': 14,
    'teamName': 'Santos'
  },
  {
    'id': 15,
    'teamName': 'São José-SP'
  },
  {
    'id': 16,
    'teamName': 'São Paulo'
  }
]

const matchesMock = [
  {
    'id': 1,
    'homeTeam': 16,
    'homeTeamGoals': 1,
    'awayTeam': 8,
    'awayTeamGoals': 1,
    'inProgress': false,
    'home_team': 16,
    'away_team': 8,
    'teamHome': {
        'teamName': 'São Paulo'
    },
    'teamAway': {
        'teamName': 'Grêmio'
    }
  },
//   {
//       'id': 2,
//       'homeTeam': 9,
//       'homeTeamGoals': 1,
//       'awayTeam': 14,
//       'awayTeamGoals': 1,
//       'inProgress': false,
//       'home_team': 9,
//       'away_team': 14,
//       'teamHome': {
//           'teamName': 'Internacional'
//       },
//       'teamAway': {
//           'teamName': 'Santos'
//       }
//   },
//   {
//       'id': 3,
//       'homeTeam': 4,
//       'homeTeamGoals': 3,
//       'awayTeam': 11,
//       'awayTeamGoals': 0,
//       'inProgress': false,
//       'home_team': 4,
//       'away_team': 11,
//       'teamHome': {
//           'teamName': 'Corinthians'
//       },
//       'teamAway': {
//           'teamName': 'Napoli-SC'
//       }
//   },
//   {
//       'id': 4,
//       'homeTeam': 3,
//       'homeTeamGoals': 0,
//       'awayTeam': 2,
//       'awayTeamGoals': 0,
//       'inProgress': false,
//       'home_team': 3,
//       'away_team': 2,
//       'teamHome': {
//           'teamName': 'Botafogo'
//       },
//       'teamAway': {
//           'teamName': 'Bahia'
//       }
//   },
//   {
//       'id': 5,
//       'homeTeam': 7,
//       'homeTeamGoals': 1,
//       'awayTeam': 10,
//       'awayTeamGoals': 1,
//       'inProgress': false,
//       'home_team': 7,
//       'away_team': 10,
//       'teamHome': {
//           'teamName': 'Flamengo'
//       },
//       'teamAway': {
//           'teamName': 'Minas Brasília'
//       }
//   },
//   {
//       'id': 6,
//       'homeTeam': 5,
//       'homeTeamGoals': 1,
//       'awayTeam': 13,
//       'awayTeamGoals': 1,
//       'inProgress': false,
//       'home_team': 5,
//       'away_team': 13,
//       'teamHome': {
//           'teamName': 'Cruzeiro'
//       },
//       'teamAway': {
//           'teamName': 'Real Brasília'
//       }
//   },
//   {
//       'id': 7,
//       'homeTeam': 12,
//       'homeTeamGoals': 2,
//       'awayTeam': 6,
//       'awayTeamGoals': 2,
//       'inProgress': false,
//       'home_team': 12,
//       'away_team': 6,
//       'teamHome': {
//           'teamName': 'Palmeiras'
//       },
//       'teamAway': {
//           'teamName': 'Ferroviária'
//       }
//   },
//   {
//       'id': 8,
//       'homeTeam': 15,
//       'homeTeamGoals': 0,
//       'awayTeam': 1,
//       'awayTeamGoals': 1,
//       'inProgress': false,
//       'home_team': 15,
//       'away_team': 1,
//       'teamHome': {
//           'teamName': 'São José-SP'
//       },
//       'teamAway': {
//           'teamName': 'Avaí/Kindermann'
//       }
//   },
//   {
//       'id': 9,
//       'homeTeam': 1,
//       'homeTeamGoals': 0,
//       'awayTeam': 12,
//       'awayTeamGoals': 3,
//       'inProgress': false,
//       'home_team': 1,
//       'away_team': 12,
//       'teamHome': {
//           'teamName': 'Avaí/Kindermann'
//       },
//       'teamAway': {
//           'teamName': 'Palmeiras'
//       }
//   },
//   {
//       'id': 10,
//       'homeTeam': 2,
//       'homeTeamGoals': 0,
//       'awayTeam': 9,
//       'awayTeamGoals': 2,
//       'inProgress': false,
//       'home_team': 2,
//       'away_team': 9,
//       'teamHome': {
//           'teamName': 'Bahia'
//       },
//       'teamAway': {
//           'teamName': 'Internacional'
//       }
//   },
//   {
//       'id': 11,
//       'homeTeam': 13,
//       'homeTeamGoals': 1,
//       'awayTeam': 3,
//       'awayTeamGoals': 0,
//       'inProgress': false,
//       'home_team': 13,
//       'away_team': 3,
//       'teamHome': {
//           'teamName': 'Real Brasília'
//       },
//       'teamAway': {
//           'teamName': 'Botafogo'
//       }
//   },
//   {
//       'id': 12,
//       'homeTeam': 6,
//       'homeTeamGoals': 0,
//       'awayTeam': 4,
//       'awayTeamGoals': 1,
//       'inProgress': false,
//       'home_team': 6,
//       'away_team': 4,
//       'teamHome': {
//           'teamName': 'Ferroviária'
//       },
//       'teamAway': {
//           'teamName': 'Corinthians'
//       }
//   },
//   {
//       'id': 13,
//       'homeTeam': 8,
//       'homeTeamGoals': 2,
//       'awayTeam': 5,
//       'awayTeamGoals': 1,
//       'inProgress': false,
//       'home_team': 8,
//       'away_team': 5,
//       'teamHome': {
//           'teamName': 'Grêmio'
//       },
//       'teamAway': {
//           'teamName': 'Cruzeiro'
//       }
//   },
//   {
//       'id': 14,
//       'homeTeam': 14,
//       'homeTeamGoals': 2,
//       'awayTeam': 16,
//       'awayTeamGoals': 1,
//       'inProgress': false,
//       'home_team': 14,
//       'away_team': 16,
//       'teamHome': {
//           'teamName': 'Santos'
//       },
//       'teamAway': {
//           'teamName': 'São Paulo'
//       }
//   },
//   {
//       'id': 15,
//       'homeTeam': 10,
//       'homeTeamGoals': 0,
//       'awayTeam': 15,
//       'awayTeamGoals': 1,
//       'inProgress': false,
//       'home_team': 10,
//       'away_team': 15,
//       'teamHome': {
//           'teamName': 'Minas Brasília'
//       },
//       'teamAway': {
//           'teamName': 'São José-SP'
//       }
//   },
//   {
//       'id': 16,
//       'homeTeam': 11,
//       'homeTeamGoals': 0,
//       'awayTeam': 7,
//       'awayTeamGoals': 0,
//       'inProgress': false,
//       'home_team': 11,
//       'away_team': 7,
//       'teamHome': {
//           'teamName': 'Napoli-SC'
//       },
//       'teamAway': {
//           'teamName': 'Flamengo'
//       }
//   },
//   {
//       'id': 17,
//       'homeTeam': 1,
//       'homeTeamGoals': 2,
//       'awayTeam': 8,
//       'awayTeamGoals': 3,
//       'inProgress': false,
//       'home_team': 1,
//       'away_team': 8,
//       'teamHome': {
//           'teamName': 'Avaí/Kindermann'
//       },
//       'teamAway': {
//           'teamName': 'Grêmio'
//       }
//   },
//   {
//       'id': 18,
//       'homeTeam': 12,
//       'homeTeamGoals': 4,
//       'awayTeam': 5,
//       'awayTeamGoals': 2,
//       'inProgress': false,
//       'home_team': 12,
//       'away_team': 5,
//       'teamHome': {
//           'teamName': 'Palmeiras'
//       },
//       'teamAway': {
//           'teamName': 'Cruzeiro'
//       }
//   },
//   {
//       'id': 19,
//       'homeTeam': 11,
//       'homeTeamGoals': 2,
//       'awayTeam': 2,
//       'awayTeamGoals': 2,
//       'inProgress': false,
//       'home_team': 11,
//       'away_team': 2,
//       'teamHome': {
//           'teamName': 'Napoli-SC'
//       },
//       'teamAway': {
//           'teamName': 'Bahia'
//       }
//   },
//   {
//       'id': 20,
//       'homeTeam': 7,
//       'homeTeamGoals': 0,
//       'awayTeam': 9,
//       'awayTeamGoals': 1,
//       'inProgress': false,
//       'home_team': 7,
//       'away_team': 9,
//       'teamHome': {
//           'teamName': 'Flamengo'
//       },
//       'teamAway': {
//           'teamName': 'Internacional'
//       }
//   },
//   {
//       'id': 21,
//       'homeTeam': 6,
//       'homeTeamGoals': 3,
//       'awayTeam': 13,
//       'awayTeamGoals': 1,
//       'inProgress': false,
//       'home_team': 6,
//       'away_team': 13,
//       'teamHome': {
//           'teamName': 'Ferroviária'
//       },
//       'teamAway': {
//           'teamName': 'Real Brasília'
//       }
//   },
//   {
//       'id': 22,
//       'homeTeam': 4,
//       'homeTeamGoals': 3,
//       'awayTeam': 3,
//       'awayTeamGoals': 1,
//       'inProgress': false,
//       'home_team': 4,
//       'away_team': 3,
//       'teamHome': {
//           'teamName': 'Corinthians'
//       },
//       'teamAway': {
//           'teamName': 'Botafogo'
//       }
//   },
//   {
//       'id': 23,
//       'homeTeam': 15,
//       'homeTeamGoals': 2,
//       'awayTeam': 16,
//       'awayTeamGoals': 3,
//       'inProgress': false,
//       'home_team': 15,
//       'away_team': 16,
//       'teamHome': {
//           'teamName': 'São José-SP'
//       },
//       'teamAway': {
//           'teamName': 'São Paulo'
//       }
//   },
//   {
//       'id': 24,
//       'homeTeam': 10,
//       'homeTeamGoals': 2,
//       'awayTeam': 14,
//       'awayTeamGoals': 2,
//       'inProgress': false,
//       'home_team': 10,
//       'away_team': 14,
//       'teamHome': {
//           'teamName': 'Minas Brasília'
//       },
//       'teamAway': {
//           'teamName': 'Santos'
//       }
//   },
//   {
//       'id': 25,
//       'homeTeam': 2,
//       'homeTeamGoals': 0,
//       'awayTeam': 6,
//       'awayTeamGoals': 1,
//       'inProgress': false,
//       'home_team': 2,
//       'away_team': 6,
//       'teamHome': {
//           'teamName': 'Bahia'
//       },
//       'teamAway': {
//           'teamName': 'Ferroviária'
//       }
//   },
//   {
//       'id': 26,
//       'homeTeam': 13,
//       'homeTeamGoals': 1,
//       'awayTeam': 1,
//       'awayTeamGoals': 0,
//       'inProgress': false,
//       'home_team': 13,
//       'away_team': 1,
//       'teamHome': {
//           'teamName': 'Real Brasília'
//       },
//       'teamAway': {
//           'teamName': 'Avaí/Kindermann'
//       }
//   },
//   {
//       'id': 27,
//       'homeTeam': 5,
//       'homeTeamGoals': 1,
//       'awayTeam': 15,
//       'awayTeamGoals': 2,
//       'inProgress': false,
//       'home_team': 5,
//       'away_team': 15,
//       'teamHome': {
//           'teamName': 'Cruzeiro'
//       },
//       'teamAway': {
//           'teamName': 'São José-SP'
//       }
//   },
//   {
//       'id': 28,
//       'homeTeam': 16,
//       'homeTeamGoals': 3,
//       'awayTeam': 7,
//       'awayTeamGoals': 0,
//       'inProgress': false,
//       'home_team': 16,
//       'away_team': 7,
//       'teamHome': {
//           'teamName': 'São Paulo'
//       },
//       'teamAway': {
//           'teamName': 'Flamengo'
//       }
//   },
//   {
//       'id': 29,
//       'homeTeam': 9,
//       'homeTeamGoals': 0,
//       'awayTeam': 4,
//       'awayTeamGoals': 4,
//       'inProgress': false,
//       'home_team': 9,
//       'away_team': 4,
//       'teamHome': {
//           'teamName': 'Internacional'
//       },
//       'teamAway': {
//           'teamName': 'Corinthians'
//       }
//   },
//   {
//       'id': 30,
//       'homeTeam': 3,
//       'homeTeamGoals': 0,
//       'awayTeam': 12,
//       'awayTeamGoals': 4,
//       'inProgress': false,
//       'home_team': 3,
//       'away_team': 12,
//       'teamHome': {
//           'teamName': 'Botafogo'
//       },
//       'teamAway': {
//           'teamName': 'Palmeiras'
//       }
//   },
//   {
//       'id': 31,
//       'homeTeam': 8,
//       'homeTeamGoals': 2,
//       'awayTeam': 10,
//       'awayTeamGoals': 0,
//       'inProgress': false,
//       'home_team': 8,
//       'away_team': 10,
//       'teamHome': {
//           'teamName': 'Grêmio'
//       },
//       'teamAway': {
//           'teamName': 'Minas Brasília'
//       }
//   },
//   {
//       'id': 32,
//       'homeTeam': 14,
//       'homeTeamGoals': 5,
//       'awayTeam': 11,
//       'awayTeamGoals': 1,
//       'inProgress': false,
//       'home_team': 14,
//       'away_team': 11,
//       'teamHome': {
//           'teamName': 'Santos'
//       },
//       'teamAway': {
//           'teamName': 'Napoli-SC'
//       }
//   },
//   {
//       'id': 33,
//       'homeTeam': 1,
//       'homeTeamGoals': 1,
//       'awayTeam': 16,
//       'awayTeamGoals': 1,
//       'inProgress': false,
//       'home_team': 1,
//       'away_team': 16,
//       'teamHome': {
//           'teamName': 'Avaí/Kindermann'
//       },
//       'teamAway': {
//           'teamName': 'São Paulo'
//       }
//   },
//   {
//       'id': 34,
//       'homeTeam': 9,
//       'homeTeamGoals': 3,
//       'awayTeam': 6,
//       'awayTeamGoals': 1,
//       'inProgress': false,
//       'home_team': 9,
//       'away_team': 6,
//       'teamHome': {
//           'teamName': 'Internacional'
//       },
//       'teamAway': {
//           'teamName': 'Ferroviária'
//       }
//   },
//   {
//       'id': 35,
//       'homeTeam': 10,
//       'homeTeamGoals': 1,
//       'awayTeam': 5,
//       'awayTeamGoals': 3,
//       'inProgress': false,
//       'home_team': 10,
//       'away_team': 5,
//       'teamHome': {
//           'teamName': 'Minas Brasília'
//       },
//       'teamAway': {
//           'teamName': 'Cruzeiro'
//       }
//   },
//   {
//       'id': 36,
//       'homeTeam': 2,
//       'homeTeamGoals': 0,
//       'awayTeam': 7,
//       'awayTeamGoals': 1,
//       'inProgress': false,
//       'home_team': 2,
//       'away_team': 7,
//       'teamHome': {
//           'teamName': 'Bahia'
//       },
//       'teamAway': {
//           'teamName': 'Flamengo'
//       }
//   },
//   {
//       'id': 37,
//       'homeTeam': 15,
//       'homeTeamGoals': 0,
//       'awayTeam': 13,
//       'awayTeamGoals': 1,
//       'inProgress': false,
//       'home_team': 15,
//       'away_team': 13,
//       'teamHome': {
//           'teamName': 'São José-SP'
//       },
//       'teamAway': {
//           'teamName': 'Real Brasília'
//       }
//   },
//   {
//       'id': 38,
//       'homeTeam': 14,
//       'homeTeamGoals': 2,
//       'awayTeam': 4,
//       'awayTeamGoals': 1,
//       'inProgress': false,
//       'home_team': 14,
//       'away_team': 4,
//       'teamHome': {
//           'teamName': 'Santos'
//       },
//       'teamAway': {
//           'teamName': 'Corinthians'
//       }
//   },
//   {
//       'id': 39,
//       'homeTeam': 3,
//       'homeTeamGoals': 2,
//       'awayTeam': 11,
//       'awayTeamGoals': 0,
//       'inProgress': false,
//       'home_team': 3,
//       'away_team': 11,
//       'teamHome': {
//           'teamName': 'Botafogo'
//       },
//       'teamAway': {
//           'teamName': 'Napoli-SC'
//       }
//   },
//   {
//       'id': 40,
//       'homeTeam': 12,
//       'homeTeamGoals': 4,
//       'awayTeam': 8,
//       'awayTeamGoals': 1,
//       'inProgress': false,
//       'home_team': 12,
//       'away_team': 8,
//       'teamHome': {
//           'teamName': 'Palmeiras'
//       },
//       'teamAway': {
//           'teamName': 'Grêmio'
//       }
//   },
//   {
//       'id': 41,
//       'homeTeam': 16,
//       'homeTeamGoals': 2,
//       'awayTeam': 9,
//       'awayTeamGoals': 0,
//       'inProgress': true,
//       'home_team': 16,
//       'away_team': 9,
//       'teamHome': {
//           'teamName': 'São Paulo'
//       },
//       'teamAway': {
//           'teamName': 'Internacional'
//       }
//   },
//   {
//       'id': 42,
//       'homeTeam': 6,
//       'homeTeamGoals': 1,
//       'awayTeam': 1,
//       'awayTeamGoals': 0,
//       'inProgress': true,
//       'home_team': 6,
//       'away_team': 1,
//       'teamHome': {
//           'teamName': 'Ferroviária'
//       },
//       'teamAway': {
//           'teamName': 'Avaí/Kindermann'
//       }
//   },
//   {
//       'id': 43,
//       'homeTeam': 11,
//       'homeTeamGoals': 0,
//       'awayTeam': 10,
//       'awayTeamGoals': 0,
//       'inProgress': true,
//       'home_team': 11,
//       'away_team': 10,
//       'teamHome': {
//           'teamName': 'Napoli-SC'
//       },
//       'teamAway': {
//           'teamName': 'Minas Brasília'
//       }
//   },
//   {
//       'id': 44,
//       'homeTeam': 7,
//       'homeTeamGoals': 2,
//       'awayTeam': 15,
//       'awayTeamGoals': 2,
//       'inProgress': true,
//       'home_team': 7,
//       'away_team': 15,
//       'teamHome': {
//           'teamName': 'Flamengo'
//       },
//       'teamAway': {
//           'teamName': 'São José-SP'
//       }
//   },
//   {
//       'id': 45,
//       'homeTeam': 5,
//       'homeTeamGoals': 1,
//       'awayTeam': 3,
//       'awayTeamGoals': 1,
//       'inProgress': true,
//       'home_team': 5,
//       'away_team': 3,
//       'teamHome': {
//           'teamName': 'Cruzeiro'
//       },
//       'teamAway': {
//           'teamName': 'Botafogo'
//       }
//   },
//   {
//       'id': 46,
//       'homeTeam': 4,
//       'homeTeamGoals': 1,
//       'awayTeam': 12,
//       'awayTeamGoals': 1,
//       'inProgress': true,
//       'home_team': 4,
//       'away_team': 12,
//       'teamHome': {
//           'teamName': 'Corinthians'
//       },
//       'teamAway': {
//           'teamName': 'Palmeiras'
//       }
//   },
//   {
//       'id': 47,
//       'homeTeam': 8,
//       'homeTeamGoals': 1,
//       'awayTeam': 14,
//       'awayTeamGoals': 2,
//       'inProgress': true,
//       'home_team': 8,
//       'away_team': 14,
//       'teamHome': {
//           'teamName': 'Grêmio'
//       },
//       'teamAway': {
//           'teamName': 'Santos'
//       }
//   },
//   {
//       'id': 48,
//       'homeTeam': 13,
//       'homeTeamGoals': 1,
//       'awayTeam': 2,
//       'awayTeamGoals': 1,
//       'inProgress': true,
//       'home_team': 13,
//       'away_team': 2,
//       'teamHome': {
//           'teamName': 'Real Brasília'
//       },
//       'teamAway': {
//           'teamName': 'Bahia'
//       }
//   }
]

class LeaderboardService {
  private _name = '';
  private _totalPoints = 0;
  private _totalGames = 0;
  private _totalVictories = 0;
  private _totalDraws = 0;
  private _totalLosses = 0;
  private _goalsFavor = 0;
  private _goalsOwn = 0;
  private _goalsBalance = 0;
  private _efficiency = 0;

// readonly matchesService: MatchesService;
// readonly teamsService: TeamsServices;

  constructor() {
    console.log('teste');
    this.getLeaderboard();
    this.backToInitialState();
    // this.setAllPropertiesFromTeam(team)
    // this.matchesService = new MatchesService();
    // this.teamsService = new TeamsServices();
  }

  private setAllPropertiesFromTeam(team: ITeam) { // cria um objeto com todas a propriedades da tabela por time
    return {
      name: team.teamName,
      totalPoints: this._totalPoints,
      totalGames: this._totalGames,
      totalVictories: this._totalVictories,
      totalDraws: this._totalDraws,
      totalLosses: this._totalLosses,
      goalsFavor: this._goalsFavor,
      goalsOwn: this._goalsOwn,
      goalsBalance: this._goalsBalance,
      efficiency: this._efficiency,
    };
  }

  private backToInitialState = () => {
    return {
      name: '',
      totalPoints: 0,
      totalGames: 0,
      totalVictories: 0,
      totalDraws: 0,
      totalLosses: 0,
      goalsFavor: 0,
      goalsOwn: 0,
      goalsBalance: 0,
      efficiency: 0,
    };
  }

  // private setPointsAndStatusWhenHomeTeam(match: IMatch) { //qdo o time X eh da casa
  //   if (match.homeTeamGoals > match.awayTeamGoals) { // qdo vence
  //     this._totalPoints += 3;
  //     this._totalVictories += 1;
  //   } else if (match.homeTeamGoals == match.awayTeamGoals) { // qdo empata
  //     this ._totalPoints += 1;
  //     this._totalDraws += 1;
  //   } else { // qdo perde
  //     this._totalLosses += 1;
  //   }
  // }

  // private setPointsAndStatusWhenAwayTeam(match: IMatch) { // qdo o time X eh visitante
  //   if (match.homeTeamGoals < match.awayTeamGoals) { // qdo vence
  //     this._totalPoints += 3;
  //     this._totalVictories += 1;
  //   } else if (match.homeTeamGoals == match.awayTeamGoals) { // qdo empata
  //     this._totalPoints += 1;
  //     this._totalDraws += 1;
  //   } else { // qdo perde
  //     this._totalLosses += 1;
  //   }
  // }

  // private setEfficiency(totalPoints: number, totalGames: number) {
  //   return parseFloat((totalPoints / (totalGames * 3) * 100).toFixed(2))
  // }

  // private setGoalsFromTeamByMatch(team: ITeam, match: IMatch) {
  //   if (team.id === match.homeTeam) { // qdo o time X for da casa
  //     this._totalGames += 1;
  //     this._goalsFavor += match.homeTeamGoals;
  //     this._goalsOwn += match.awayTeamGoals;
  //     this._goalsBalance = this._goalsFavor - this._goalsOwn;
  //     this._efficiency = parseFloat((this._totalPoints / (this._totalGames * 3) * 100).toFixed(2));
  //   }

  //   if (team.id === match.awayTeam) { // qdo o time X for visitante
  //     this._totalGames += 1;
  //     this._goalsFavor += match.awayTeamGoals;
  //     this._goalsOwn += match.homeTeamGoals;
  //     this._goalsBalance = this._goalsFavor - this._goalsOwn;
  //     this._efficiency = parseFloat((this._totalPoints / (this._totalGames * 3) * 100).toFixed(2));
  //   }
  // }

  public async getLeaderboard() {
    // let teams: ITeam[] = await this.teamsService.getAllTeams();
    // let matches: IMatch[] = await this.matchesService.getAllMatches();
    let teams = teamsMock;
    let matches = matchesMock;

    return teams.map((time) => {
      matches.forEach((partida) => {
        if (partida.homeTeam === time.id) {
          console.log(time.teamName);
          
          this._totalGames += 1;
          this._goalsFavor += partida.homeTeamGoals;
          this._goalsOwn += partida.awayTeamGoals;
          this._goalsBalance = this._goalsFavor - this._goalsOwn;
          this._efficiency = parseFloat((this._totalPoints / (this._totalGames * 3) * 100).toFixed(2));
          
          if (partida.homeTeamGoals > partida.awayTeamGoals) {
            this._totalVictories += 1;
            this._totalPoints += 3;
          } else if (partida.homeTeamGoals === partida.awayTeamGoals) {
            this._totalDraws += 1;
            this._totalPoints += 1;
          } else {
            this._totalLosses += 1;
          }
          
					const result = this.setAllPropertiesFromTeam(time);
          console.log(result);
        }

        if (partida.awayTeam === time.id) {
            console.log(time.teamName);
            this._totalGames += 1;
            this._goalsFavor += partida.awayTeamGoals;
            this._goalsOwn += partida.awayTeamGoals;
            this._goalsBalance = this._goalsFavor - this._goalsOwn;
            this._efficiency = parseFloat((this._totalPoints / (this._totalGames * 3) * 100).toFixed(2));

            if (partida.homeTeamGoals > partida.awayTeamGoals) {
          		this._totalLosses += 1;
            } else if (partida.homeTeamGoals === partida.awayTeamGoals) {
              this._totalDraws += 1;
              this._totalPoints += 1;
            } else {
              this._totalVictories += 1;
              this._totalPoints += 3;
            }
            
            const result = this.setAllPropertiesFromTeam(time);
            console.log(result);
        }

        const result = this.setAllPropertiesFromTeam(time);
        this.backToInitialState();

        // this.backToInitialState();
        // console.log(result);
        return result
      });
    });

  }
}

// new LeaderboardService()
export default LeaderboardService;
