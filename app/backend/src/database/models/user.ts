import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class User extends Model {
  id?: number;
  username: string;
  role: string;
  email: string;
  password: string;
}

User.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER,

    },
    usernam: { allowNull: false, type: STRING(30) },
    role: { allowNull: false, type: STRING(30) },
    email: { allowNull: false, type: STRING(30) },
    password: { type: STRING(30) },
  },
  {
    sequelize: db,
    modelName: 'user', // refere-se ao model
    tableName: 'users', // refere-se a migration
    timestamps: false,
  },
);

export default User;
