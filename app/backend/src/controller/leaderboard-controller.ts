import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
// import LeaderboardService from '../service/leaderboard-teste-service';
import LeaderboardService from '../service/leaderboard-mysql-service';

class LeaderboardController {
  public leaderboardService: LeaderboardService;

  constructor() {
    this.leaderboardService = new LeaderboardService();
  }

  public async getRankAtHome(_request: Request, response: Response) {
    const result = await this.leaderboardService.getRankAtHome();

    response.status(StatusCodes.OK).json(result);
  }

	public async getRankWhenVisitor(_request: Request, response: Response) {
		const result = await this.leaderboardService.getRankWhenVisitor();

    response.status(StatusCodes.OK).json(result);
	}
}

export default LeaderboardController;
