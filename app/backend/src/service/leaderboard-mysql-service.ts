import { QueryTypes } from 'sequelize';
import { queryAtHome, queryWhenVisitor } from '../utils';
import sequelize from '../database/models';

class leaderboard {
  public getRankAtHome = async () => {
    const ranking = await sequelize.query(queryAtHome, { type: QueryTypes.SELECT });

    return ranking;
  };

  public getRankWhenVisitor = async () => {
    const ranking = await sequelize.query(queryWhenVisitor, { type: QueryTypes.SELECT });

    return ranking;
  };

  public getRank = async () => {
    const getHome = await this.getRankAtHome();
    const getVisitor = await this.getRankWhenVisitor();

    const generalRank = getVisitor.map((e) => 
      e
    )

    return generalRank;
  };
}

export default leaderboard;
