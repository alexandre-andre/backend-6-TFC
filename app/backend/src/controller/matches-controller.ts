import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import MatchesService from '../service/matches-service';

class MatchesController {
  private _matchesServices: MatchesService;

  constructor() {
    this._matchesServices = new MatchesService();
  }

  public async getAllMatches(_req: Request, res: Response) {
    const allMatches = await this._matchesServices.getAllMatches();

    return res.status(StatusCodes.OK).json(allMatches);
  }
}

export default MatchesController;
