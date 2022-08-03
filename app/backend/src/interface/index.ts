interface ILogin {
  email: string,
  password: string,
}

interface IMatchRequest {
  homeTeam: string,
  awayTeam: string,
  homeTeamGoals: string,
  awayTeamGoals: string
}

export { ILogin, IMatchRequest };
