import { Request, Response, Router } from 'express';

import TeamsController from '../controller/teams-controller';

const teamsRouters = Router();

const teamsController = new TeamsController();

teamsRouters.get('/',
  (req: Request, res: Response) => teamsController.getAllTeams(req, res),
);

export default teamsRouters;