import { Request, Response, Router } from 'express';

import MatchesController from '../controller/matches-controller';

const matchesRouters = Router();

const matchesController = new MatchesController();

matchesRouters.get(
  '/',
  (req: Request, res: Response) => matchesController.getAllMatches(req, res),
);

export default matchesRouters;
