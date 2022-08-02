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
}

export default MatchesService;

// https://sequelize.org/docs/v6/core-concepts/assocs/
