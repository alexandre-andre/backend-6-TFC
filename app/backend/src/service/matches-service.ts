import { StatusCodes } from 'http-status-codes';
import { IMatchRequest } from '../interface';
import { HttpException } from '../utils';
import Match from '../database/models/match';
import Team from '../database/models/team';

class MatchesService {
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

    if (JSON.stringify(finishedMatch) === '[]') {
      throw new HttpException(StatusCodes.NOT_FOUND, 'Match not found');
    }

    return { message: 'Finished' };
  };
}

export default MatchesService;

// https://sequelize.org/docs/v6/core-concepts/assocs/
