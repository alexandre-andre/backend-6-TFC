import { StatusCodes } from 'http-status-codes';
import { IMatchRequest } from '../interface';
import { EStatusMessage, HttpException } from '../utils';
import Match from '../database/models/match';
import Team from '../database/models/team';
import TeamsServices from './teams-service';
import { Op } from 'sequelize';

class MatchesService {
  public teamsServices: TeamsServices;

  constructor() {
    this.teamsServices = new TeamsServices();
  }

  public getAllMatches = async () => {
    const allMatches = await Match.findAll(
      {
        include: [
          {
            model: Team,
            as: 'teamHome',
            attributes: { exclude: ['id'] },
          },
          {
            model: Team,
            as: 'teamAway',
            attributes: { exclude: ['id'] },
          },
        ],
      },
    );

    return allMatches;
  };

  public getMatchesInProgress = async (inProgress: string) => {
    const allMatches = await this.getAllMatches();

    
    const matchesInProgress = allMatches.filter(
      (match) => JSON.stringify(match.inProgress) === inProgress,
    );

    return matchesInProgress;
  };

  public postMatch = async (reqBody: IMatchRequest) => {
    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = reqBody;
    
    if (homeTeam === awayTeam) {
      return EStatusMessage.impossibleMatch;
      // throw new HttpException(StatusCodes.UNAUTHORIZED, EStatusMessage.impossibleMatch);
    }

    // await this.teamsServices.countTeams(homeTeam, awayTeam);
    const teams = await Team.findAndCountAll({
      where: { id: [homeTeam, awayTeam] },
    })
    
     if (teams.count !== 2) {
      //  return 'There is no team with such id!';
       throw new HttpException(StatusCodes.UNAUTHORIZED, 'There is no team with such id!');
     }

    const currentMatch = await Match.create(
      {
        homeTeam,
        homeTeamGoals,
        awayTeam,
        awayTeamGoals,
        inProgress: true,
      },
    );

    return currentMatch;
  };

  public finishMatch = async (id: string) => {
    const finishedMatch = await Match.update(
      { inProgress: false },
      { where: { id } },
    );

    return { message: 'Finished' };
  };
}

export default MatchesService;

// https://sequelize.org/docs/v6/core-concepts/assocs/
