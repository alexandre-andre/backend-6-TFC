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
    console.log('TeamsController > ', teams);
    
    return res.status(StatusCodes.OK).json(teams);
  }
}