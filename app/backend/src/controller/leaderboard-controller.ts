import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import LeaderboardService from '../service/leaderboard-service';

class LeaderboardController {
   public leaderboardService: LeaderboardService;

	constructor() {
		this.leaderboardService = new LeaderboardService();
	}
	public async getLeaderboard(_request: Request, response: Response) {
		const result = await this.leaderboardService.getLeaderboard();

		return response.status(StatusCodes.OK).json(result);
	}
}

export default LeaderboardController;
