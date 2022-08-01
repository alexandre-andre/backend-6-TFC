import Team from '../database/models/team';

class TeamsServices {
  public getAllTeams = async () => {
    const teams = await Team.findAll();

    return teams;
  };
}

export default TeamsServices;
