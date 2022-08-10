import { QueryTypes } from 'sequelize';
import { queryAtHome, queryWhenVisitor } from '../utils';
import sequelize from '../database/models';

interface IRanking {
  name: string;
  totalPoints: number;
  totalGames: number;
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  goalsFavor: number;
  goalsOwn: number;
  goalsBalance: number;
  efficiency: number;
}

// const primeira= [
//   {
//     name: 'Palmeiras',
//     totalPoints: 6,
//     totalGames: 2,
//     totalVictories: 2,
//     totalDraws: 0,
//     totalLosses: 0,
//     goalsFavor: 7,
//     goalsOwn: 0,
//     goalsBalance: 7,
//     efficiency: 100
//   },
//   {
//     name: 'Corinthians',
//     totalPoints: 6,
//     totalGames: 3,
//     totalVictories: 2,
//     totalDraws: 0,
//     totalLosses: 1,
//     goalsFavor: 6,
//     goalsOwn: 2,
//     goalsBalance: 4,
//     efficiency: 66.67
//   },
//   {
//     name: 'Internacional',
//     totalPoints: 6,
//     totalGames: 2,
//     totalVictories: 2,
//     totalDraws: 0,
//     totalLosses: 0,
//     goalsFavor: 3,
//     goalsOwn: 0,
//     goalsBalance: 3,
//     efficiency: 100
//   },
//   {
//     name: 'São José-SP',
//     totalPoints: 6,
//     totalGames: 2,
//     totalVictories: 2,
//     totalDraws: 0,
//     totalLosses: 0,
//     goalsFavor: 3,
//     goalsOwn: 1,
//     goalsBalance: 2,
//     efficiency: 100
//   },
//   {
//     name: 'São Paulo',
//     totalPoints: 4,
//     totalGames: 3,
//     totalVictories: 1,
//     totalDraws: 1,
//     totalLosses: 1,
//     goalsFavor: 5,
//     goalsOwn: 5,
//     goalsBalance: 0,
//     efficiency: 44.44
//   },
//   {
//     name: 'Ferroviária',
//     totalPoints: 4,
//     totalGames: 3,
//     totalVictories: 1,
//     totalDraws: 1,
//     totalLosses: 1,
//     goalsFavor: 4,
//     goalsOwn: 5,
//     goalsBalance: -1,
//     efficiency: 44.44
//   },
//   {
//     name: 'Real Brasília',
//     totalPoints: 4,
//     totalGames: 3,
//     totalVictories: 1,
//     totalDraws: 1,
//     totalLosses: 1,
//     goalsFavor: 3,
//     goalsOwn: 4,
//     goalsBalance: -1,
//     efficiency: 44.44
//   },
//   {
//     name: 'Grêmio',
//     totalPoints: 4,
//     totalGames: 3,
//     totalVictories: 1,
//     totalDraws: 1,
//     totalLosses: 1,
//     goalsFavor: 5,
//     goalsOwn: 7,
//     goalsBalance: -2,
//     efficiency: 44.44
//   },
//   {
//     name: 'Flamengo',
//     totalPoints: 4,
//     totalGames: 3,
//     totalVictories: 1,
//     totalDraws: 1,
//     totalLosses: 1,
//     goalsFavor: 1,
//     goalsOwn: 3,
//     goalsBalance: -2,
//     efficiency: 44.44
//   },
//   {
//     name: 'Avaí/Kindermann',
//     totalPoints: 3,
//     totalGames: 2,
//     totalVictories: 1,
//     totalDraws: 0,
//     totalLosses: 1,
//     goalsFavor: 1,
//     goalsOwn: 1,
//     goalsBalance: 0,
//     efficiency: 50
//   },
//   {
//     name: 'Cruzeiro',
//     totalPoints: 3,
//     totalGames: 3,
//     totalVictories: 1,
//     totalDraws: 0,
//     totalLosses: 2,
//     goalsFavor: 6,
//     goalsOwn: 7,
//     goalsBalance: -1,
//     efficiency: 33.33
//   },
//   {
//     name: 'Santos',
//     totalPoints: 2,
//     totalGames: 2,
//     totalVictories: 0,
//     totalDraws: 2,
//     totalLosses: 0,
//     goalsFavor: 3,
//     goalsOwn: 3,
//     goalsBalance: 0,
//     efficiency: 33.33
//   },
//   {
//     name: 'Bahia',
//     totalPoints: 2,
//     totalGames: 2,
//     totalVictories: 0,
//     totalDraws: 2,
//     totalLosses: 0,
//     goalsFavor: 2,
//     goalsOwn: 2,
//     goalsBalance: 0,
//     efficiency: 33.33
//   },
//   {
//     name: 'Minas Brasília',
//     totalPoints: 1,
//     totalGames: 2,
//     totalVictories: 0,
//     totalDraws: 1,
//     totalLosses: 1,
//     goalsFavor: 1,
//     goalsOwn: 3,
//     goalsBalance: -2,
//     efficiency: 16.67
//   },
//   {
//     name: 'Botafogo',
//     totalPoints: 0,
//     totalGames: 2,
//     totalVictories: 0,
//     totalDraws: 0,
//     totalLosses: 2,
//     goalsFavor: 1,
//     goalsOwn: 4,
//     goalsBalance: -3,
//     efficiency: 0
//   },
//   {
//     name: 'Napoli-SC',
//     totalPoints: 0,
//     totalGames: 3,
//     totalVictories: 0,
//     totalDraws: 0,
//     totalLosses: 3,
//     goalsFavor: 1,
//     goalsOwn: 10,
//     goalsBalance: -9,
//     efficiency: 0
//   }
//   ]

