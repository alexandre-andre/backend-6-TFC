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
}

export default MatchesService;

// https://sequelize.org/docs/v6/core-concepts/assocs/