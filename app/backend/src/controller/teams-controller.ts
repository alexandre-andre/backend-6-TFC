import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import TeamsServices from '../service/teams-service';

export default class TeamsController {
  public teamsServices: TeamsServices;
  constructor() {
    this.teamsServices = new TeamsServices();
  }
  
  public async getAllTeams(req: Request, res: Response) {
    
  }
}