// const segunda = [
//   {
//     name: 'Santos',
//     totalPoints: 9,
//     totalGames: 3,
//     totalVictories: 3,
//     totalDraws: 0,
//     totalLosses: 0,
//     goalsFavor: 9,
//     goalsOwn: 3,
//     goalsBalance: 6,
//     efficiency: 100
//   },
//   {
//     name: 'Palmeiras',
//     totalPoints: 7,
//     totalGames: 3,
//     totalVictories: 2,
//     totalDraws: 1,
//     totalLosses: 0,
//     goalsFavor: 10,
//     goalsOwn: 5,
//     goalsBalance: 5,
//     efficiency: 77.78
//   },
//   {
//     name: 'Corinthians',
//     totalPoints: 6,
//     totalGames: 2,
//     totalVictories: 2,
//     totalDraws: 0,
//     totalLosses: 0,
//     goalsFavor: 6,
//     goalsOwn: 1,
//     goalsBalance: 5,
//     efficiency: 100
//   },
//   {
//     name: 'Grêmio',
//     totalPoints: 6,
//     totalGames: 2,
//     totalVictories: 2,
//     totalDraws: 0,
//     totalLosses: 0,
//     goalsFavor: 4,
//     goalsOwn: 1,
//     goalsBalance: 3,
//     efficiency: 100
//   },
//   {
//     name: 'Real Brasília',
//     totalPoints: 6,
//     totalGames: 2,
//     totalVictories: 2,
//     totalDraws: 0,
//     totalLosses: 0,
//     goalsFavor: 2,
//     goalsOwn: 0,
//     goalsBalance: 2,
//     efficiency: 100
//   },
//   {
//     name: 'São Paulo',
//     totalPoints: 4,
//     totalGames: 2,
//     totalVictories: 1,
//     totalDraws: 1,
//     totalLosses: 0,
//     goalsFavor: 4,
//     goalsOwn: 1,
//     goalsBalance: 3,
//     efficiency: 66.67
//   },
//   {
//     name: 'Internacional',
//     totalPoints: 4,
//     totalGames: 3,
//     totalVictories: 1,
//     totalDraws: 1,
//     totalLosses: 1,
//     goalsFavor: 4,
//     goalsOwn: 6,
//     goalsBalance: -2,
//     efficiency: 44.44
//   },
//   {
//     name: 'Botafogo',
//     totalPoints: 4,
//     totalGames: 3,
//     totalVictories: 1,
//     totalDraws: 1,
//     totalLosses: 1,
//     goalsFavor: 2,
//     goalsOwn: 4,
//     goalsBalance: -2,
//     efficiency: 44.44
//   },
//   {
//     name: 'Ferroviária',
//     totalPoints: 3,
//     totalGames: 2,
//     totalVictories: 1,
//     totalDraws: 0,
//     totalLosses: 1,
//     goalsFavor: 3,
//     goalsOwn: 2,
//     goalsBalance: 1,
//     efficiency: 50
//   },
//   {
//     name: 'Napoli-SC',
//     totalPoints: 2,
//     totalGames: 2,
//     totalVictories: 0,
//     totalDraws: 2,
//     totalLosses: 0,
//     goalsFavor: 2,
//     goalsOwn: 2,
//     goalsBalance: 0,
//     efficiency: 33.33
//   },
//   {
//     name: 'Cruzeiro',
//     totalPoints: 1,
//     totalGames: 2,
//     totalVictories: 0,
//     totalDraws: 1,
//     totalLosses: 1,
//     goalsFavor: 2,
//     goalsOwn: 3,
//     goalsBalance: -1,
//     efficiency: 16.67
//   },
//   {
//     name: 'Flamengo',
//     totalPoints: 1,
//     totalGames: 2,
//     totalVictories: 0,
//     totalDraws: 1,
//     totalLosses: 1,
//     goalsFavor: 1,
//     goalsOwn: 2,
//     goalsBalance: -1,
//     efficiency: 16.67
//   },
//   {
//     name: 'Minas Brasília',
//     totalPoints: 1,
//     totalGames: 3,
//     totalVictories: 0,
//     totalDraws: 1,
//     totalLosses: 2,
//     goalsFavor: 3,
//     goalsOwn: 6,
//     goalsBalance: -3,
//     efficiency: 11.11
//   },
//   {
//     name: 'Avaí/Kindermann',
//     totalPoints: 1,
//     totalGames: 3,
//     totalVictories: 0,
//     totalDraws: 1,
//     totalLosses: 2,
//     goalsFavor: 3,
//     goalsOwn: 7,
//     goalsBalance: -4,
//     efficiency: 11.11
//   },
//   {
//     name: 'São José-SP',
//     totalPoints: 0,
//     totalGames: 3,
//     totalVictories: 0,
//     totalDraws: 0,
//     totalLosses: 3,
//     goalsFavor: 2,
//     goalsOwn: 5,
//     goalsBalance: -3,
//     efficiency: 0
//   },
//   {
//     name: 'Bahia',
//     totalPoints: 0,
//     totalGames: 3,
//     totalVictories: 0,
//     totalDraws: 0,
//     totalLosses: 3,
//     goalsFavor: 0,
//     goalsOwn: 4,
//     goalsBalance: -4,
//     efficiency: 0
//   }
// ]

