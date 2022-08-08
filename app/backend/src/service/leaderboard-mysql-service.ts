import { QueryTypes } from 'sequelize';
import { queryAtHome } from '../utils';
import sequelize from '../database/models';

class leaderboard {
  public getRankAtHome = async () => {
    const atHome = await sequelize.query(queryAtHome, { type: QueryTypes.SELECT });

    return atHome;
  };
}

export default leaderboard;
