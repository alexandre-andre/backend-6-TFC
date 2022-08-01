import { INTEGER, Model, STRING } from 'sequelize';
import db from '.';

class Team extends Model {
  id?: number;
  teamName!: string;
}

Team.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER,
    },
    teamName: { allowNull: false, type: STRING(30) },
  },
  {
    sequelize: db,
    modelName: 'team', // refere-se ao model
    tableName: 'teams', // refere-se a migration
    underscored: true,
    timestamps: false,
  },
);

export default Team;