class leaderboard {
  name = '';
  totalPoints = 0;
  totalGames = 0;
  totalVictories = 0;
  totalDraws = 0;
  totalLosses = 0;
  goalsFavor = 0;
  goalsOwn = 0;
  goalsBalance = 0;
  efficiency = 0;

  // constructor() {
  //   console.log('quokka funcionando');
  //   this.initialState()
  //   this.getRank()
  // }

  initialState() {
    return {
      name: this.name,
      totalPoints: this.totalPoints,
      totalGames: this.totalGames,
      totalVictories: this.totalVictories,
      totalDraws: this.totalDraws,
      totalLosses: this.totalLosses,
      goalsFavor: this.goalsFavor,
      goalsOwn: this.goalsOwn,
      goalsBalance: this.goalsBalance,
      efficiency: this.efficiency,
    };
  }

  private setAllPropertiesFromTeam(team: IRanking) { // cria um objeto com todas a propriedades da tabela por time
    return {
      name: team.name,
      totalPoints: this.totalPoints,
      totalGames: this.totalGames,
      totalVictories: this.totalVictories,
      totalDraws: this.totalDraws,
      totalLosses: this.totalLosses,
      goalsFavor: this.goalsFavor,
      goalsOwn: this.goalsOwn,
      goalsBalance: this.goalsBalance,
      efficiency: this.efficiency,
    };
  }

  public getRankAtHome = async () => {
    const ranking: Array<IRanking>  = await sequelize.query(queryAtHome, { type: QueryTypes.SELECT });

    return ranking;
  };

  public getRankWhenVisitor = async () => {
    const ranking: IRanking[] = await sequelize.query(queryWhenVisitor, { type: QueryTypes.SELECT });

    return ranking;
  };
  
  private calcEfficiency = (num1: number, num2: number) => {
    return parseFloat(Math.fround((num1 + num2) / 2).toFixed(2));
  }

  private setProperties = (home: IRanking, visitor: IRanking) => {
    if (home.name === visitor.name) {
      this.totalPoints = home.totalPoints + visitor.totalPoints;
      this.totalGames = home.totalGames + visitor.totalGames;
      this.totalVictories = home.totalVictories + visitor.totalVictories;
      this.totalDraws = home.totalDraws + visitor.totalDraws;
      this.totalLosses = home.totalLosses + visitor.totalLosses;
      this.goalsFavor = home.goalsFavor + visitor.goalsFavor;
      this.goalsOwn = home.goalsOwn + visitor.goalsOwn;
      this.goalsBalance = home.goalsBalance + visitor.goalsBalance;
      this.efficiency = this.calcEfficiency(home.efficiency, visitor.efficiency);
    }
  }

  public getRank = async () => {
    const getHome: Array<IRanking> = await this.getRankAtHome();
    const getVisitor: IRanking[] = await this.getRankWhenVisitor();
    
    const teste: unknown = getHome.map((home) => {
      let result;

      getVisitor.forEach((visitor) => {
          this.setProperties(home, visitor);
          result = this.setAllPropertiesFromTeam(home as IRanking);
          this.initialState();
      });

      return result;
    });

    const ranking = teste as unknown as IRanking[]; // macete do leandro - ficar de olho nesse safado

    return ranking.sort(
      (a, b) =>
        b.totalPoints - a.totalPoints ||
        b.goalsBalance - a.goalsBalance ||
        b.goalsFavor - a.goalsFavor
    );
  };
}
// new leaderboard()
export default leaderboard;
