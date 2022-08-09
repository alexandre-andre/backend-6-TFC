import { QueryTypes } from 'sequelize';
import { queryAtHome, queryWhenVisitor } from '../utils';
import sequelize from '../database/models';
import { ITeam } from '../database/models/interface';

interface IRanking {
  'teamName': string;
  'totalPoints': number;
  'totalGames': number;
  'totalVictories': number;
  'totalDraws': number;
  'totalLosses': number;
  'goalsFavor': number;
  'goalsOwn': number;
  'goalsBalance': number;
  'efficiency': number;
}

// const obj: IRanking = {
//   'name': '',
//   'totalPoints': 0,
//   'totalGames': 0,
//   'totalVictories': 0,
//   'totalDraws': 0,
//   'totalLosses': 0,
//   'goalsFavor': 0,
//   'goalsOwn': 0,
//   'goalsBalance': 0,
//   'efficiency': 0,
// }

class leaderboard {
  teamName = '';
  totalPoints = 0;
  totalGames = 0;
  totalVictories = 0;
  totalDraws = 0;
  totalLosses = 0;
  goalsFavor = 0;
  goalsOwn = 0;
  goalsBalance = 0;
  efficiency = 0;

  initialState() {
    return {
      teamName: this.teamName,
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

  private setAllPropertiesFromTeam(team: ITeam) { // cria um objeto com todas a propriedades da tabela por time
    return {
      name: team.teamName,
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

  public getRank = async () => {
    const getHome: Array<IRanking> = await this.getRankAtHome();
    const getVisitor: IRanking[] = await this.getRankWhenVisitor();
 
    return getHome.map((home) => 
      getVisitor.forEach((visitor) => {
        if (home.teamName === visitor.teamName) {
          this.teamName = home.teamName;
          this.totalGames = home.totalGames + visitor.totalGames;
          this.totalPoints = home.totalPoints + visitor.totalPoints;
          this.goalsFavor = home.goalsFavor + visitor.goalsFavor;
          this.goalsOwn = home.goalsOwn + visitor.goalsOwn;
          this.goalsBalance = home.goalsBalance + visitor.goalsBalance;
          this.totalVictories = home.totalVictories + visitor.totalVictories;
          this.totalDraws = home.totalDraws + visitor.totalDraws;
          this.totalLosses = home.totalLosses + visitor.totalLosses;
          this.efficiency = (home.efficiency + visitor.efficiency) / 2;
        } 
        const teste = this.setAllPropertiesFromTeam(home)
        this.initialState();
        return teste
      })
    )

  };
}

export default leaderboard;
