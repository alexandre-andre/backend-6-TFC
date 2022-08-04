import { Request, Response, Router } from 'express';

import MatchesController from '../controller/matches-controller';
// import TeamsController from '../controller/teams-controller';

import mid from '../middlewares';

const matchesRouters = Router();

const matchesController = new MatchesController();
// const teamsController = new TeamsController();

matchesRouters.get(
  '/',
  (req: Request, res: Response) => matchesController.getAllMatches(req, res),
);

matchesRouters.post(
  '/',
  mid.tokenAuthentication,
  (req: Request, res: Response) => {
    // teamsController.getTeamById(req, res);
    matchesController.postMatch(req, res);
  },
);

matchesRouters.patch(
  '/:id/finish',
  mid.tokenAuthentication,
  (req: Request, res: Response) => {
    matchesController.finishMatch(req, res);
  },
);
export default matchesRouters;
