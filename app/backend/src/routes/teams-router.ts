import { Request, Response, Router } from 'express';
import TeamsController from '../controller/teams-controller';

const teamsRouters = Router();
import 'express-async-errors';

const teamsController = new TeamsController();

teamsRouters.get(
  '/',
  (req: Request, res: Response) => teamsController.getAllTeams(req, res),
);

teamsRouters.get(
  '/:id',
  (req: Request, res: Response) => teamsController.getTeamById(req, res),
);

export default teamsRouters;
