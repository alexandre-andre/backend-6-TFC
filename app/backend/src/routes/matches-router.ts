import { Request, Response, Router } from 'express';

import MatchesController from '../controller/matches-controller';
// import LoginController from '../controller/login-controller';

const matchesRouters = Router();

const matchesController = new MatchesController();
// const loginController = new LoginController();

matchesRouters.get(
  '/',
  (req: Request, res: Response) => matchesController.getAllMatches(req, res),
);

matchesRouters.post(
  '/',
  (req: Request, res: Response) => {
    // loginController.tokenAuthenticate(req, res),
    matchesController.postMatch(req, res);
  },
);

export default matchesRouters;
