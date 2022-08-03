import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import MatchesService from '../service/matches-service';

class MatchesController {
  private _matchesServices: MatchesService;

  constructor() {
    this._matchesServices = new MatchesService();
  }

  public async getAllMatches(request: Request, response: Response) {
    if (request.query.inProgress) {
      const { inProgress }: any = request.query;

      const result = await this._matchesServices.getMatchesInProgress(inProgress);

      return response.status(StatusCodes.OK).json(result);
    }

    const allMatches = await this._matchesServices.getAllMatches();

    return response.status(StatusCodes.OK).json(allMatches);
  }

  public async postMatch(request: Request, response: Response) {
    const match = await this._matchesServices.postMatch(request.body);

    return response.status(StatusCodes.OK).json(match);
  }
}

export default MatchesController;
