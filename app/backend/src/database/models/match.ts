import { BOOLEAN, INTEGER, Model } from 'sequelize';
import db from '.';
import Team from './team';

class Match extends Model {
  id?: number;
  homeTeam!: number;
  awayTeam!: number;
  homeTeamGoals!: number;
  awayTeamGoals!: number;
  inProgress!: boolean;
}

Match.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER,
    },
    homeTeam: { primaryKey: true, type: INTEGER },
    homeTeamGoals: { allowNull: false, type: INTEGER },
    awayTeam: { allowNull: false, type: INTEGER },
    awayTeamGoals: { allowNull: false, type: INTEGER },
    inProgress: { allowNull: false, type: BOOLEAN },
  },
  {
    sequelize: db,
    modelName: 'match', // refere-se ao model
    tableName: 'matches', // refere-se a migration
    underscored: true,
    timestamps: false,
  },
);

// Team.hasMany(Match, { foreignKey: 'id', as: 'teamHome' });
Match.belongsTo(Team, { foreignKey: 'home_team', as: 'teamHome' });

// Team.hasMany(Match, { foreignKey: 'id', as: 'teamAway' });
Match.belongsTo(Team, { foreignKey: 'away_team', as: 'teamAway' });

export default Match;
