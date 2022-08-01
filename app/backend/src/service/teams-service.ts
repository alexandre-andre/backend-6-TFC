import Team from '../database/models/team';

class TeamsServices {
  public async getAllTeams() {
    return await Team.findAll();
  }
}

export default TeamsServices;