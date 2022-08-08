import { Request, Response, Router } from 'express';
import LeaderboardController from '../controller/leaderboard-controller';

const leaderRouter = Router();
const leaderboardController = new LeaderboardController();

leaderRouter.get(
  '/home',
  (request: Request, response: Response) => leaderboardController.getRankAtHome(request, response),
);

export default leaderRouter;
