import { Request, Response, Router } from 'express';

import MatchesController from '../controller/matches-controller';
import mid from '../middlewares';

const matchesRouters = Router();

const matchesController = new MatchesController();

matchesRouters.get(
  '/',
  (req: Request, res: Response) => matchesController.getAllMatches(req, res),
);

matchesRouters.post(
  '/',
  mid.tokenAuthentication,
  (req: Request, res: Response) => {
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
