import { StatusCodes } from 'http-status-codes';
import { HttpException } from '../utils';
import Team from '../database/models/team';

class TeamsServices {
  public getAllTeams = async () => {
    const teams = await Team.findAll();

    return teams;
  };

  public getTeamById = async (id: number) => {
    const team = await Team.findByPk(id);

    if (!team) {
      throw new HttpException(StatusCodes.NOT_FOUND, 'This team was not found');
    }

    return team;
  };
}

export default TeamsServices;
