interface ILogin {
  email: string,
  password: string,
}

interface IMatchRequest {
  homeTeam: number,
  awayTeam: number,
  homeTeamGoals: number,
  awayTeamGoals: number
}

export { ILogin, IMatchRequest };
