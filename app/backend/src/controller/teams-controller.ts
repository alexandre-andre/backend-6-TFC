import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import TeamsServices from '../service/teams-service';

export default class TeamsController {
  public teamsServices: TeamsServices;
  constructor() {
    this.teamsServices = new TeamsServices();
  }

  public async getAllTeams(_req: Request, res: Response) {
    const teams = await this.teamsServices.getAllTeams();

    return res.status(StatusCodes.OK).json(teams);
  }

  public async getTeamById(req: Request, res: Response) {
    const id: number = parseInt(req.params.id, 10);

    const team = await this.teamsServices.getTeamById(id);

    return res.status(StatusCodes.OK).json(team);
  }
}
