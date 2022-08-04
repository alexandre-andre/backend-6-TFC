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
    console.log('getTeamById > ', team);
    
    if (team === null) {
      throw new HttpException(StatusCodes.NOT_FOUND, 'There is no team with such id!');
    }

    return team;
  };

  // public countTeams = async (idHomeTeam: number, idAwayTeam: number) => {
  //   const teams = await Team.findAndCountAll({
  //     where: { id: [idHomeTeam, idAwayTeam] },
  //   })
    
  //   if (teams.count !== 2) {
  //     return 'There is no team with such id!';
  //   //  throw new HttpException(StatusCodes.UNAUTHORIZED, 'There is no team with such id!');
  //   }

  //   return true;
  // }
}

export default TeamsServices;
