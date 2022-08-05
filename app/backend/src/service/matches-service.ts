import { StatusCodes } from 'http-status-codes';
import { Op } from 'sequelize';
import { IMatchRequest } from '../interface';
import { EStatusMessage, HttpException } from '../utils';
import Match from '../database/models/match';
import Team from '../database/models/team';
import TeamsServices from './teams-service';

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

  readonly countTeams = async (homeTeam: number, awayTeam: number) => {
    const teams = await Team.findAndCountAll({
      where: { id: [homeTeam, awayTeam] },
    });

    if (teams.count !== 2) {
      // return 'There is no team with such id!';
      throw new HttpException(StatusCodes.UNAUTHORIZED, 'There is no team with such id!');
    }

    return true;
  };

  public postMatch = async (reqBody: IMatchRequest) => {
    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = reqBody;

    if (homeTeam === awayTeam) {
      // return EStatusMessage.impossibleMatch;
      throw new HttpException(StatusCodes.UNAUTHORIZED, EStatusMessage.impossibleMatch);
    }

    await this.countTeams(homeTeam, awayTeam);

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
    await Match.update(
      { inProgress: false },
      { where: { id } },
    );

    return { message: 'Finished' };
  };

  public updateMatchInProgess = async (requestBody: IMatchRequest, matchId: string) => {
    const { homeTeamGoals, awayTeamGoals } = requestBody;

    const match = await Match.findOne(
      { where: { [Op.and]: [{ id: matchId }, { inProgress: true }] } },
    );

    if (!match) {
      return EStatusMessage.impossibleUpdate;
      // throw new HttpException(StatusCodes.NOT_FOUND, EStatusMessage.impossibleMatch);
    }

    match.homeTeamGoals = homeTeamGoals;
    match.awayTeamGoals = awayTeamGoals;
    await match.save();

    return `Partida ${matchId} atualizada para: ${match.homeTeamGoals} X ${match.awayTeamGoals}`;
  };
}

export default MatchesService;

// https://sequelize.org/docs/v6/core-concepts/assocs/
