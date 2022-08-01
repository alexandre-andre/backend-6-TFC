import Match from '../database/models/match';

class MatchesService {
  public async getAllMatches() {
    const allMatches = await Match.findAll();

    return allMatches;
  }
}

export default MatchesService;
