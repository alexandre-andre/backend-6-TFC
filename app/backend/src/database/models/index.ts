import { Sequelize } from 'sequelize';
import * as config from '../config/database';

/** POR QUE OS IMPORTS NAO FUNCIONARAM ??? */
// import User from './user';
// import Team from './team';
// import Match from './match';

export default new Sequelize(config);
// export { User, Team, Match}